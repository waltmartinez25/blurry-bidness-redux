import { useState, useCallback, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const lookbookImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=1200&q=90', alt: 'Look 1' },
  { id: 2, src: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=1200&q=90', alt: 'Look 2' },
  { id: 3, src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=90', alt: 'Look 3' },
  { id: 4, src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=90', alt: 'Look 4' },
  { id: 5, src: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=1200&q=90', alt: 'Look 5' },
  { id: 6, src: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=90', alt: 'Look 6' },
  { id: 7, src: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1200&q=90', alt: 'Look 7' },
  { id: 8, src: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&q=90', alt: 'Look 8' },
  { id: 9, src: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=1200&q=90', alt: 'Look 9' },
  { id: 10, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90', alt: 'Look 10' },
];

export default function Lookbook() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
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
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-12 pb-8 md:pt-16 md:pb-10">
          <span className="text-label mb-4 block">Collection</span>
          <h1 className="text-hero">
            Autumn Winter '25
          </h1>
        </div>

        {/* Main Gallery */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
          <div className="grid gap-8 lg:grid-cols-[1fr,340px] xl:grid-cols-[1fr,400px]">
            {/* Main Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={lookbookImages[currentSlide].src}
                  alt={lookbookImages[currentSlide].alt}
                  className={`h-full w-full object-cover transition-all duration-500 ease-luxury ${
                    isAnimating ? 'opacity-0 scale-[1.02]' : 'opacity-100 scale-100'
                  }`}
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-all duration-300"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-all duration-300"
                  aria-label="Next"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Slide Counter */}
              <div className="flex justify-between items-center">
                <span className="text-label">Look {currentSlide + 1}</span>
                <span className="text-sm text-muted-foreground">
                  {currentSlide + 1} / {lookbookImages.length}
                </span>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-5 gap-2">
                {lookbookImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => goToSlide(index)}
                    className={`relative aspect-[3/4] overflow-hidden transition-all duration-300 ${
                      currentSlide === index
                        ? 'ring-1 ring-foreground'
                        : 'opacity-50 hover:opacity-100'
                    }`}
                    aria-label={`View look ${index + 1}`}
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
              <div className="pt-8 border-t border-border space-y-6">
                <div>
                  <h2 className="text-lg font-serif mb-3">
                    Autumn / Winter 2025
                  </h2>
                  <p className="text-body">
                    Raw textures meet bold silhouettes. The AW '25 collection draws from industrial aesthetics 
                    and underground culture—designed for those who move through the city with intention.
                  </p>
                </div>

                {/* Navigation Hint */}
                <p className="text-xs text-muted-foreground hidden lg:block">
                  Use ← → arrow keys to navigate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dot Navigation */}
        <div className="lg:hidden pb-12">
          <div className="flex justify-center gap-2">
            {lookbookImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-foreground w-8'
                    : 'bg-border w-1.5 hover:bg-muted-foreground'
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