import { NavLink as RouterNavLink, type NavLinkProps } from 'react-router-dom';

import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface NavLinksCompatProps extends Omit<NavLinkProps, "className"> {
    className?: string;
    activeClassName?: string;
    pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinksCompatProps>(
    ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
        return (
            <RouterNavLink
                ref={ref}
                to={to}
                className={({ isActive, isPending }) =>
                    cn(className, isActive && activeClassName, isPending && pendingClassName)
                }
                {...props}
            />
        );
    },
);

NavLink.displayName = "NavLink";

export { NavLink };