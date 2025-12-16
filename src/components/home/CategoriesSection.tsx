import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export function CategoriesSection() {
  const displayCategories = categories.filter(c => c !== 'ALL');

  return (
    <section className="border-b border-border">
      <div className="px-6 md:px-12 py-6 border-b border-border">
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">
          SHOP BY CATEGORY
        </h2>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {displayCategories.map((category, index) => (
          <Link
            key={category}
            to={`/shop?category=${category.toLowerCase()}`}
            className={`
              group px-6 py-12 flex items-center justify-between
              hover:bg-foreground hover:text-background transition-colors duration-300
              ${index !== displayCategories.length - 1 ? 'border-r border-border' : ''}
            `}
          >
            <span className="text-lg md:text-xl font-black uppercase tracking-tight">
              {category}
            </span>
            <ArrowRight 
              size={20} 
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
