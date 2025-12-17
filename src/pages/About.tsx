import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <Layout>
      {/* Hero Section - Full Width Image with Overlay */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-brutal text-background text-center px-4">
            Meet Blurry Bidness
          </h1>
        </div>
      </section>

      {/* Bio Section */}
      <section className="border-b border-border bg-background">
        <div className="container py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-sans text-3xl md:text-4xl font-black uppercase tracking-wide text-foreground">
                The Vision
              </h2>
              <p className="font-mono text-base md:text-lg text-muted-foreground leading-relaxed">
                From underground roots to global recognition, BLURRY BIDNESS represents the raw, 
                unfiltered vision of modern streetwear. Born in the streets, refined through passion, 
                and built for those who refuse to blend in.
              </p>
              <p className="font-mono text-base md:text-lg text-muted-foreground leading-relaxed">
                Every piece tells a story. Every design challenges convention. We don't follow trends—we 
                set them. Our commitment to quality craftsmanship and bold aesthetics has made us one of 
                the most sought-after brands in contemporary fashion.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden border border-border shadow-brutal">
              <img 
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80"
                alt="BLURRY BIDNESS founder"
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="border-b border-border bg-secondary">
        <div className="container py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden border border-border shadow-brutal">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
                alt="Street style"
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="relative aspect-square overflow-hidden border border-border shadow-brutal">
              <img 
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
                alt="Fashion forward"
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          <div className="mt-12 text-center max-w-3xl mx-auto space-y-4">
            <p className="font-mono text-lg md:text-xl text-foreground">
              BLURRY BIDNESS is now seen and worn by tastemakers, artists, and culture creators worldwide.
            </p>
            <p className="font-mono text-base text-muted-foreground">
              "Style isn't just what you wear—it's how you move through the world."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="border-b border-border bg-background">
        <div className="container py-12">
          <div className="flex justify-center">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 font-mono text-sm uppercase tracking-brutal text-background border-2 border-foreground shadow-brutal hover:bg-background hover:text-foreground transition-all duration-300"
            >
              Shop Our Latest Drops
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Boxes Grid */}
      <section className="border-b border-border">
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {/* Best Sellers */}
          <Link 
            to="/shop" 
            className="group relative aspect-[3/4] overflow-hidden border-r border-b border-border"
          >
            <img 
              src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600&q=80"
              alt="Best Sellers"
              className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-foreground/60 group-hover:bg-foreground/40 transition-colors duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <h3 className="font-sans text-xl md:text-2xl font-black uppercase tracking-wide text-background mb-4">
                Best Sellers
              </h3>
              <span className="font-mono text-xs uppercase tracking-brutal text-background border border-background px-4 py-2 group-hover:bg-background group-hover:text-foreground transition-colors duration-300">
                Shop Now
              </span>
            </div>
          </Link>

          {/* New Arrivals */}
          <Link 
            to="/shop" 
            className="group relative aspect-[3/4] overflow-hidden border-r border-b border-border"
          >
            <img 
              src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80"
              alt="New Arrivals"
              className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-foreground/60 group-hover:bg-foreground/40 transition-colors duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <h3 className="font-sans text-xl md:text-2xl font-black uppercase tracking-wide text-background mb-4">
                New Arrivals
              </h3>
              <span className="font-mono text-xs uppercase tracking-brutal text-background border border-background px-4 py-2 group-hover:bg-background group-hover:text-foreground transition-colors duration-300">
                Shop Now
              </span>
            </div>
          </Link>

          {/* Outerwear */}
          <Link 
            to="/shop" 
            className="group relative aspect-[3/4] overflow-hidden border-r border-b border-border"
          >
            <img 
              src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80"
              alt="Outerwear"
              className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-foreground/60 group-hover:bg-foreground/40 transition-colors duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <h3 className="font-sans text-xl md:text-2xl font-black uppercase tracking-wide text-background mb-4">
                Outerwear
              </h3>
              <span className="font-mono text-xs uppercase tracking-brutal text-background border border-background px-4 py-2 group-hover:bg-background group-hover:text-foreground transition-colors duration-300">
                Shop Now
              </span>
            </div>
          </Link>

          {/* Sale */}
          <Link 
            to="/shop" 
            className="group relative aspect-[3/4] overflow-hidden border-b border-border"
          >
            <img 
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80"
              alt="Sale"
              className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-foreground/60 group-hover:bg-foreground/40 transition-colors duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <h3 className="font-sans text-xl md:text-2xl font-black uppercase tracking-wide text-background mb-4">
                Sale
              </h3>
              <span className="font-mono text-xs uppercase tracking-brutal text-background border border-background px-4 py-2 group-hover:bg-background group-hover:text-foreground transition-colors duration-300">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-foreground text-background">
        <div className="container py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center space-y-4">
              <h3 className="font-sans text-xl font-black uppercase tracking-wide">Quality First</h3>
              <p className="font-mono text-sm text-background/70">
                Premium materials and expert craftsmanship in every piece.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="font-sans text-xl font-black uppercase tracking-wide">Bold Design</h3>
              <p className="font-mono text-sm text-background/70">
                Unapologetic aesthetics that challenge the status quo.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="font-sans text-xl font-black uppercase tracking-wide">Street Culture</h3>
              <p className="font-mono text-sm text-background/70">
                Rooted in authenticity, inspired by the underground.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
