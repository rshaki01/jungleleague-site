export function CommunityIcon({ className = "h-10 w-10" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Outer globe */}
      <circle cx="12" cy="12" r="9" />

      {/* Vertical longitude curves */}
      <path d="M12 3c3.5 4 3.5 14 0 18" />
      <path d="M12 3c-3.5 4-3.5 14 0 18" />

      {/* Horizontal latitude lines */}
      <path d="M3 12h18" />
      <path d="M5 8h14" />
      <path d="M5 16h14" />
    </svg>
  );
}
