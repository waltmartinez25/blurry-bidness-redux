import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'blurry-001',
    title: 'DISTORTED VISION HOODIE',
    description: 'Oversized heavyweight hoodie with abstract print. Premium cotton blend with distressed details.',
    price: 189,
    compareAtPrice: 220,
    category: 'OUTERWEAR',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    details: ['100% Premium Cotton', '450 GSM Weight', 'Oversized Fit', 'Made in Portugal'],
  },
  {
    id: 'blurry-002',
    title: 'STATIC NOISE TEE',
    description: 'Heavyweight cotton tee with all-over static print. Box fit silhouette.',
    price: 85,
    category: 'TOPS',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    details: ['100% Cotton', '240 GSM Weight', 'Box Fit', 'Screen Printed'],
  },
  {
    id: 'blurry-003',
    title: 'CORRUPTED DATA PANTS',
    description: 'Wide leg cargo pants with utility pockets. Washed black with tonal hardware.',
    price: 165,
    category: 'BOTTOMS',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
    ],
    sizes: ['28', '30', '32', '34', '36'],
    inStock: true,
    details: ['Cotton Twill', 'Wide Leg', '6 Utility Pockets', 'YKK Zippers'],
  },
  {
    id: 'blurry-004',
    title: 'FRAGMENTED BOMBER',
    description: 'MA-1 style bomber with fragmented graphic. Quilted lining.',
    price: 295,
    compareAtPrice: 340,
    category: 'OUTERWEAR',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
      'https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    details: ['Nylon Shell', 'Quilted Satin Lining', 'Rib Knit Trim', 'Custom Hardware'],
  },
  {
    id: 'blurry-005',
    title: 'PIXEL DECAY LONGSLEEVE',
    description: 'Heavyweight longsleeve with degraded pixel graphic. Ribbed cuffs.',
    price: 95,
    category: 'TOPS',
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
      'https://images.unsplash.com/photo-1618354691229-88d47f285158?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: false,
    details: ['100% Cotton', '280 GSM Weight', 'Relaxed Fit', 'Screen Printed'],
  },
  {
    id: 'blurry-006',
    title: 'INTERFERENCE SHORTS',
    description: 'Mesh basketball shorts with signal interference print. Elastic waist.',
    price: 75,
    category: 'BOTTOMS',
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    details: ['Mesh Polyester', 'Elastic Waistband', 'Side Pockets', 'Above Knee Length'],
  },
  {
    id: 'blurry-007',
    title: 'GLITCH CAP',
    description: 'Unstructured 6-panel cap with embroidered glitch logo.',
    price: 45,
    category: 'ACCESSORIES',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80',
      'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&q=80',
    ],
    sizes: ['ONE SIZE'],
    inStock: true,
    details: ['Cotton Twill', 'Unstructured Crown', 'Adjustable Strap', 'Embroidered Logo'],
  },
  {
    id: 'blurry-008',
    title: 'SIGNAL LOSS JACKET',
    description: 'Oversized work jacket with signal loss embroidery. Heavy canvas construction.',
    price: 245,
    category: 'OUTERWEAR',
    images: [
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80',
      'https://images.unsplash.com/photo-1559582798-678dfc71ccd8?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    details: ['Heavy Canvas', 'Blanket Lined', 'Snap Closure', 'Made in USA'],
  },
];

export const categories = ['ALL', 'OUTERWEAR', 'TOPS', 'BOTTOMS', 'ACCESSORIES'];

export const heroContent = {
  title: 'BLURRY BIDNESS',
  subtitle: 'DISTORTED REALITY. ELEVATED STYLE.',
  cta: 'SHOP COLLECTION',
  image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1200&q=80',
};

export const marqueeMessages = [
  'FREE SHIPPING ON ORDERS OVER $150',
  'NEW COLLECTION NOW LIVE',
  'MADE WITH INTENTION',
  'DISTORT YOUR REALITY',
  'LIMITED QUANTITIES AVAILABLE',
];

export const manifesto = {
  title: 'THE VISION',
  content: `We exist in the space between clarity and chaos. BLURRY BIDNESS is not just clothing—it's a statement against the perfectly curated, the overly polished, the painfully predictable.

Our pieces are designed for those who find beauty in distortion, meaning in static, and style in the unconventional. Each garment is crafted to challenge perceptions and push boundaries.

This is fashion for the digitally native generation. For those who understand that blur is not confusion—it's focus on what matters.`,
};
