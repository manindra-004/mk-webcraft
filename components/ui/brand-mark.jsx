export function BrandMark({ className = "" }) {
  return (
    <span className={`inline-flex items-baseline gap-0.5 font-semibold tracking-tight ${className}`}>
      MK Webcraft
      <sup className="text-[0.55em] font-normal opacity-70">®</sup>
    </span>
  );
}
