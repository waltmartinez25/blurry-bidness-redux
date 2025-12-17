import { Link } from 'react-router-dom';
import { heroContent } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="border-b border-border">
      <div className="grid lg:grid-cols-2 min-h-[75vh] lg:min-h-[85vh]">
        {/* Text Content */}
        <div className="flex flex-col justify-center px-6 md:px-10 lg:px-16 py-16 lg:py-24 order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-border">
          <div className="max-w-xl">
            <span className="text-label mb-6 block animate-fade-in">New Collection</span>
            <h1 className="text-hero mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
              {heroContent.title}
            </h1>
            <p className="text-body max-w-md mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
              {heroContent.subtitle}
            </p>
            <Link
              to="/shop"
              className="btn-luxury-primary inline-flex items-center gap-3 animate-fade-in group"
              style={{ animationDelay: '300ms' }}
            >
              {heroContent.cta}
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden order-1 lg:order-2 min-h-[55vh] lg:min-h-full">
          <img
            src={heroContent.image}
            alt="Hero collection"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}