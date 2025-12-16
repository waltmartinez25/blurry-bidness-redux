import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { ArrowRight } from 'lucide-react';

interface ProductGridProps {
  limit?: number;
  category?: string;
  showHeader?: boolean;
}

export function ProductGrid({ limit, category, showHeader = true }: ProductGridProps) {
  let filteredProducts = products;
  
  if (category && category !== 'ALL') {
    filteredProducts = products.filter(p => p.category === category);
  }
  
  if (limit) {
    filteredProducts = filteredProducts.slice(0, limit);
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
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className={`
              ${index % 4 !== 3 ? 'lg:border-r' : ''} 
              ${index % 2 !== 1 ? 'border-r lg:border-r' : 'lg:border-r-0'}
              ${index < filteredProducts.length - 4 ? 'lg:border-b' : ''}
              ${index < filteredProducts.length - 2 ? 'border-b lg:border-b-0' : ''}
              border-border
            `}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
