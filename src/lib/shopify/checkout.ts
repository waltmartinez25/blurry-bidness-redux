import { storefrontApiRequest, ShopifyProduct } from './storefront';

export interface CartItem {
  product: ShopifyProduct;
  variantId: string;
  variantTitle: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  quantity: number;
  selectedOptions: Array<{
    name: string;
    value: string;
  }>;
}

const CART_CREATE_MUTATION = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  product {
                    title
                    handle
                  }
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

interface CartCreateResponse {
  data: {
    cartCreate: {
      cart: {
        id: string;
        checkoutUrl: string;
        totalQuantity: number;
        cost: {
          totalAmount: {
            amount: string;
            currencyCode: string;
          };
        };
      } | null;
      userErrors: Array<{
        field: string[];
        message: string;
      }>;
    };
  };
}

export async function createStorefrontCheckout(items: CartItem[]): Promise<string> {
  try {
    const lines = items.map(item => ({
      quantity: item.quantity,
      merchandiseId: item.variantId,
    }));

    const cartData = await storefrontApiRequest<CartCreateResponse>(CART_CREATE_MUTATION, {
      input: { lines },
    });

    if (cartData.data.cartCreate.userErrors.length > 0) {
      throw new Error(`Cart creation failed: ${cartData.data.cartCreate.userErrors.map(e => e.message).join(', ')}`);
    }

    const cart = cartData.data.cartCreate.cart;
    
    if (!cart?.checkoutUrl) {
      throw new Error('No checkout URL returned from Shopify');
    }

    // Add channel parameter for proper checkout access
    const url = new URL(cart.checkoutUrl);
    url.searchParams.set('channel', 'online_store');
    return url.toString();
  } catch (error) {
    console.error('Error creating storefront checkout:', error);
    throw error;
  }
}
