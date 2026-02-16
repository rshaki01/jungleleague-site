export function CommunityIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Outer circle */}
      <circle cx="12" cy="12" r="10" />

      {/* Center person */}
      <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M7 18a5 5 0 0 1 10 0" />

      {/* Side people */}
      <path d="M6 11a2 2 0 1 0 0-4" />
      <path d="M18 11a2 2 0 1 0 0-4" />
    </svg>
  );
}
