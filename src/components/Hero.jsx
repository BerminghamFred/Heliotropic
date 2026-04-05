export function Hero() {
  return (
    <div className="relative mx-auto max-w-6xl px-6 pb-6 pt-8 sm:px-10 sm:pb-8 sm:pt-10 lg:px-12 lg:pb-10 lg:pt-12">
      <div className="relative z-10 w-full max-w-3xl text-left">
        <a
          href="/"
          className="mb-0 block w-max max-w-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heli-orange focus-visible:ring-offset-2 focus-visible:ring-offset-heli-deep motion-reduce:animate-none animate-hero-1"
        >
          <img
            src="/logo.png"
            alt="Heliotropic"
            width={1200}
            height={393}
            className="-mt-[3.6rem] -mb-[4.5rem] -ml-[5.25rem] block h-[18rem] w-auto max-w-full [clip-path:inset(20%_0_25%_0)] object-left object-top drop-shadow-[0_3px_32px_rgba(0,0,0,0.32)] transition-transform duration-300 ease-out motion-reduce:transition-none sm:-mt-[4.35rem] sm:-mb-[5.4375rem] sm:h-[21.75rem] lg:-mt-[5.4rem] lg:-mb-[6.75rem] lg:h-[27rem] xl:-mt-[6.15rem] xl:-mb-[7.6875rem] xl:h-[30.75rem] hover:scale-[1.02] motion-reduce:hover:scale-100"
            decoding="async"
          />
        </a>

        <div className="space-y-2 sm:space-y-3">
          <h1 className="font-heading motion-reduce:animate-none animate-hero-2 text-4xl font-semibold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06]">
            Fanless heat pumps for net-zero new build housing.
          </h1>
          <p className="motion-reduce:animate-none animate-hero-2-delayed max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Quiet, space-efficient, roof mounted heat pumps.
          </p>
        </div>

        <a
          href="#contact"
          className="motion-reduce:animate-none mt-4 inline-flex min-h-11 w-fit items-center justify-center rounded-full bg-heli-orange px-8 py-3 text-center text-sm font-semibold tracking-wide text-white shadow-sm transition-colors duration-200 animate-hero-3 hover:bg-heli-orange-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heli-orange focus-visible:ring-offset-2 focus-visible:ring-offset-heli-deep sm:mt-5"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}
