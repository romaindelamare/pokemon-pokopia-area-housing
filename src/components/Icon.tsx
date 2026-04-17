interface IconProps {
  name: string;
  className?: string;
  size?: string | number;
  style?: React.CSSProperties;
}

export function Icon({ name, className, size, style }: IconProps) {
  return (
    <span
      className={`material-icons${className ? ` ${className}` : ''}`}
      aria-hidden="true"
      style={{ fontSize: size, ...style }}
    >
      {name}
    </span>
  );
}
