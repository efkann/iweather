import { SVGProps } from 'react';

const Wind = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M128 192c3.39 9.15 13.67 16 24 16a24 24 0 0 0 0-48H40M96 64c3.39-9.15 13.67-16 24-16a24 24 0 0 1 0 48H24M184 96c3.39-9.15 13.67-16 24-16a24 24 0 0 1 0 48H32"
    />
  </svg>
);

const Thermometer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M128 160V88"
    />
    <circle
      cx={128}
      cy={184}
      r={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M96 48a32 32 0 0 1 64 0v90a56 56 0 1 1-64 0Z"
    />
  </svg>
);

const RainCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="m96 208 32-48M120 240l32-48M88 88a68.06 68.06 0 1 1 68 72H76a44 44 0 1 1 14.2-85.66"
    />
  </svg>
);

const Drop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M208 144c0-72-80-128-80-128S48 72 48 144a80 80 0 0 0 160 0Z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M136 192c20-3.37 36.61-20 40-40"
    />
  </svg>
);

const Sun = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M128 40v-8"
    />
    <circle
      cx={128}
      cy={128}
      r={56}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="m64 64-8-8M64 192l-8 8M192 64l8-8M192 192l8 8M40 128h-8M128 216v8M216 128h8"
    />
  </svg>
);

const Spinner = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M128 32v32M224 128h-32M195.88 195.88l-22.63-22.63M128 224v-32M60.12 195.88l22.63-22.63M32 128h32M60.12 60.12l22.63 22.63"
    />
  </svg>
);

const CaretLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={18}
      d="m160 208-80-80 80-80"
    />
  </svg>
);

const CaretRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="m96 48 80 80-80 80"
    />
  </svg>
);

const PinArea = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <circle cx={128} cy={80} r={16} />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M184 80c0 56-56 88-56 88s-56-32-56-88a56 56 0 0 1 112 0Z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M200 155.14c19.72 7.28 32 17.52 32 28.86 0 22.09-46.56 40-104 40S24 206.09 24 184c0-11.34 12.28-21.58 32-28.86"
    />
  </svg>
);

const NavigationArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="m152 152 82.35-23a8 8 0 0 0 .27-15.21l-176-65.28a8 8 0 0 0-10.16 10.12l65.28 176a8 8 0 0 0 15.21-.27Z"
    />
  </svg>
);

const Gear = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <circle
      cx={128}
      cy={128}
      r={40}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M130.05 206.11h-4L94 224a104.61 104.61 0 0 1-34.11-19.2l-.12-36c-.71-1.12-1.38-2.25-2-3.41L25.9 147.24a99.15 99.15 0 0 1 0-38.46l31.84-18.1c.65-1.15 1.32-2.29 2-3.41l.16-36A104.58 104.58 0 0 1 94 32l32 17.89h4L162 32a104.61 104.61 0 0 1 34.11 19.2l.12 36c.71 1.12 1.38 2.25 2 3.41l31.85 18.14a99.15 99.15 0 0 1 0 38.46l-31.84 18.1c-.65 1.15-1.32 2.29-2 3.41l-.16 36A104.58 104.58 0 0 1 162 224Z"
    />
  </svg>
);

export {
  Wind,
  Thermometer,
  RainCloud,
  Drop,
  Sun,
  Spinner,
  CaretLeft,
  CaretRight,
  PinArea,
  NavigationArrow,
  Gear,
};
