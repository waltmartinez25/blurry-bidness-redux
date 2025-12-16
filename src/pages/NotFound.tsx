import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-hero mb-6">404</h1>
          <p className="font-mono text-muted-foreground text-xl mb-8 uppercase tracking-wide">
            PAGE NOT FOUND
          </p>
          <Link to="/" className="btn-brutal inline-flex items-center gap-2">
            <ArrowLeft size={18} />
            BACK TO HOME
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
