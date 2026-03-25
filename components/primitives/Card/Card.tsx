import React, { forwardRef } from 'react';
import './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
  clickable?: boolean;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface CardMediaProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={['lex-card__header', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  )
);
CardHeader.displayName = 'Card.Header';

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={['lex-card__footer', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  )
);
CardFooter.displayName = 'Card.Footer';

const CardMedia = forwardRef<HTMLImageElement, CardMediaProps>(
  ({ className, alt = '', ...rest }, ref) => (
    <img ref={ref} className={['lex-card__media', className].filter(Boolean).join(' ')} alt={alt} {...rest} />
  )
);
CardMedia.displayName = 'Card.Media';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', clickable = false, className, style, children, onClick, ...rest }, ref) => {
    const classNames = [
      'lex-card',
      `lex-card--${variant}`,
      clickable && 'lex-card--clickable',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={classNames}
        style={style}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        onClick={onClick}
        onKeyDown={
          clickable
            ? (e: React.KeyboardEvent<HTMLDivElement>) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onClick?.(e as unknown as React.MouseEvent<HTMLDivElement>);
                }
              }
            : undefined
        }
        {...rest}
      >
        {children}
      </div>
    );
  }
) as React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> & {
  Header: typeof CardHeader;
  Footer: typeof CardFooter;
  Media: typeof CardMedia;
};

Card.displayName = 'Card';
Card.Header = CardHeader;
Card.Footer = CardFooter;
Card.Media = CardMedia;

export default Card;
