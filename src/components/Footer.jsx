import { CONTACT } from "../config/contact.js";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-heli-deep/80 py-12 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div className="flex flex-col gap-4">
          <a
            href="/"
            className="inline-block w-fit rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heli-orange focus-visible:ring-offset-2 focus-visible:ring-offset-heli-deep"
          >
            <img
              src="/logo.png"
              alt="Heliotropic"
              width={480}
              height={156}
              className="h-24 w-auto max-w-full opacity-95 drop-shadow-[0_1px_12px_rgba(0,0,0,0.22)] sm:h-28"
              decoding="async"
            />
          </a>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            {CONTACT.phoneDisplay} · {CONTACT.emailDisplay}
          </p>
        </div>
        <p className="text-xs text-white/45">
          © {year} Heliotropic Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
