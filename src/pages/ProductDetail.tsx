import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import { Minus, Plus, ArrowLeft, Check } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
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

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    
    addItem(product, selectedSize, quantity);
    toast.success(
      <div className="flex items-center gap-2">
        <Check size={16} />
        <span>Added to cart</span>
      </div>
    );
  };

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
          <div className="aspect-square overflow-hidden border-b border-border">
            <img
              src={product.images[activeImage]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex">
              {product.images.map((image, index) => (
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
            <p className="text-label text-muted-foreground mb-2">{product.category}</p>
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
              {product.title}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-mono">${product.price}</span>
              {product.compareAtPrice && (
                <span className="text-muted-foreground line-through font-mono">
                  ${product.compareAtPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="font-mono text-muted-foreground text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mb-6">
              <p className="text-label mb-3">SIZE</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      min-w-[48px] px-4 py-3 border font-mono text-sm transition-colors
                      ${selectedSize === size
                        ? 'bg-foreground text-background border-foreground'
                        : 'bg-background text-foreground border-border hover:border-foreground'
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

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
              disabled={!product.inStock}
              className={`
                w-full py-4 font-mono uppercase tracking-widest text-sm transition-all
                ${product.inStock
                  ? 'btn-brutal-primary'
                  : 'bg-muted text-muted-foreground cursor-not-allowed'
                }
              `}
            >
              {product.inStock ? 'ADD TO CART' : 'SOLD OUT'}
            </button>

            {/* Product Details */}
            {product.details && (
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-label mb-4">PRODUCT DETAILS</p>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="font-mono text-sm text-muted-foreground">
                      — {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
