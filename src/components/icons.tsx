import type { SVGProps } from 'react';

export const WarframeLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
    <path d="M12 2v20" />
    <path d="M12 12c-3.75 0-7.5 3-7.5 6" />
    <path d="M12 12c3.75 0 7.5 3 7.5 6" />
    <path d="M12 12c-3.75 0-7.5-3-7.5-6" />
    <path d="M12 12c3.75 0 7.5-3 7.5-6" />
  </svg>
);
