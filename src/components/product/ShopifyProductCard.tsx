import { Link } from 'react-router-dom';
import { ShopifyProduct } from '@/lib/shopify/storefront';
import { formatShopifyProduct } from '@/hooks/useShopify';
import { ArrowUpRight } from 'lucide-react';

interface ShopifyProductCardProps {
  product: ShopifyProduct;
}

export function ShopifyProductCard({ product }: ShopifyProductCardProps) {
  const formatted = formatShopifyProduct(product);
  const hasDiscount = formatted.compareAtPrice && formatted.compareAtPrice > formatted.price;

  return (
    <Link
      to={`/product/${formatted.handle}`}
      className="product-card group block border border-border bg-card"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden border-b border-border bg-muted">
        {formatted.images.length > 0 ? (
          <img
            src={formatted.images[0]}
            alt={formatted.title}
            className="product-image absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-label text-muted-foreground">NO IMAGE</span>
          </div>
        )}
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-background text-label flex items-center gap-2">
            QUICK VIEW <ArrowUpRight size={14} />
          </span>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {hasDiscount && (
            <span className="bg-foreground text-background text-label px-2 py-1">
              SALE
            </span>
          )}
          {!formatted.inStock && (
            <span className="bg-muted text-muted-foreground text-label px-2 py-1">
              SOLD OUT
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-label text-muted-foreground mb-1">
          {formatted.category || 'PRODUCT'}
        </p>
        <h3 className="font-bold uppercase tracking-wide text-sm mb-2 group-hover:underline line-clamp-2">
          {formatted.title}
        </h3>
        <div className="flex items-center gap-2 font-mono text-sm">
          <span>{formatted.currencyCode} {formatted.price.toFixed(2)}</span>
          {hasDiscount && (
            <span className="text-muted-foreground line-through">
              {formatted.currencyCode} {formatted.compareAtPrice?.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
