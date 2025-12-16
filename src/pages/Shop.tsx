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
        <div className="px-6 md:px-12 py-12 md:py-16">
          <h1 className="text-section mb-4">SHOP ALL</h1>
          <p className="font-mono text-muted-foreground">
            {isLoading ? 'LOADING...' : `${products?.length || 0} PRODUCTS`}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border">
        <div className="px-6 md:px-12 py-4 flex gap-4 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`
                text-label whitespace-nowrap px-4 py-2 border transition-colors
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
          <div className="flex items-center justify-center py-24">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : error ? (
          <div className="px-6 md:px-12 py-24 text-center">
            <p className="font-mono text-muted-foreground">
              FAILED TO LOAD PRODUCTS
            </p>
          </div>
        ) : !products || products.length === 0 ? (
          <div className="px-6 md:px-12 py-24 text-center">
            <p className="font-mono text-muted-foreground mb-4">
              NO PRODUCTS FOUND
            </p>
            <p className="font-mono text-sm text-muted-foreground">
              Products will appear here once added to the store.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <div
                key={product.node.id}
                className={`
                  border-b border-border
                  ${index % 4 !== 3 ? 'lg:border-r' : ''} 
                  ${index % 2 !== 1 ? 'border-r lg:border-r' : 'lg:border-r-0'}
                `}
              >
                <ShopifyProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}
