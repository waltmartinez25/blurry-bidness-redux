import { marqueeMessages } from '@/data/products';

export function Marquee() {
  const content = marqueeMessages.join('   ·   ');
  
  return (
    <div className="bg-foreground text-background overflow-hidden">
      <div className="marquee-track whitespace-nowrap py-3">
        <span className="text-[11px] uppercase tracking-luxury font-medium inline-block">
          {content}   ·   {content}   ·   {content}   ·   {content}   ·&nbsp;
        </span>
      </div>
    </div>
  );
}