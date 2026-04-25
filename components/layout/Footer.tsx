'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/projects';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-muted/40">
      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 w-full items-center justify-between">
          <p className="text-sm text-secondary font-light">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <div className="flex items-center gap-6">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:text-primary transition-colors"
              >
                Instagram
              </a>
            )}
            <Link
              href="/acquire"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
