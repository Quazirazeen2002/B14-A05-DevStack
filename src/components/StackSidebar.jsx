export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  const count = stack.length;

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-400">
        {count === 0
          ? "No technologies selected yet."
          : `${count} Technology Selected${count > 1 ? "s" : ""}`}
      </p>

      {count === 0 ? (
        <div className="mt-5 flex h-28 items-center justify-center rounded-xl border border-dashed border-slate-200 text-center text-sm text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <ul className="mt-5 flex flex-col gap-2.5">
          {stack.map((tech) => (
            <li
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2.5"
            >
              <img src={tech.icon} alt="" className="h-7 w-7 shrink-0 object-contain" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">{tech.name}</p>
                <p className="text-xs text-slate-400">{tech.category}</p>
              </div>
              <button
                type="button"
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name} from stack`}
                className="shrink-0 text-slate-400 transition-colors hover:text-slate-700"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {count > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-xl border border-rose-200 py-2.5 text-sm font-semibold text-rose-500 transition-colors hover:bg-rose-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
