import { useState, useCallback, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Lookbook collection images
const lookbookImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=1200&q=90',
    alt: 'Look 1 - Black oversized jacket with cargo pants',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=1200&q=90',
    alt: 'Look 2 - Purple monochrome ensemble',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=90',
    alt: 'Look 3 - Distressed denim with graphic tee',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=90',
    alt: 'Look 4 - Layered streetwear look',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=1200&q=90',
    alt: 'Look 5 - Camo print outerwear',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=90',
    alt: 'Look 6 - Technical jacket',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1200&q=90',
    alt: 'Look 7 - Oversized hoodie look',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&q=90',
    alt: 'Look 8 - Graphic print set',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=1200&q=90',
    alt: 'Look 9 - Vintage washed pieces',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90',
    alt: 'Look 10 - Statement outerwear',
  },
];

export default function Lookbook() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 400);
  }, [currentSlide, isAnimating]);

  const goToPrevious = useCallback(() => {
    if (isAnimating) return;
    const newIndex = currentSlide === 0 ? lookbookImages.length - 1 : currentSlide - 1;
    goToSlide(newIndex);
  }, [currentSlide, isAnimating, goToSlide]);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    const newIndex = currentSlide === lookbookImages.length - 1 ? 0 : currentSlide + 1;
    goToSlide(newIndex);
  }, [currentSlide, isAnimating, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-140px)] bg-background">
        {/* Header */}
        <div className="container pt-8 pb-4 md:pt-12 md:pb-6">
          <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-brutal text-foreground">
            Lookbook – AW '25
          </h1>
        </div>

        {/* Main Gallery */}
        <div className="container pb-12 md:pb-16">
          <div className="grid gap-6 lg:grid-cols-[1fr,320px] xl:grid-cols-[1fr,380px]">
            {/* Main Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden border border-border bg-secondary">
                <img
                  src={lookbookImages[currentSlide].src}
                  alt={lookbookImages[currentSlide].alt}
                  className={`h-full w-full object-cover transition-all duration-400 ${
                    isAnimating ? 'opacity-0 scale-[1.02]' : 'opacity-100 scale-100'
                  }`}
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-foreground/70 hover:text-foreground transition-colors bg-background/20 backdrop-blur-sm border border-border/30 hover:bg-background/40"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-foreground/70 hover:text-foreground transition-colors bg-background/20 backdrop-blur-sm border border-border/30 hover:bg-background/40"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Slide Counter */}
              <div className="flex justify-end">
                <span className="font-mono text-sm text-muted-foreground tracking-wide">
                  {currentSlide + 1} of {lookbookImages.length}
                </span>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-2 lg:gap-3">
                {lookbookImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => goToSlide(index)}
                    className={`relative aspect-[3/4] overflow-hidden border transition-all duration-300 ${
                      currentSlide === index
                        ? 'border-foreground ring-1 ring-foreground'
                        : 'border-border hover:border-foreground/50 opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`View ${image.alt}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>

              {/* Collection Info */}
              <div className="pt-6 border-t border-border space-y-4">
                <div>
                  <h2 className="font-sans text-lg font-black uppercase tracking-wide text-foreground mb-2">
                    Autumn / Winter 2025
                  </h2>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                    Raw textures meet bold silhouettes. The AW '25 collection draws from industrial aesthetics 
                    and underground culture—designed for those who move through the city with intention.
                  </p>
                </div>

                {/* Navigation Hint */}
                <div className="hidden lg:block">
                  <p className="font-mono text-xs text-muted-foreground/60 uppercase tracking-brutal">
                    Use ← → arrow keys to navigate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dot Navigation */}
        <div className="lg:hidden pb-8">
          <div className="flex justify-center gap-2">
            {lookbookImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-foreground w-6'
                    : 'bg-border hover:bg-muted-foreground'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
