export default function Wave({ size = 56 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* the crest, curling over */}
      <path d="M6 40c0-13 8-22 20-22 9 0 15 5 15 12 0 5-3 9-8 9-4 0-6-2-6-5s2-5 5-5" />
      {/* the sea it comes out of */}
      <path d="M4 50c5 0 5-3 10-3s5 3 10 3 5-3 10-3 5 3 10 3 5-3 10-3 5 3 10 3" opacity="0.75" />
      <path d="M14 58c4 0 4-2 8-2s4 2 8 2 4-2 8-2 4 2 8 2" opacity="0.4" />
    </svg>
  );
}
