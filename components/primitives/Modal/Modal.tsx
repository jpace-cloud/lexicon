import React, { forwardRef, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg' | 'full';
  title?: string;
  description?: string;
  closeOnOverlay?: boolean;
  footer?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      size = 'md',
      title,
      description,
      closeOnOverlay = true,
      footer,
      className,
      style,
      children,
    },
    ref
  ) => {
    const dialogRef = useRef<HTMLDivElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    const getFocusableElements = useCallback(() => {
      if (!dialogRef.current) return [];
      return Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
    }, []);

    const trapFocus = useCallback(
      (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;
        const focusable = getFocusableElements();
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      },
      [getFocusableElements]
    );

    useEffect(() => {
      if (!open) return;

      previousFocusRef.current = document.activeElement as HTMLElement;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
          return;
        }
        trapFocus(e);
      };

      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      // Focus first focusable or the dialog itself
      requestAnimationFrame(() => {
        const focusable = getFocusableElements();
        if (focusable.length > 0) {
          focusable[0].focus();
        } else {
          dialogRef.current?.focus();
        }
      });

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        previousFocusRef.current?.focus();
      };
    }, [open, onClose, trapFocus, getFocusableElements]);

    if (!open) return null;

    const classNames = [
      'lex-modal__dialog',
      `lex-modal__dialog--${size}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const titleId = title ? 'lex-modal-title' : undefined;
    const descId = description ? 'lex-modal-desc' : undefined;

    const modal = (
      <div className="lex-modal__overlay" onClick={closeOnOverlay ? onClose : undefined}>
        <div
          ref={(node) => {
            (dialogRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }}
          className={classNames}
          style={style}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descId}
          tabIndex={-1}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="lex-modal__header">
            {title && (
              <h2 className="lex-modal__title" id={titleId}>
                {title}
              </h2>
            )}
            <button
              type="button"
              className="lex-modal__close"
              onClick={onClose}
              aria-label="Close dialog"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M4 4l8 8M12 4l-8 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          {description && (
            <p className="lex-modal__description" id={descId}>
              {description}
            </p>
          )}
          <div className="lex-modal__body">{children}</div>
          {footer && <div className="lex-modal__footer">{footer}</div>}
        </div>
      </div>
    );

    return createPortal(modal, document.body);
  }
);

Modal.displayName = 'Modal';

export default Modal;
