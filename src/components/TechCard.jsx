const CATEGORY_STYLES = {
  Frontend: "bg-sky-50 text-sky-700",
  Backend: "bg-emerald-50 text-emerald-700",
  Database: "bg-indigo-50 text-indigo-700",
  Language: "bg-amber-50 text-amber-700",
  Styling: "bg-cyan-50 text-cyan-700",
  DevOps: "bg-violet-50 text-violet-700",
  Tools: "bg-rose-50 text-rose-700",
};

export default function TechCard({ tech, isAdded, onAdd }) {
  const categoryStyle = CATEGORY_STYLES[tech.category] ?? "bg-slate-100 text-slate-700";

  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <img
          src={tech.icon}
          alt={`${tech.name} logo`}
          className="h-9 w-9 object-contain"
          loading="lazy"
        />
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{tech.name}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-500">
        {tech.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
        <span className={`rounded-full px-2.5 py-1 font-medium ${categoryStyle}`}>
          {tech.category}
        </span>
        <span className="text-slate-500">{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-slate-700">
          <span className="text-amber-400">★</span>
          {tech.rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={
          isAdded
            ? "mt-5 w-full cursor-not-allowed rounded-xl bg-slate-100 py-2.5 text-sm font-semibold text-slate-400"
            : "mt-5 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
        }
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}
