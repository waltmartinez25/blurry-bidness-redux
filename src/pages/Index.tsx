import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ShopifyProductGrid } from '@/components/product/ShopifyProductGrid';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { ManifestoSection } from '@/components/home/ManifestoSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ShopifyProductGrid limit={8} />
      <CategoriesSection />
      <ManifestoSection />
    </Layout>
  );
};

export default Index;
