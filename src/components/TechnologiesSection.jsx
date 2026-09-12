import Loader from "./Loader";
import StackSidebar from "./StackSidebar";
import TechCard from "./TechCard";

export default function TechnologiesSection({
  technologies,
  isLoading,
  error,
  stack,
  stackIds,
  onAdd,
  onRemove,
  onRemoveAll,
}) {
  return (
    <section id="technologies" className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>
        <p className="mt-2 text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {isLoading && <Loader />}

      {!isLoading && error && (
        <p className="rounded-xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-600">
          Couldn't load the technology list right now. Please refresh the page.
        </p>
      )}

      {!isLoading && !error && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 xl:grid-cols-3">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isAdded={stackIds.has(tech.id)}
                onAdd={onAdd}
              />
            ))}
          </div>

          <StackSidebar stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
        </div>
      )}
    </section>
  );
}
