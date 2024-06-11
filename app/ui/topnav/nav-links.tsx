'use client';

import {
  ClipboardDocumentCheckIcon,
  Squares2X2Icon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';



const links = [
  { name: 'Dashboard', href: '/dashboard', icon: Squares2X2Icon },
  {
    name: 'Orders',
    href: '/dashboard/orders',
    icon: ClipboardDocumentCheckIcon,
  },
  { name: 'History', href: '/dashboard/history', icon: ClockIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
