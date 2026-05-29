"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function canUseWebGL() {
  try {
    const testCanvas = document.createElement("canvas");
    return Boolean(
      testCanvas.getContext("webgl2", { alpha: true }) ||
        testCanvas.getContext("webgl", { alpha: true }) ||
        testCanvas.getContext("experimental-webgl", { alpha: true })
    );
  } catch {
    return false;
  }
}

function animateCounters(scope) {
  const counters = scope.querySelectorAll("[data-count-to]");
  counters.forEach((element) => {
    const target = Number.parseFloat(element.getAttribute("data-count-to") || "0");
    if (Number.isNaN(target)) return;

    const suffix = element.getAttribute("data-count-suffix") || "";
    const prefix = element.getAttribute("data-count-prefix") || "";
    const decimals = target % 1 !== 0 ? 1 : 0;
    const state = { value: 0 };

    gsap.to(state, {
      value: target,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 86%",
      },
      onUpdate: () => {
        element.textContent = `${prefix}${state.value.toFixed(decimals)}${suffix}`;
      },
    });
  });
}

function setupThreeLayer(canvas, prefersReducedMotion) {
  if (!canvas || prefersReducedMotion) return () => {};

  if (!canUseWebGL()) {
    canvas.style.display = "none";
    return () => {
      canvas.style.display = "";
    };
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
      failIfMajorPerformanceCaveat: false,
    });
  } catch {
    canvas.style.display = "none";
    return () => {
      canvas.style.display = "";
    };
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const uniforms = {
    uTime: { value: 0 },
    uPointer: { value: new THREE.Vector2(0.5, 0.5) },
    uVelocity: { value: 0.03 },
  };

  const shaderMaterial = new THREE.ShaderMaterial({
    transparent: true,
    uniforms,
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,
    fragmentShader: `
      precision highp float;
      varying vec2 vUv;
      uniform float uTime;
      uniform vec2 uPointer;
      uniform float uVelocity;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      void main() {
        vec2 uv = vUv;
        float centerDist = distance(uv, vec2(0.5));
        float pointerDist = distance(uv, uPointer);

        uv.x += sin((uv.y + uTime * 0.05) * 18.0) * (0.002 + uVelocity * 0.006);
        uv.y += sin((uv.x + uTime * 0.08) * 12.0) * (0.001 + uVelocity * 0.004);

        float grain = hash(uv * (410.0 + uTime * 1.4) + uTime * 0.1);
        float haze = smoothstep(0.55, 0.06, pointerDist) * 0.16;
        float vignette = smoothstep(0.84, 0.22, centerDist) * 0.6;
        float intensity = (grain * 0.14 + haze) * vignette;

        gl_FragColor = vec4(vec3(intensity), 0.18);
      }
    `,
  });

  const plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), shaderMaterial);
  scene.add(plane);

  const particlesCount = 140;
  const pointsGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particlesCount * 3);
  const seeds = new Float32Array(particlesCount);

  for (let i = 0; i < particlesCount; i += 1) {
    positions[i * 3] = (Math.random() - 0.5) * 2.6;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 2.6;
    positions[i * 3 + 2] = 0;
    seeds[i] = Math.random() * Math.PI * 2;
  }

  pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const pointsMaterial = new THREE.PointsMaterial({
    color: "#39ff14",
    transparent: true,
    opacity: 0.22,
    size: 0.012,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const points = new THREE.Points(pointsGeometry, pointsMaterial);
  scene.add(points);

  let velocity = 0.03;
  let rafId = 0;

  const onPointer = (event) => {
    uniforms.uPointer.value.set(event.clientX / window.innerWidth, 1 - event.clientY / window.innerHeight);
  };

  const onLenisScroll = (event) => {
    const nextVelocity = Math.abs(event.detail?.velocity || 0);
    velocity = clamp(nextVelocity * 0.035, 0.02, 0.24);
  };

  const onResize = () => {
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener("pointermove", onPointer, { passive: true });
  window.addEventListener("lenis:scroll", onLenisScroll);
  window.addEventListener("resize", onResize, { passive: true });

  const loop = (time) => {
    uniforms.uTime.value = time * 0.001;
    uniforms.uVelocity.value = gsap.utils.interpolate(uniforms.uVelocity.value, velocity, 0.08);

    const positionAttr = pointsGeometry.getAttribute("position");
    for (let i = 0; i < particlesCount; i += 1) {
      const baseX = positions[i * 3];
      const baseY = positions[i * 3 + 1];
      positionAttr.array[i * 3] = baseX + Math.sin(time * 0.00022 + seeds[i]) * 0.025;
      positionAttr.array[i * 3 + 1] = baseY + Math.cos(time * 0.00018 + seeds[i]) * 0.03;
    }
    positionAttr.needsUpdate = true;

    renderer.render(scene, camera);
    rafId = window.requestAnimationFrame(loop);
  };

  rafId = window.requestAnimationFrame(loop);

  return () => {
    window.cancelAnimationFrame(rafId);
    window.removeEventListener("pointermove", onPointer);
    window.removeEventListener("lenis:scroll", onLenisScroll);
    window.removeEventListener("resize", onResize);
    pointsGeometry.dispose();
    pointsMaterial.dispose();
    shaderMaterial.dispose();
    renderer.dispose();
  };
}

function setupGsapMotion(scope, prefersReducedMotion) {
  if (!scope || prefersReducedMotion) return () => {};

  const mm = gsap.matchMedia();
  const cleanups = [];

  mm.add(
    {
      desktop: "(min-width: 1024px)",
      mobile: "(max-width: 1023px)",
      reduceMotion: "(prefers-reduced-motion: reduce)",
    },
    (context) => {
      if (context.conditions?.reduceMotion) return;

      const heroImage = scope.querySelector(".js-hero-parallax");
      if (heroImage) {
        ScrollTrigger.getById("hero-parallax")?.kill();
        gsap.set(heroImage, {
          force3D: true,
          willChange: "transform",
          backfaceVisibility: "hidden",
          transformPerspective: 1000,
          yPercent: 0,
          scale: 1,
          transformOrigin: "50% 0%",
        });
      }

      const sectionHeadings = gsap.utils.toArray(
        scope.querySelectorAll("section h2, section h3, section h4")
      );
      const revealBlocks = gsap.utils.toArray(
        scope.querySelectorAll("section p, section li, section .tag-pill, section form label, section .corner-accent")
      ).filter((element) => !element.classList.contains("js-showcase-scale-text"));
      const revealMedia = gsap.utils.toArray(
        scope.querySelectorAll("section img, section video")
      ).filter(
        (element) =>
          element.clientWidth >= 120 &&
          element.clientHeight >= 100 &&
          !element.classList.contains("js-hero-parallax")
      );
      const parallaxCards = gsap.utils.toArray(scope.querySelectorAll(".lift-card"));

      gsap.set(sectionHeadings, { y: 48, autoAlpha: 0, willChange: "transform, opacity" });
      gsap.set(revealBlocks, { y: 26, autoAlpha: 0, willChange: "transform, opacity" });
      gsap.set(revealMedia, {
        clipPath: "inset(14% 0% 16% 0% round 18px)",
        scale: 1.06,
        autoAlpha: 0.78,
        willChange: "transform, clip-path, opacity",
      });

      ScrollTrigger.batch(sectionHeadings, {
        once: true,
        start: "top 88%",
        onEnter: (targets) => {
          gsap.to(targets, {
            y: 0,
            autoAlpha: 1,
            ease: "power3.out",
            duration: 1,
            stagger: 0.08,
            clearProps: "willChange",
          });
        },
      });

      ScrollTrigger.batch(revealBlocks, {
        once: true,
        start: "top 90%",
        onEnter: (targets) => {
          gsap.to(targets, {
            y: 0,
            autoAlpha: 1,
            ease: "power2.out",
            duration: 0.9,
            stagger: 0.045,
            clearProps: "willChange",
          });
        },
      });

      ScrollTrigger.batch(revealMedia, {
        once: true,
        start: "top 88%",
        onEnter: (targets) => {
          gsap.to(targets, {
            clipPath: "inset(0% 0% 0% 0% round 0px)",
            scale: 1,
            autoAlpha: 1,
            ease: "power3.out",
            duration: 1.25,
            stagger: 0.08,
            clearProps: "willChange",
          });
        },
      });

      parallaxCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: index % 2 === 0 ? 46 : 64 },
          {
            y: index % 2 === 0 ? -18 : -28,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.05,
            },
          }
        );
      });

      const backgrounds = gsap.utils.toArray(
        scope.querySelectorAll(".section-dark > .absolute.inset-0 img, .section-dark > .absolute.inset-0 video")
      );
      const workSection = scope.querySelector("[data-work-section]");
      const workHeading = scope.querySelector("[data-work-heading]");
      const workProjects = scope.querySelector("[data-work-projects]");

      const showcaseHeadline = scope.querySelector(".js-showcase-headline");
      if (showcaseHeadline) {
        gsap.set(showcaseHeadline, {
          willChange: "transform",
          transformOrigin: "50% 50%",
        });
        gsap.fromTo(
          showcaseHeadline,
          { scale: 1 },
          {
            scale: 0.62,
            ease: "none",
            scrollTrigger: {
              trigger: showcaseHeadline.closest("section"),
              start: "top 35%",
              end: "bottom top",
              scrub: 1.15,
            },
          }
        );
      }

      backgrounds.forEach((bg) => {
        gsap.to(bg, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: bg.closest("section"),
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        });
      });

      if (workSection && workHeading && workProjects) {
        ScrollTrigger.getById("work-heading-pin")?.kill();
        ScrollTrigger.create({
          id: "work-heading-pin",
          trigger: workSection,
          start: "top top",
          end: () => {
            const headingHeight = workHeading.offsetHeight;
            const projectsHeight = workProjects.scrollHeight;
            return `+=${Math.max(projectsHeight - headingHeight + 160, 400)}`;
          },
          pin: workHeading,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
      }

      const marqueeTracks = gsap.utils.toArray(scope.querySelectorAll(".marquee-track"));
      const marqueeTweens = marqueeTracks.map((track) => {
        track.style.animation = "none";
        return gsap.fromTo(
          track,
          { xPercent: 0 },
          { xPercent: -50, duration: 50, ease: "none", repeat: -1 }
        );
      });

      const onLenisScroll = (event) => {
        const velocity = Math.abs(event.detail?.velocity || 0);
        const timeScale = clamp(0.85 + velocity * 0.025, 0.8, 1.3);
        marqueeTweens.forEach((tween) => {
          gsap.to(tween, {
            timeScale,
            duration: 0.45,
            overwrite: true,
          });
        });
      };

      const onLenisIdle = () => {
        marqueeTweens.forEach((tween) => {
          gsap.to(tween, {
            timeScale: 0.9,
            duration: 0.9,
            overwrite: true,
          });
        });
      };

      let idleTimer = 0;
      const onLenis = (event) => {
        ScrollTrigger.update();
        onLenisScroll(event);
        window.clearTimeout(idleTimer);
        idleTimer = window.setTimeout(onLenisIdle, 140);
      };

      window.addEventListener("lenis:scroll", onLenis);
      cleanups.push(() => {
        window.clearTimeout(idleTimer);
        window.removeEventListener("lenis:scroll", onLenis);
      });

      const hoverTargets = gsap.utils.toArray(
        scope.querySelectorAll(".lift-card, .btn-sweep, .hover-underline, button, a")
      );

      hoverTargets.forEach((element) => {
        if (!(element instanceof HTMLElement)) return;
        if (element.closest("header")) return;

        const xTo = gsap.quickTo(element, "x", {
          duration: 0.45,
          ease: "power3.out",
        });
        const yTo = gsap.quickTo(element, "y", {
          duration: 0.45,
          ease: "power3.out",
        });
        const rTo = gsap.quickTo(element, "rotation", {
          duration: 0.45,
          ease: "power3.out",
        });

        const onMove = (event) => {
          const rect = element.getBoundingClientRect();
          const px = (event.clientX - rect.left) / Math.max(rect.width, 1);
          const py = (event.clientY - rect.top) / Math.max(rect.height, 1);
          xTo((px - 0.5) * 9);
          yTo((py - 0.5) * 7);
          rTo((px - 0.5) * 1.4);
        };

        const onLeave = () => {
          xTo(0);
          yTo(0);
          rTo(0);
        };

        element.addEventListener("pointermove", onMove);
        element.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          element.removeEventListener("pointermove", onMove);
          element.removeEventListener("pointerleave", onLeave);
          gsap.set(element, { x: 0, y: 0, rotation: 0 });
        });
      });

      animateCounters(scope);
      ScrollTrigger.refresh();
    }
  );

  return () => {
    cleanups.forEach((cleanup) => cleanup());
    mm.revert();
  };
}

