import React, { forwardRef, useState } from 'react';
import './Avatar.css';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'round' | 'square';
export type AvatarStatus = 'online' | 'offline' | 'busy';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  status?: AvatarStatus;
}

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      src,
      alt = '',
      name,
      size = 'md',
      shape = 'round',
      status,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const [imgError, setImgError] = useState(false);

    const classNames = [
      'lex-avatar',
      `lex-avatar--${size}`,
      `lex-avatar--${shape}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const showImage = src && !imgError;
    const initials = name ? getInitials(name) : null;

    return (
      <span
        ref={ref}
        className={classNames}
        style={style}
        role="img"
        aria-label={alt || name || 'Avatar'}
        {...rest}
      >
        {showImage ? (
          <img
            className="lex-avatar__image"
            src={src}
            alt={alt || name || ''}
            onError={() => setImgError(true)}
          />
        ) : initials ? (
          <span className="lex-avatar__initials" aria-hidden="true">
            {initials}
          </span>
        ) : (
          <svg
            className="lex-avatar__fallback"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              fill="currentColor"
            />
          </svg>
        )}
        {status && (
          <span
            className={`lex-avatar__status lex-avatar__status--${status}`}
            aria-label={status}
          />
        )}
      </span>
    );
  }
) as React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLSpanElement>> & {
  Group: typeof AvatarGroup;
};

Avatar.displayName = 'Avatar';

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ max, className, children, ...rest }, ref) => {
    const childArray = React.Children.toArray(children);
    const visibleCount = max && max < childArray.length ? max : childArray.length;
    const overflow = childArray.length - visibleCount;

    const classNames = ['lex-avatar-group', className].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classNames} role="group" aria-label="Avatar group" {...rest}>
        {childArray.slice(0, visibleCount)}
        {overflow > 0 && (
          <span className="lex-avatar-group__counter" aria-label={`${overflow} more`}>
            +{overflow}
          </span>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = 'Avatar.Group';
Avatar.Group = AvatarGroup;

export default Avatar;
