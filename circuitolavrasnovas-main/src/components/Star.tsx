type StarProps = {
  className?: string;
  size?: number;
  strokeWidth?: number;
};

// 8-point star matching the logo's central element.
export function Star({ className, size = 24, strokeWidth = 0 }: StarProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    >
      {/* Vertical and horizontal long rays */}
      <polygon points="50,2 54,46 98,50 54,54 50,98 46,54 2,50 46,46" />
      {/* Diagonal shorter rays */}
      <polygon
        points="50,18 58,42 82,50 58,58 50,82 42,58 18,50 42,42"
        transform="rotate(45 50 50)"
        opacity="0.92"
      />
    </svg>
  );
}
