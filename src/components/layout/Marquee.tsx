import { marqueeMessages } from '@/data/products';

export function Marquee() {
  const content = marqueeMessages.join(' • ');
  
  return (
    <div className="bg-foreground text-background overflow-hidden border-b border-border">
      <div className="marquee-track whitespace-nowrap py-2">
        <span className="text-label inline-block">
          {content} • {content} • {content} • {content} •&nbsp;
        </span>
      </div>
    </div>
  );
}
