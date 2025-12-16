import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ProductGrid } from '@/components/product/ProductGrid';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { ManifestoSection } from '@/components/home/ManifestoSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductGrid limit={8} />
      <CategoriesSection />
      <ManifestoSection />
    </Layout>
  );
};

export default Index;
