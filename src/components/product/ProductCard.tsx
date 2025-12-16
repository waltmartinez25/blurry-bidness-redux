import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card group block border border-border bg-card"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden border-b border-border">
        <img
          src={product.images[0]}
          alt={product.title}
          className="product-image absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-background text-label flex items-center gap-2">
            QUICK VIEW <ArrowUpRight size={14} />
          </span>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.compareAtPrice && (
            <span className="bg-foreground text-background text-label px-2 py-1">
              SALE
            </span>
          )}
          {!product.inStock && (
            <span className="bg-muted text-muted-foreground text-label px-2 py-1">
              SOLD OUT
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-label text-muted-foreground mb-1">{product.category}</p>
        <h3 className="font-bold uppercase tracking-wide text-sm mb-2 group-hover:underline">
          {product.title}
        </h3>
        <div className="flex items-center gap-2 font-mono text-sm">
          <span>${product.price}</span>
          {product.compareAtPrice && (
            <span className="text-muted-foreground line-through">
              ${product.compareAtPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
