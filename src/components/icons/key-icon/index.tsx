interface IconProps {
  color: string;
  size?: number;
  className?: string;
}

export function KeyIcon({ color, size, className }: IconProps) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 32}
        height={size || 32}
        viewBox={`0 0 23 45`}
      >
        <text
          id="_"
          data-name="{"
          transform="translate(0 37)"
          fill={color}
          font-size="34"
          font-family="LEMONMILK-Bold, LEMON MILK"
          font-weight="700"
        >
          <tspan x="0" y="0">
            {'{'}
          </tspan>
        </text>
      </svg>
    </div>
  );
}
