'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import useStore from '@/common/hooks/useStore';

const activeLink =
  'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
const normalLink =
  'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

interface NavLinkProps {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
  currentColor: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const PureNavLink: React.FC<NavLinkProps> = ({
  href,
  exact = false,
  children,
  currentColor,
  ...props
}) => {
  const { themeSettings } = useStore();
  const pathname = usePathname();
  const isActive =
    pathname === '/' && href === '/dashboard'
      ? true
      : (exact ? pathname === href : pathname.startsWith(href)) &&
        !themeSettings;

  const newProps = {
    ...props,
    className: isActive ? `${activeLink} active` : normalLink,
    style: { backgroundColor: isActive ? currentColor : '' },
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
      <Link href={href} {...newProps}>
        {children}
      </Link>
    </motion.div>
  );
};

const NavLink = React.memo(PureNavLink);

export default NavLink;
