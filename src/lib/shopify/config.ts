// Shopify Storefront API Configuration
export const SHOPIFY_CONFIG = {
  apiVersion: '2025-07',
  storeDomain: 'lovable-project-w32mg.myshopify.com',
  storefrontToken: '0c09f43483d8bfa613f3302f5527b124',
};

export const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_CONFIG.storeDomain}/api/${SHOPIFY_CONFIG.apiVersion}/graphql.json`;
