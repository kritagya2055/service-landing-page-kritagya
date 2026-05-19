import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 22, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...rest,
  };
}

export function SocialMediaIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden>
      <circle cx="18" cy="5" r="2.4" />
      <circle cx="6" cy="12" r="2.4" />
      <circle cx="18" cy="19" r="2.4" />
      <line x1="8.1" y1="10.8" x2="15.9" y2="6.2" />
      <line x1="8.1" y1="13.2" x2="15.9" y2="17.8" />
    </svg>
  );
}

export function GoogleAdsIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}

export function SeoIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden>
      <circle cx="10.5" cy="10.5" r="6" />
      <line x1="15" y1="15" x2="20" y2="20" />
      <polyline points="7.5 11 10 8.5 12 10.5 14 7.5" />
    </svg>
  );
}

export function LandingPageIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <line x1="4" y1="8" x2="20" y2="8" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="8" y1="15" x2="14" y2="15" />
      <rect x="8" y="17.5" width="8" height="2" rx="1" />
    </svg>
  );
}

export function MetaAdsIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden>
      <path d="M3 11l13-6v14l-13-6z" />
      <path d="M6 11v5a2 2 0 0 0 2 2h2v-5" />
      <line x1="19" y1="9" x2="21" y2="9" />
      <line x1="19" y1="13" x2="21" y2="13" />
    </svg>
  );
}

export function WebsiteIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <line x1="3" y1="8" x2="21" y2="8" />
      <circle cx="6" cy="6" r="0.6" fill="currentColor" />
      <circle cx="8" cy="6" r="0.6" fill="currentColor" />
      <line x1="8" y1="20" x2="16" y2="20" />
      <line x1="12" y1="17" x2="12" y2="20" />
    </svg>
  );
}

export function ContentIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden>
      <path d="M4 20l4-1 11-11-3-3L5 16l-1 4z" />
      <line x1="14" y1="6" x2="17" y2="9" />
    </svg>
  );
}

export function EmailIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
}
