'use client';

import { cn } from '@/lib/utils';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SidebarNav } from '@/components/sidenav';
import { sidebarNavConfig } from '@/config.ts/nav';
import { Icons } from '@/components/icons';
import { useState } from 'react';
import { MobileNav } from '@/components/mobile-nav';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <html lang="en">
      <body
        className={cn('bg-[#f9dab2] flex min-h-screen flex-col space-y-6   ', inter.className)}
        style={{ backgroundImage: "url('bg-cover.png')" }}
      >
        <div className="container grid flex-1  md:grid-cols-[140px_1fr] relative">
          <aside
            className="hidden w-[140px] flex-col md:flex  bg-[#F9A847] border-r border-[#f9dab2]"
            style={{ backgroundImage: "url('bg-cover.png')", backgroundSize: '75% 50%' }}
          >
            <SidebarNav items={sidebarNavConfig} />
          </aside>
          <button
            className="absolute flex right-4 top-4 z-20 items-center space-x-2 md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <Icons.close /> : <Icons.logo />}
          </button>
          {showMobileMenu && sidebarNavConfig && <MobileNav items={sidebarNavConfig} />}
          <main className="flex w-full flex-1 flex-col overflow-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}
