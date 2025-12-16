import { Link } from 'react-router-dom';
import { useProducts } from '@/hooks/useShopify';
import { ShopifyProductCard } from '@/components/product/ShopifyProductCard';
import { ArrowRight, Loader2 } from 'lucide-react';

interface ShopifyProductGridProps {
  limit?: number;
  category?: string;
  showHeader?: boolean;
}

export function ShopifyProductGrid({ limit = 8, category, showHeader = true }: ShopifyProductGridProps) {
  const { data: products, isLoading, error } = useProducts(limit, category);

  if (isLoading) {
    return (
      <section className="border-b border-border">
        {showHeader && (
          <div className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-border">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">
              FEATURED PRODUCTS
            </h2>
          </div>
        )}
        <div className="flex items-center justify-center py-24">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="border-b border-border">
        <div className="px-6 md:px-12 py-24 text-center">
          <p className="font-mono text-muted-foreground">
            FAILED TO LOAD PRODUCTS
          </p>
        </div>
      </section>
    );
  }

  if (!products || products.length === 0) {
    return (
      <section className="border-b border-border">
        {showHeader && (
          <div className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-border">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">
              FEATURED PRODUCTS
            </h2>
          </div>
        )}
        <div className="px-6 md:px-12 py-24 text-center">
          <p className="font-mono text-muted-foreground mb-4">
            NO PRODUCTS FOUND
          </p>
          <p className="font-mono text-sm text-muted-foreground">
            Products will appear here once added to the store.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-border">
      {showHeader && (
        <div className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-border">
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">
            FEATURED PRODUCTS
          </h2>
          <Link
            to="/shop"
            className="text-label flex items-center gap-2 hover:text-muted-foreground transition-colors"
          >
            VIEW ALL <ArrowRight size={14} />
          </Link>
        </div>
      )}
      
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={product.node.id}
            className={`
              ${index % 4 !== 3 ? 'lg:border-r' : ''} 
              ${index % 2 !== 1 ? 'border-r lg:border-r' : 'lg:border-r-0'}
              ${index < products.length - 4 ? 'lg:border-b' : ''}
              ${index < products.length - 2 ? 'border-b lg:border-b-0' : ''}
              border-border
            `}
          >
            <ShopifyProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
