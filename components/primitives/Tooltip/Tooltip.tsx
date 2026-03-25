import React, { useState, useRef, useCallback, useEffect, useId } from 'react';
import './Tooltip.css';

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps {
  content: React.ReactNode;
  position?: TooltipPosition;
  delay?: number;
  maxWidth?: string | number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactElement;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'top',
  delay,
  maxWidth,
  className,
  style,
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipId = useId();

  const resolvedDelay = delay ?? parseInt(
    getComputedStyle(document.documentElement)
      .getPropertyValue('--tooltip-default-delay')
      .trim() || '300',
    10
  );

  const show = useCallback(() => {
    timeoutRef.current = setTimeout(() => setVisible(true), resolvedDelay);
  }, [resolvedDelay]);

  const hide = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(false);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const classNames = [
    'lex-tooltip__bubble',
    `lex-tooltip__bubble--${position}`,
    visible && 'lex-tooltip__bubble--visible',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const tooltipStyle: React.CSSProperties = {
    ...style,
    ...(maxWidth ? { maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth } : {}),
  };

  return (
    <span className="lex-tooltip" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {React.cloneElement(children, {
        'aria-describedby': visible ? tooltipId : undefined,
      })}
      <span
        id={tooltipId}
        role="tooltip"
        className={classNames}
        style={tooltipStyle}
        aria-hidden={!visible}
      >
        {content}
        <span className="lex-tooltip__arrow" aria-hidden="true" />
      </span>
    </span>
  );
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;
