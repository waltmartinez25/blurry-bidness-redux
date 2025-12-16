import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchProductByHandle, ShopifyProduct } from '@/lib/shopify/storefront';

export type { ShopifyProduct };

export function useProducts(first: number = 20, category?: string) {
  // Map category to Shopify product type query
  const query = category && category !== 'ALL' 
    ? `product_type:${category}` 
    : undefined;

  return useQuery({
    queryKey: ['products', first, category],
    queryFn: () => fetchProducts(first, query),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useProduct(handle: string) {
  return useQuery({
    queryKey: ['product', handle],
    queryFn: () => fetchProductByHandle(handle),
    enabled: !!handle,
    staleTime: 1000 * 60 * 5,
  });
}

// Helper to format Shopify product for display
export function formatShopifyProduct(product: ShopifyProduct) {
  const node = product.node;
  const firstVariant = node.variants.edges[0]?.node;
  const compareAtPrice = firstVariant?.compareAtPrice?.amount 
    ? parseFloat(firstVariant.compareAtPrice.amount)
    : undefined;
  
  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    description: node.description,
    price: parseFloat(node.priceRange.minVariantPrice.amount),
    currencyCode: node.priceRange.minVariantPrice.currencyCode,
    compareAtPrice,
    category: node.productType || 'UNCATEGORIZED',
    images: node.images.edges.map(e => e.node.url),
    sizes: node.options.find(o => o.name.toLowerCase() === 'size')?.values || [],
    inStock: node.availableForSale,
    variants: node.variants.edges,
    options: node.options,
    tags: node.tags,
  };
}
