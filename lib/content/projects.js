export const projectFilters = ["All", "Web design", "Branding", "Development", "Support"];

export const projects = [
  {
    slug: "radiant-skincare-branding",
    title: "Radiant skincare branding",
    description: "Radiant skincare is offering a user-centric, ad-free platform.",
    image: "/images/work-1.jpg",
    tags: ["Branding", "UX/UI"],
    category: "Branding",
  },
  {
    slug: "apex-clothing-rebrand",
    title: "Apex clothing Co. rebrand",
    description: "Elevates roots for a more confident apparel brand.",
    image: "/images/work-2.jpg",
    tags: ["Strategy", "Visual identity"],
    category: "Web design",
  },
  {
    slug: "vero-app-development",
    title: "Vero app development",
    description: "Vero entered a digital market in a competitive social media landscape.",
    image: "/images/work-3.jpg",
    tags: ["App build", "Development"],
    category: "Development",
  },
  {
    slug: "stoyo-branding",
    title: "Stoyo branding",
    description: "Visual identity and packaging design for a Tokyo brand.",
    image: "/images/work-4.jpg",
    tags: ["Branding", "Support"],
    category: "Support",
  },
  {
    slug: "timeless-impressions-redesign",
    title: "Timeless impressions redesign",
    description: "Gives new life to an eco-conscious accessories brand.",
    image: "/images/work-5.jpg",
    tags: ["Redesign", "Brand"],
    category: "Web design",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
