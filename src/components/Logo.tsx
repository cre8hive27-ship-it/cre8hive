type Props = { className?: string; showWordmark?: boolean };

export function Logo({ className = "", showWordmark = true }: Props) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 2 L28 9 V23 L16 30 L4 23 V9 Z"
          fill="currentColor"
        />
        <path
          d="M16 10 L22 13.5 V20.5 L16 24 L10 20.5 V13.5 Z"
          fill="#F4B400"
        />
      </svg>
      {showWordmark && (
        <span className="font-display text-lg font-extrabold tracking-tight">
          Cre8Hive
        </span>
      )}
    </div>
  );
}
