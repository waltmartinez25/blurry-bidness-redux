import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';

const navLinks = [
  { label: 'SHOP', href: '/shop' },
  { label: 'ABOUT', href: '/about' },
  { label: 'LOOKBOOK', href: '/lookbook' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = useCartStore(state => state.itemCount());

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Main Header */}
      <div className="flex items-center justify-between px-4 md:px-8 h-16">
        {/* Left - Menu Toggle (Mobile) / Nav (Desktop) */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 -ml-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-label hover:text-muted-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center - Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-xl md:text-2xl font-black tracking-tight">BLURRY</h1>
        </Link>

        {/* Right - Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 hidden md:block" aria-label="Search">
            <Search size={20} />
          </button>
          <Link to="/account" className="p-2 hidden md:block" aria-label="Account">
            <User size={20} />
          </Link>
          <Link to="/cart" className="p-2 relative" aria-label="Cart">
            <ShoppingBag size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-foreground text-background text-xs flex items-center justify-center font-mono">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background z-40 border-t border-border">
          <nav className="flex flex-col p-8 gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                className="menu-item text-4xl font-black uppercase tracking-tight hover:text-muted-foreground transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border pt-6 mt-6">
              <Link
                to="/account"
                className="menu-item flex items-center gap-3 text-label"
                style={{ animationDelay: '150ms' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={16} />
                ACCOUNT
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
