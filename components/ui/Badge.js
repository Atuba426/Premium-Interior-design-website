import { Star } from "lucide-react";

export default function Badge({ rating = "4.9", label = "Google Rating", reviews = "500+ reviews" }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-border bg-white/80 px-4 py-2.5 card-shadow">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} className="fill-accent text-accent" />
        ))}
      </div>
      <div className="h-4 w-px bg-border" />
      <span className="text-[14px] font-semibold text-text-primary">{rating}</span>
      <span className="text-[13px] text-text-secondary">{label} · {reviews}</span>
    </div>
  );
}
