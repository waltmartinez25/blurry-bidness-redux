import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export function CategoriesSection() {
  const displayCategories = categories.filter(c => c !== 'ALL');

  return (
    <section className="border-b border-border">
      <div className="px-6 md:px-10 lg:px-16 py-8 border-b border-border">
        <h2 className="text-section">
          Shop by Category
        </h2>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {displayCategories.map((category, index) => (
          <Link
            key={category}
            to={`/shop?category=${category.toLowerCase()}`}
            className={`
              group px-6 md:px-8 py-14 md:py-16 flex items-center justify-between
              hover:bg-secondary transition-all duration-300
              ${index < displayCategories.length - 1 ? 'border-r border-border' : ''}
              border-b lg:border-b-0
            `}
          >
            <span className="text-base md:text-lg font-serif tracking-tight">
              {category.charAt(0) + category.slice(1).toLowerCase()}
            </span>
            <ArrowRight 
              size={18} 
              strokeWidth={1.5}
              className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}