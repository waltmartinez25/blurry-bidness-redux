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
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
                JOIN THE STATIC
              </h3>
              <p className="text-muted-foreground text-sm font-mono">
                Subscribe for early access, exclusive drops, and distorted updates.
              </p>
            </div>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="input-brutal flex-1 text-xs uppercase tracking-wider"
              />
              <button type="submit" className="btn-brutal-primary whitespace-nowrap">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Shop */}
          <div>
            <h4 className="text-label mb-4">SHOP</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-label mb-4">INFO</h4>
            <ul className="space-y-2">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-label mb-4">LEGAL</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-label mb-4">CONNECT</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border hover:bg-foreground hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border hover:bg-foreground hover:text-background transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-label text-muted-foreground">
              © 2024 BLURRY BIDNESS. ALL RIGHTS RESERVED.
            </p>
            <p className="text-label text-muted-foreground">
              DESIGNED IN LA. MADE WITH INTENTION.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
