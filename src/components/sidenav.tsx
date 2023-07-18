'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & {
  href: string;
  items?: never;
};

interface SidebarNavProps {
  items: SidebarNavItem[];
}

export function SidebarNav({ items }: SidebarNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="sticky top-0 grid items-start gap-2 w-full px-1 pt-4 ">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || 'arrowRight'];
        return (
          item.href && (
            <Link key={index} href={item.disabled ? '/' : item.href}>
              <span
                className={cn(
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-[#F8D8AD] hover:text-accent-foreground',
                  path === item.href ? 'bg-[#F8D8AD]' : 'transparent',
                  item.disabled && 'cursor-not-allowed opacity-80'
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
