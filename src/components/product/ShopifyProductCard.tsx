import { Link } from 'react-router-dom';
import { ShopifyProduct } from '@/lib/shopify/storefront';
import { formatShopifyProduct } from '@/hooks/useShopify';

interface ShopifyProductCardProps {
  product: ShopifyProduct;
}

export function ShopifyProductCard({ product }: ShopifyProductCardProps) {
  const formatted = formatShopifyProduct(product);
  const hasDiscount = formatted.compareAtPrice && formatted.compareAtPrice > formatted.price;

  return (
    <Link
      to={`/product/${formatted.handle}`}
      className="product-card group block"
    >
      {/* Image Container */}
      <div className="relative aspect-product overflow-hidden bg-secondary mb-4">
        {formatted.images.length > 0 ? (
          <img
            src={formatted.images[0]}
            alt={formatted.title}
            className="product-image absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-label">No Image</span>
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {hasDiscount && (
            <span className="bg-foreground text-background text-[10px] uppercase tracking-luxury px-3 py-1.5 font-medium">
              Sale
            </span>
          )}
          {!formatted.inStock && (
            <span className="bg-background/90 text-foreground text-[10px] uppercase tracking-luxury px-3 py-1.5 font-medium">
              Sold Out
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1.5">
        <p className="text-[11px] uppercase tracking-luxury text-muted-foreground">
          {formatted.category || 'Product'}
        </p>
        <h3 className="text-sm font-medium tracking-wide line-clamp-1 group-hover:underline underline-offset-4 transition-all">
          {formatted.title}
        </h3>
        <div className="flex items-center gap-3 text-sm">
          <span className="font-medium">{formatted.currencyCode} {formatted.price.toFixed(2)}</span>
          {hasDiscount && (
            <span className="text-muted-foreground line-through text-xs">
              {formatted.currencyCode} {formatted.compareAtPrice?.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}