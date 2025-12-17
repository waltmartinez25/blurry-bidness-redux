import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Lookbook', href: '/lookbook' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = useCartStore(state => state.itemCount());

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Main Header */}
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 h-20">
        {/* Left - Menu Toggle (Mobile) / Nav (Desktop) */}
        <div className="flex items-center gap-8 flex-1">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 -ml-2 transition-opacity hover:opacity-60"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
          
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-xs uppercase tracking-luxury font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center - Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-lg md:text-xl font-serif tracking-wide">BLURRY</h1>
        </Link>

        {/* Right - Icons */}
        <div className="flex items-center gap-6 flex-1 justify-end">
          <button className="p-2 hidden md:block transition-opacity hover:opacity-60" aria-label="Search">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <Link to="/account" className="p-2 hidden md:block transition-opacity hover:opacity-60" aria-label="Account">
            <User size={20} strokeWidth={1.5} />
          </Link>
          <Link to="/cart" className="p-2 relative transition-opacity hover:opacity-60" aria-label="Cart">
            <ShoppingBag size={20} strokeWidth={1.5} />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-foreground text-background text-[10px] flex items-center justify-center rounded-full font-medium">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-background z-40">
          <nav className="flex flex-col px-6 py-10 gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                className="menu-item py-4 text-3xl font-serif tracking-tight text-foreground hover:text-muted-foreground transition-colors border-b border-border"
                style={{ animationDelay: `${index * 60}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-8 mt-4">
              <Link
                to="/account"
                className="menu-item flex items-center gap-3 text-xs uppercase tracking-luxury text-muted-foreground hover:text-foreground transition-colors"
                style={{ animationDelay: '200ms' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={16} strokeWidth={1.5} />
                Account
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}