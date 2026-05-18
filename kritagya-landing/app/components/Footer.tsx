import Image from "next/image";

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#C0C0C0" aria-hidden>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C0C0C0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#C0C0C0" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.34V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43c-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07 0 1.14-.93 2.07-2.07 2.07zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-background border-t border-border-soft py-12 px-6">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-6">
        <Image
          src="/kritagya_logo.png"
          alt="Kritagya Bhandari logo"
          width={80}
          height={80}
          className="h-[80px] w-auto"
        />

        <div className="flex items-center gap-6">
          {/* TODO: Add Facebook URL */}
          <a
            href="#"
            aria-label="Facebook"
            className="opacity-80 hover:opacity-100 transition"
          >
            <FacebookIcon />
          </a>
          {/* TODO: Add Instagram URL */}
          <a
            href="#"
            aria-label="Instagram"
            className="opacity-80 hover:opacity-100 transition"
          >
            <InstagramIcon />
          </a>
          {/* TODO: Add LinkedIn URL */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="opacity-80 hover:opacity-100 transition"
          >
            <LinkedInIcon />
          </a>
        </div>

        <p className="text-sm text-silver text-center">
          © 2025 Kritagya Bhandari. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
