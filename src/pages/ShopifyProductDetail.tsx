import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { useProduct, formatShopifyProduct } from '@/hooks/useShopify';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import { Minus, Plus, ArrowLeft, Check, Loader2 } from 'lucide-react';
import { CartItem } from '@/lib/shopify/checkout';

export default function ShopifyProductDetail() {
  const { handle } = useParams<{ handle: string }>();
  const { data: product, isLoading, error } = useProduct(handle || '');
  const addItem = useCartStore(state => state.addItem);
  
  const [selectedVariantId, setSelectedVariantId] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </Layout>
    );
  }

  if (error || !product) {
    return (
      <Layout>
        <div className="px-6 md:px-12 py-24 text-center">
          <h1 className="text-section mb-4">PRODUCT NOT FOUND</h1>
          <Link to="/shop" className="btn-brutal inline-flex items-center gap-2">
            <ArrowLeft size={18} />
            BACK TO SHOP
          </Link>
        </div>
      </Layout>
    );
  }

  const images = product.images.edges.map(e => e.node.url);
  const variants = product.variants.edges;
  const options = product.options;
  const selectedVariant = variants.find(v => v.node.id === selectedVariantId)?.node || variants[0]?.node;
  
  const price = selectedVariant ? parseFloat(selectedVariant.price.amount) : 0;
  const compareAtPrice = selectedVariant?.compareAtPrice ? parseFloat(selectedVariant.compareAtPrice.amount) : undefined;
  const currencyCode = selectedVariant?.price.currencyCode || 'USD';

  const handleAddToCart = () => {
    if (!selectedVariant) {
      toast.error('Please select options');
      return;
    }
    
    if (!selectedVariant.availableForSale) {
      toast.error('This variant is sold out');
      return;
    }

    const cartItem: CartItem = {
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity,
      selectedOptions: selectedVariant.selectedOptions,
    };
    
    addItem(cartItem);
    toast.success(
      <div className="flex items-center gap-2">
        <Check size={16} />
        <span>Added to cart</span>
      </div>,
      { position: 'top-center' }
    );
  };

  // Get unique option values for size-like options
  const sizeOption = options.find(o => 
    ['size', 'tamaño'].includes(o.name.toLowerCase())
  );

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="px-6 md:px-12 py-4 border-b border-border">
        <nav className="flex items-center gap-2 text-label text-muted-foreground">
          <Link to="/" className="hover:text-foreground">HOME</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-foreground">SHOP</Link>
          <span>/</span>
          <span className="text-foreground">{product.title}</span>
        </nav>
      </div>

      <div className="grid lg:grid-cols-2">
        {/* Image Gallery */}
        <div className="border-b lg:border-b-0 lg:border-r border-border">
          {/* Main Image */}
          <div className="aspect-square overflow-hidden border-b border-border bg-muted">
            {images.length > 0 ? (
              <img
                src={images[activeImage]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-label text-muted-foreground">NO IMAGE</span>
              </div>
            )}
          </div>
          
          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`
                    flex-1 aspect-square overflow-hidden border-r border-border last:border-r-0
                    ${activeImage === index ? 'opacity-100' : 'opacity-50 hover:opacity-75'}
                    transition-opacity
                  `}
                >
                  <img
                    src={image}
                    alt={`${product.title} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="px-6 md:px-12 py-8 lg:py-12">
          <div className="max-w-md">
            {/* Category & Title */}
            <p className="text-label text-muted-foreground mb-2">
              {product.productType || 'PRODUCT'}
            </p>
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
              {product.title}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-mono">{currencyCode} {price.toFixed(2)}</span>
              {compareAtPrice && compareAtPrice > price && (
                <span className="text-muted-foreground line-through font-mono">
                  {currencyCode} {compareAtPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <p className="font-mono text-muted-foreground text-sm leading-relaxed mb-8">
                {product.description}
              </p>
            )}

            {/* Variant Selection */}
            {sizeOption && sizeOption.values.length > 0 && (
              <div className="mb-6">
                <p className="text-label mb-3">{sizeOption.name.toUpperCase()}</p>
                <div className="flex flex-wrap gap-2">
                  {variants.map((variant) => {
                    const sizeValue = variant.node.selectedOptions.find(
                      o => o.name.toLowerCase() === sizeOption.name.toLowerCase()
                    )?.value;
                    
                    return (
                      <button
                        key={variant.node.id}
                        onClick={() => setSelectedVariantId(variant.node.id)}
                        disabled={!variant.node.availableForSale}
                        className={`
                          min-w-[48px] px-4 py-3 border font-mono text-sm transition-colors
                          ${selectedVariantId === variant.node.id || (!selectedVariantId && variants[0]?.node.id === variant.node.id)
                            ? 'bg-foreground text-background border-foreground'
                            : 'bg-background text-foreground border-border hover:border-foreground'
                          }
                          ${!variant.node.availableForSale ? 'opacity-50 cursor-not-allowed line-through' : ''}
                        `}
                      >
                        {sizeValue || variant.node.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-label mb-3">QUANTITY</p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-muted transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 font-mono">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-muted transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={!product.availableForSale}
              className={`
                w-full py-4 font-mono uppercase tracking-widest text-sm transition-all
                ${product.availableForSale
                  ? 'btn-brutal-primary'
                  : 'bg-muted text-muted-foreground cursor-not-allowed'
                }
              `}
            >
              {product.availableForSale ? 'ADD TO CART' : 'SOLD OUT'}
            </button>

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-label mb-4">TAGS</p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="text-label text-muted-foreground px-2 py-1 border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
