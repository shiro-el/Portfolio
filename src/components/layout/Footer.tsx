import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: SITE_CONFIG.links.github,
      icon: Github,
      label: 'GitHub',
    },
    {
      href: SITE_CONFIG.links.linkedin,
      icon: Linkedin,
      label: 'LinkedIn',
    },
    {
      href: SITE_CONFIG.links.twitter,
      icon: Twitter,
      label: 'Twitter',
    },
    {
      href: SITE_CONFIG.links.email,
      icon: Mail,
      label: 'Email',
    },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
