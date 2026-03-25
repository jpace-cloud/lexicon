import React, { forwardRef } from 'react';
import './Badge.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
  dot?: boolean;
  removable?: boolean;
  onRemove?: () => void;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'default',
      size = 'sm',
      dot = false,
      removable = false,
      onRemove,
      className,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const classNames = [
      'lex-badge',
      `lex-badge--${variant}`,
      `lex-badge--${size}`,
      dot && 'lex-badge--dot',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span ref={ref} className={classNames} style={style} {...rest}>
        {dot && <span className="lex-badge__dot" aria-hidden="true" />}
        {!dot && children}
        {removable && !dot && (
          <button
            type="button"
            className="lex-badge__remove"
            onClick={onRemove}
            aria-label="Remove"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 3l6 6M9 3l-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
