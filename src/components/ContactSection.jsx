import { CONTACT } from "../config/contact.js";

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 4.5h3l1.5 4.5-2 1.5c1.2 2.4 3.1 4.3 5.5 5.5l1.5-2 4.5 1.5v3c0 .8-.6 1.5-1.4 1.6C14.8 21 6 12.2 6 2.9c0-.8.7-1.4 1.5-1.4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6h16v12H4V6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function MapIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const iconClass = "mt-0.5 h-5 w-5 shrink-0 text-heli-orange";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative z-10 mx-auto max-w-6xl px-6 py-5 sm:px-10 sm:py-6 lg:px-12 lg:py-8"
    >
      <div className="mx-auto max-w-xl lg:max-w-none">
        <h2
          id="contact-heading"
          className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Contact
        </h2>
        <p className="mt-2 max-w-lg text-white/65">
          Reach the team directly
        </p>

        <div className="mt-4 rounded-2xl border border-white/12 bg-white/[0.06] p-8 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] backdrop-blur-sm sm:mt-5 sm:p-10">
          <ul className="space-y-7">
            <li className="flex gap-4">
              <PhoneIcon className={iconClass} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/45">Phone</p>
                <a
                  href={CONTACT.phoneHref}
                  className="mt-1 inline-block text-lg font-medium text-white underline-offset-4 transition-colors hover:text-heli-orange focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heli-orange focus-visible:ring-offset-2 focus-visible:ring-offset-heli-deep"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MailIcon className={iconClass} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/45">Email</p>
                <a
                  href={CONTACT.emailHref}
                  className="mt-1 inline-block text-lg font-medium text-white underline-offset-4 transition-colors hover:text-heli-orange focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heli-orange focus-visible:ring-offset-2 focus-visible:ring-offset-heli-deep"
                >
                  {CONTACT.emailDisplay}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MapIcon className={iconClass} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
                  Service area
                </p>
                <p className="mt-1 text-lg font-medium text-white/90">{CONTACT.serviceArea}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
