export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  images: string[];
  sizes: string[];
  inStock: boolean;
  details?: string[];
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  cta: string;
  image: string;
}

export interface MarqueeMessage {
  id: string;
  text: string;
}
