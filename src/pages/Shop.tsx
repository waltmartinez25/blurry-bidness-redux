import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ShopifyProductCard } from '@/components/product/ShopifyProductCard';
import { useProducts } from '@/hooks/useShopify';
import { Loader2 } from 'lucide-react';

const categories = ['ALL', 'OUTERWEAR', 'TOPS', 'BOTTOMS', 'ACCESSORIES'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category')?.toUpperCase() || 'ALL';
  const [activeCategory, setActiveCategory] = useState(categoryParam);

  const { data: products, isLoading, error } = useProducts(50, activeCategory !== 'ALL' ? activeCategory : undefined);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === 'ALL') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <span className="text-label mb-4 block">Collection</span>
          <h1 className="text-hero mb-4">Shop All</h1>
          <p className="text-body">
            {isLoading ? 'Loading...' : `${products?.length || 0} products`}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-4 flex gap-3 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`
                text-[11px] uppercase tracking-luxury font-medium whitespace-nowrap px-5 py-2.5 border transition-all duration-300
                ${activeCategory === category
                  ? 'bg-foreground text-background border-foreground'
                  : 'bg-background text-foreground border-border hover:border-foreground'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section>
        {isLoading ? (
          <div className="flex items-center justify-center py-32">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : error ? (
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-32 text-center">
            <p className="text-body">
              Failed to load products
            </p>
          </div>
        ) : !products || products.length === 0 ? (
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-32 text-center">
            <p className="text-lg font-serif mb-3">
              No products found
            </p>
            <p className="text-body">
              Products will appear here once added to the store.
            </p>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-14">
              {products.map((product) => (
                <ShopifyProductCard key={product.node.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}