export function PremiumMotionLayer() {
  const shaderCanvasRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [splashDone, setSplashDone] = useState(Boolean(reduceMotion));
  const transition = useMemo(
    () => ({
      duration: 1.25,
      ease: [0.16, 1, 0.3, 1],
    }),
    []
  );

  useEffect(() => {
    if (reduceMotion) {
      setSplashDone(true);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setSplashDone(true);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  useEffect(() => {
    const root = document.querySelector("main") ?? document;
    const cleanupGsap = setupGsapMotion(root, Boolean(reduceMotion));
    const cleanupThree = setupThreeLayer(shaderCanvasRef.current, Boolean(reduceMotion));

    return () => {
      cleanupGsap();
      cleanupThree();
    };
  }, [reduceMotion]);

  return (
    <div className="premium-motion-layer">
      {!splashDone && !reduceMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-90 overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 1, 0] }}
          transition={{ duration: 4, times: [0, 0.94, 1], ease: "linear" }}
        >


          <motion.div
            className="absolute inset-0 z-10 bg-[#39ff14]"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0.92, 0.14, 0] }}
            transition={{
              duration: 1.4,
              times: [0, 0.36, 0.72, 1],
              ease: [0.16, 1, 0.3, 1],
            }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 z-20 h-[32vmax] w-[32vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(57,255,20,0.34)_0%,rgba(0,247,255,0.18)_38%,transparent_72%)]"
            initial={{ scale: 0.15, opacity: 0 }}
            animate={{ scale: [0.15, 1.05, 1.28], opacity: [0, 0.95, 0] }}
            transition={{ duration: 1.45, times: [0, 0.55, 1], ease: [0.2, 0.9, 0.2, 1] }}
          />

          <div className="absolute inset-0 z-50">
            <motion.div
              className="absolute"
              initial={{
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
                opacity: 0,
                scale: 0.72,
                rotate: -8,
                filter: "blur(8px)",
              }}
              animate={{
                top: "7px",
                left: "7px",
                x: "0%",
                y: "0%",
                opacity: 1,
                scale: 0.94,
                rotate: 0,
                filter: "blur(0px)",
              }}
              transition={{
                opacity: { duration: 0.62, delay: 0.05, ease: [0.16, 1, 0.3, 1] },
                scale: { duration: 0.85, delay: 0.05, ease: [0.16, 1, 0.3, 1] },
                rotate: { duration: 0.85, delay: 0.05, ease: [0.16, 1, 0.3, 1] },
                filter: { duration: 0.85, delay: 0.05, ease: [0.16, 1, 0.3, 1] },
                top: { duration: 1.75, delay: 1.05, ease: [0.22, 1, 0.36, 1] },
                left: { duration: 1.75, delay: 1.05, ease: [0.22, 1, 0.36, 1] },
                x: { duration: 1.75, delay: 1.05, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 1.75, delay: 1.05, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              <motion.span
                className="absolute inset-[-14px] rounded-full border border-[#8eff98]/65"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: [0, 1, 0], scale: [0.7, 1.16, 1.3] }}
                transition={{ duration: 1.35, times: [0, 0.58, 1], ease: "easeOut" }}
              />
              <motion.span
                className="absolute inset-[-22px] rounded-full border border-[#2bf7ff]/50"
                initial={{ opacity: 0, scale: 0.65 }}
                animate={{ opacity: [0, 0.9, 0], scale: [0.65, 1.2, 1.38] }}
                transition={{ duration: 1.55, times: [0, 0.52, 1], ease: "easeOut" }}
              />
              <Image
                src="/images/mklogonew.png"
                alt="MK Webcraft"
                width={220}
                height={52}
                priority
                className="h-[42px] w-auto drop-shadow-[0_0_16px_rgba(57,255,20,0.45)]"
              />
            </motion.div>
          </div>

          <motion.div
            className="absolute left-0 right-0 top-0 z-30 h-1/2 bg-[#0b0b0c]"
            initial={{ y: "0%" }}
            animate={{ y: "-105%" }}
            transition={{
              delay: 1,
              duration: 1,
              ease: [0.7, 0, 0.2, 1],
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 z-30 h-1/2 bg-[#0b0b0c]"
            initial={{ y: "0%" }}
            animate={{ y: "105%" }}
            transition={{
              delay: 1,
              duration: 1,
              ease: [0.7, 0, 0.2, 1],
            }}
          />
        </motion.div>
      )}

      {reduceMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-40 bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={transition}
        />
      )}

      <canvas
        ref={shaderCanvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-10 h-full w-full opacity-[0.26]"
      />
    </div>
  );
}
