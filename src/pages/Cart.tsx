import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, X, ArrowLeft, ArrowRight } from 'lucide-react';

export default function Cart() {
  const { items, removeItem, updateQuantity, total, itemCount } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="px-6 md:px-12 py-24 text-center">
          <h1 className="text-section mb-4">YOUR CART IS EMPTY</h1>
          <p className="font-mono text-muted-foreground mb-8">
            ADD SOME ITEMS TO GET STARTED
          </p>
          <Link to="/shop" className="btn-brutal inline-flex items-center gap-2">
            <ArrowLeft size={18} />
            CONTINUE SHOPPING
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Page Header */}
      <section className="border-b border-border">
        <div className="px-6 md:px-12 py-12">
          <h1 className="text-section mb-2">YOUR CART</h1>
          <p className="font-mono text-muted-foreground">
            {itemCount} {itemCount === 1 ? 'ITEM' : 'ITEMS'}
          </p>
        </div>
      </section>

      <div className="grid lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border">
          {items.map((item) => (
            <div
              key={`${item.product.id}-${item.size}`}
              className="flex gap-4 md:gap-6 p-4 md:p-6 border-b border-border last:border-b-0"
            >
              {/* Product Image */}
              <Link
                to={`/product/${item.product.id}`}
                className="w-24 md:w-32 aspect-square flex-shrink-0 overflow-hidden border border-border"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </Link>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <p className="text-label text-muted-foreground mb-1">
                    {item.product.category}
                  </p>
                  <Link
                    to={`/product/${item.product.id}`}
                    className="font-bold uppercase tracking-wide text-sm hover:underline"
                  >
                    {item.product.title}
                  </Link>
                  <p className="font-mono text-sm text-muted-foreground mt-1">
                    SIZE: {item.size}
                  </p>
                </div>

                {/* Quantity & Price */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border border-border">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                      className="p-2 hover:bg-muted transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-4 font-mono text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                      className="p-2 hover:bg-muted transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  
                  <span className="font-mono">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.product.id, item.size)}
                className="p-2 h-fit hover:bg-muted transition-colors"
                aria-label="Remove item"
              >
                <X size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="p-6 md:p-8 lg:sticky lg:top-20 lg:h-fit">
          <h2 className="text-xl font-black uppercase tracking-tight mb-6">
            ORDER SUMMARY
          </h2>

          <div className="space-y-3 mb-6 font-mono text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">SUBTOTAL</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">SHIPPING</span>
              <span>{total >= 150 ? 'FREE' : '$15.00'}</span>
            </div>
          </div>

          <div className="border-t border-border pt-4 mb-8">
            <div className="flex justify-between font-bold">
              <span>TOTAL</span>
              <span className="font-mono">
                ${(total + (total >= 150 ? 0 : 15)).toFixed(2)}
              </span>
            </div>
          </div>

          <button className="btn-brutal-primary w-full flex items-center justify-center gap-2">
            CHECKOUT <ArrowRight size={18} />
          </button>

          <Link
            to="/shop"
            className="block text-center mt-4 text-label text-muted-foreground hover:text-foreground transition-colors"
          >
            CONTINUE SHOPPING
          </Link>

          {total < 150 && (
            <p className="mt-6 text-label text-muted-foreground text-center">
              SPEND ${(150 - total).toFixed(2)} MORE FOR FREE SHIPPING
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}
