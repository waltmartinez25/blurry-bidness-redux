import { Link } from 'react-router-dom';
import { Instagram, Twitter } from 'lucide-react';

const footerLinks = {
  shop: [
    { label: 'New Arrivals', href: '/shop?filter=new' },
    { label: 'Outerwear', href: '/shop?category=outerwear' },
    { label: 'Tops', href: '/shop?category=tops' },
    { label: 'Bottoms', href: '/shop?category=bottoms' },
  ],
  info: [
    { label: 'About Us', href: '/about' },
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'Shipping', href: '/shipping' },
    { label: 'Returns', href: '/returns' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-section mb-3">
                Stay Connected
              </h3>
              <p className="text-body max-w-md">
                Subscribe for early access to new collections, exclusive offers, and brand updates.
              </p>
            </div>
            <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="input-elegant flex-1"
              />
              <button type="submit" className="btn-luxury-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Shop */}
          <div>
            <h4 className="text-label mb-6">Shop</h4>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-label mb-6">Information</h4>
            <ul className="space-y-4">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-label mb-6">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-label mb-6">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2024 Blurry Bidness. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Designed in Los Angeles
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}