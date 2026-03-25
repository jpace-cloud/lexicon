import React, { forwardRef, useId } from 'react';
import './Toggle.css';

export interface ToggleProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md';
  label?: string;
  labelPosition?: 'left' | 'right';
  className?: string;
  style?: React.CSSProperties;
}

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      checked = false,
      onChange,
      disabled = false,
      size = 'md',
      label,
      labelPosition = 'right',
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const labelId = useId();

    const wrapperClasses = [
      'lex-toggle',
      `lex-toggle--${size}`,
      `lex-toggle--label-${labelPosition}`,
      disabled && 'lex-toggle--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const trackClasses = [
      'lex-toggle__track',
      checked && 'lex-toggle__track--on',
    ]
      .filter(Boolean)
      .join(' ');

    const handleClick = () => {
      if (!disabled) {
        onChange?.(!checked);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleClick();
      }
    };

    return (
      <div className={wrapperClasses} style={style}>
        {label && labelPosition === 'left' && (
          <span className="lex-toggle__label" id={labelId}>
            {label}
          </span>
        )}
        <button
          ref={ref}
          type="button"
          className={trackClasses}
          role="switch"
          aria-checked={checked}
          aria-labelledby={label ? labelId : undefined}
          aria-label={!label ? 'Toggle' : undefined}
          disabled={disabled}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          {...rest}
        >
          <span className="lex-toggle__thumb" />
        </button>
        {label && labelPosition === 'right' && (
          <span className="lex-toggle__label" id={labelId}>
            {label}
          </span>
        )}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';

export default Toggle;
