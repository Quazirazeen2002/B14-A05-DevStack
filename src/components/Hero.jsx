import bannerStack from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-5 pt-16 pb-20 sm:px-8 sm:pt-20 lg:pt-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
            Build Your Ideal
            <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-slate-600 sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#technologies"
              className="rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Technologies
            </a>
            <a
              href="#footer"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerStack}
            alt="Illustration of a layered development stack with glowing tech modules"
            className="w-full max-w-md drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
