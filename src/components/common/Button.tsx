import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'orange' | 'outline';
type ButtonSurface = 'light' | 'dark' | 'orange';

interface BaseProps {
  variant?: ButtonVariant;
  surface?: ButtonSurface;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

interface ActionButtonProps extends BaseProps {
  to?: undefined;
  href?: undefined;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  'aria-label'?: string;
}

interface RouterLinkButtonProps extends BaseProps {
  to: string;
  href?: undefined;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  'aria-label'?: string;
}

interface ExternalLinkButtonProps extends BaseProps {
  to?: undefined;
  href: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  'aria-label'?: string;
}

export type ButtonProps =
  | ActionButtonProps
  | RouterLinkButtonProps
  | ExternalLinkButtonProps;

function getVariantClasses(variant: ButtonVariant, surface: ButtonSurface): string {
  // Sharp brutalist slab on Orange (#FD7D3C): Charcoal #111116 bg + Warm White #F5F4F0 text (17.10:1 AAA) -> Pure White hover (18.82:1 AAA)
  if (variant === 'primary' && surface === 'orange') {
    return 'bg-[#111116] text-[#F5F4F0] border border-[#111116] shadow-[3px_3px_0_0_#111116] hover:bg-[#FFFFFF] hover:text-[#111116] hover:shadow-[4px_4px_0_0_#111116]';
  }

  // Sharp brutalist slab on Light (#F5F4F0 / #E7E7E9): Charcoal #111116 bg -> Signature Orange #FD7D3C Charcoal-ink hover (7.32:1 AAA)
  if (variant === 'primary') {
    return 'bg-[#111116] text-[#F5F4F0] border border-[#111116] shadow-[3px_3px_0_0_#FD7D3C] hover:bg-[#FD7D3C] hover:text-[#111116] hover:shadow-[4px_4px_0_0_#111116]';
  }

  // Sharp Orange slab on Dark (#111116): Signature Orange #FD7D3C bg + Charcoal #111116 ink (7.32:1 AAA) -> Warm White hover
  if (variant === 'orange') {
    return 'bg-[#FD7D3C] text-[#111116] border border-[#FD7D3C] shadow-[3px_3px_0_0_#F5F4F0] hover:bg-[#F5F4F0] hover:text-[#111116] hover:border-[#F5F4F0] hover:shadow-[4px_4px_0_0_#FD7D3C]';
  }

  // Accessible sharp outline slabs meeting WCAG 2.2 SC 1.4.11 (>= 3.0:1 border + >= 4.5:1 text)
  if (surface === 'dark') {
    return 'bg-transparent text-[#F5F4F0] border border-[#8E8E9A] hover:bg-[#F5F4F0] hover:text-[#111116] hover:border-[#F5F4F0]';
  }

  if (surface === 'orange') {
    return 'bg-transparent text-[#111116] border border-[#111116] hover:bg-[#111116] hover:text-[#F5F4F0]';
  }

  return 'bg-transparent text-[#111116] border border-[#55555F] hover:bg-[#111116] hover:text-[#F5F4F0] hover:border-[#111116]';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  surface = 'light',
  className = '',
  children,
  fullWidth = false,
  ...rest
}) => {
  const baseClasses = [
    'inline-flex items-center justify-center gap-2',
    'min-h-[44px] px-6 py-3 rounded-[2px]',
    'type-ui-button transition-[transform,background-color,color,border-color,box-shadow] duration-[160ms] ease-editorial',
    'hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-0 active:translate-y-0',
    'cursor-pointer select-none',
    fullWidth ? 'w-full' : '',
    getVariantClasses(variant, surface),
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if ('to' in rest && typeof rest.to === 'string') {
    const { to, ...linkProps } = rest;
    return (
      <Link to={to} className={baseClasses} {...linkProps}>
        {children}
      </Link>
    );
  }

  if ('href' in rest && typeof rest.href === 'string') {
    const { href, ...anchorProps } = rest;
    return (
      <a href={href} className={baseClasses} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type = 'button', ...buttonProps } = rest as ActionButtonProps;
  return (
    <button type={type} className={baseClasses} {...buttonProps}>
      {children}
    </button>
  );
};
