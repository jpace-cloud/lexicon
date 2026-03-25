import React, { forwardRef, useId } from 'react';
import './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      size = 'md',
      leadingIcon,
      trailingIcon,
      disabled,
      className,
      style,
      id: externalId,
      ...rest
    },
    ref
  ) => {
    const autoId = useId();
    const id = externalId || autoId;
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;
    const describedBy = [error ? errorId : null, helperText ? helperId : null]
      .filter(Boolean)
      .join(' ') || undefined;

    const wrapperClasses = [
      'lex-input',
      `lex-input--${size}`,
      error && 'lex-input--error',
      disabled && 'lex-input--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClasses} style={style}>
        {label && (
          <label className="lex-input__label" htmlFor={id}>
            {label}
          </label>
        )}
        <div className="lex-input__wrapper">
          {leadingIcon && (
            <span className="lex-input__icon lex-input__icon--leading" aria-hidden="true">
              {leadingIcon}
            </span>
          )}
          <input
            ref={ref}
            id={id}
            className="lex-input__field"
            disabled={disabled}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            {...rest}
          />
          {trailingIcon && (
            <span className="lex-input__icon lex-input__icon--trailing" aria-hidden="true">
              {trailingIcon}
            </span>
          )}
        </div>
        {error && (
          <p className="lex-input__error" id={errorId} role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="lex-input__helper" id={helperId}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
