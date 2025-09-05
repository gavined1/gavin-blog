import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/seo";

const socialLinks = [
  {
    name: "GitHub",
    href: siteConfig.social.github,
    icon: Github,
  },
  {
    name: "Twitter",
    href: siteConfig.social.twitter,
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: Linkedin,
  },
  {
    name: "Email",
    href: `mailto:${siteConfig.author.social.website}`,
    icon: Mail,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              {siteConfig.title}
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              {siteConfig.description}
            </p>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((item) => {
                if (!item.href) return null;
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/posts"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  All Posts
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {siteConfig.author.name}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
              Built with Next.js 15, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
