'use client';

import Link from 'next/link';
import Image from "next-image-export-optimizer";
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/work',    label: 'Collections' },
  { href: '/about',   label: 'About The Artist' },
  { href: '/acquire', label: 'Acquire' },
];

export default function Header() {
  const [open, setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome   = pathname === '/';

  /* Track scroll position so we can switch from transparent → opaque */
  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  /* On homepage: overlay the hero (fixed over image).
     On other pages: normal sticky header. */
  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          'z-50 w-full transition-all duration-300',
          isHome
            ? 'fixed top-0 left-0 right-0'   // float over hero
            : 'sticky top-0',                 // normal sticky on inner pages
          transparent
            ? 'bg-transparent border-transparent'
            : 'bg-background border-border'
        )}
      >
        <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 w-full items-center justify-between">

            {/* Signature — shown on inner pages only */}
            {isHome && !scrolled ? (
              <div />
            ) : (
              <Link href="/" className="shrink-0 transition-opacity hover:opacity-70">
                <Image
                  src="/images/sohamghoshsignature.png"
                  alt="Soham Ghosh"
                  width={180}
                  height={60}
                  priority
                  className="h-17 w-auto object-contain mix-blend-multiply"
                />
              </Link>
            )}

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium tracking-wide rounded-sm transition-colors duration-200',
                    transparent
                      ? 'text-white hover:text-white/80'
                      : pathname === href
                        ? 'text-primary'
                        : 'text-secondary hover:text-primary'
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className={cn(
                'md:hidden inline-flex items-center justify-center p-2 rounded-sm transition-colors',
                transparent
                  ? 'text-black hover:text-black/80'
                  : 'text-secondary bg-muted border border-border hover:text-primary hover:bg-muted/80'
              )}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

          </div>
        </div>
      </header>

      <MobileMenu isOpen={open} onClose={() => setOpen(false)} navLinks={NAV_LINKS} />

      {/* On home the header is fixed (out of flow). On inner pages it's sticky (in flow).
          No extra spacer needed — sticky reserves its own height. */}
    </>
  );
}
