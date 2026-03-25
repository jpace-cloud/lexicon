import React, { forwardRef } from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      disabled,
      className,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const classNames = [
      'lex-button',
      `lex-button--${variant}`,
      `lex-button--${size}`,
      fullWidth && 'lex-button--full-width',
      loading && 'lex-button--loading',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classNames}
        style={style}
        disabled={disabled || loading}
        aria-disabled={disabled || loading || undefined}
        aria-busy={loading || undefined}
        {...rest}
      >
        {loading && (
          <span className="lex-button__spinner" aria-hidden="true">
            <svg
              className="lex-button__spinner-svg"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle
                cx="8"
                cy="8"
                r="6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="28"
                strokeDashoffset="20"
              />
            </svg>
          </span>
        )}
        <span className={`lex-button__content${loading ? ' lex-button__content--hidden' : ''}`}>
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
