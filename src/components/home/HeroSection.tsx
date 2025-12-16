import { Link } from 'react-router-dom';
import { heroContent } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="border-b border-border">
      <div className="grid lg:grid-cols-2 min-h-[70vh] lg:min-h-[80vh]">
        {/* Text Content */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 lg:py-24 order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-border">
          <div className="max-w-lg">
            <h1 className="text-hero mb-6 animate-fade-in">
              {heroContent.title}
            </h1>
            <p className="text-lg md:text-xl font-mono text-muted-foreground mb-8 uppercase tracking-wide animate-fade-in" style={{ animationDelay: '100ms' }}>
              {heroContent.subtitle}
            </p>
            <Link
              to="/shop"
              className="btn-brutal-primary inline-flex items-center gap-3 animate-fade-in"
              style={{ animationDelay: '200ms' }}
            >
              {heroContent.cta}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden order-1 lg:order-2 min-h-[50vh] lg:min-h-full">
          <img
            src={heroContent.image}
            alt="Hero image"
            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
