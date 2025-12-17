import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[75vh] min-h-[600px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-hero text-background text-center px-6 max-w-4xl">
            The Story Behind Blurry
          </h1>
        </div>
      </section>

      {/* Bio Section */}
      <section className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="space-y-8">
              <span className="text-label">Our Story</span>
              <h2 className="text-section">
                The Vision
              </h2>
              <p className="text-body">
                From underground roots to global recognition, BLURRY BIDNESS represents the raw, 
                unfiltered vision of modern streetwear. Born in the streets, refined through passion, 
                and built for those who refuse to blend in.
              </p>
              <p className="text-body">
                Every piece tells a story. Every design challenges convention. We don't follow trends—we 
                set them. Our commitment to quality craftsmanship and bold aesthetics has made us one of 
                the most sought-after brands in contemporary fashion.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80"
                alt="BLURRY BIDNESS founder"
                className="h-full w-full object-cover transition-transform duration-700 ease-luxury hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="border-b border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
                alt="Street style"
                className="h-full w-full object-cover transition-transform duration-700 ease-luxury hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
                alt="Fashion forward"
                className="h-full w-full object-cover transition-transform duration-700 ease-luxury hover:scale-105"
              />
            </div>
          </div>
          <div className="mt-16 text-center max-w-2xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed">
              "Blurry Bidness is now seen and worn by tastemakers, artists, and culture creators worldwide."
            </p>
            <p className="text-body">
              Style isn't just what you wear—it's how you move through the world.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">
          <div className="flex justify-center">
            <Link
              to="/shop"
              className="btn-luxury-primary group inline-flex items-center gap-3"
            >
              Shop Our Latest
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Boxes Grid */}
      <section className="border-b border-border">
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Best Sellers', image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600&q=80' },
            { title: 'New Arrivals', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80' },
            { title: 'Outerwear', image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80' },
            { title: 'Sale', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80' },
          ].map((item, index) => (
            <Link 
              key={item.title}
              to="/shop" 
              className={`group relative aspect-[3/4] overflow-hidden ${index < 3 ? 'border-r border-border' : ''}`}
            >
              <img 
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-all duration-700 ease-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/50 group-hover:bg-foreground/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <h3 className="text-xl md:text-2xl font-serif text-background mb-6">
                  {item.title}
                </h3>
                <span className="text-[11px] uppercase tracking-luxury text-background border border-background/60 px-5 py-2.5 group-hover:bg-background group-hover:text-foreground transition-all duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <div className="grid gap-16 md:grid-cols-3">
            {[
              { title: 'Quality First', desc: 'Premium materials and expert craftsmanship in every piece.' },
              { title: 'Bold Design', desc: 'Unapologetic aesthetics that challenge the status quo.' },
              { title: 'Street Culture', desc: 'Rooted in authenticity, inspired by the underground.' },
            ].map((item) => (
              <div key={item.title} className="text-center space-y-4">
                <h3 className="text-lg font-serif">{item.title}</h3>
                <p className="text-sm text-background/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}