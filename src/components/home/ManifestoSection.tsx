import { manifesto } from '@/data/products';

export function ManifestoSection() {
  return (
    <section className="border-b border-border">
      <div className="grid lg:grid-cols-2">
        {/* Title */}
        <div className="px-6 md:px-12 lg:px-16 py-12 lg:py-24 border-b lg:border-b-0 lg:border-r border-border flex items-center">
          <h2 className="text-section">{manifesto.title}</h2>
        </div>

        {/* Content */}
        <div className="px-6 md:px-12 lg:px-16 py-12 lg:py-24 flex items-center">
          <div className="max-w-xl">
            {manifesto.content.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="font-mono text-muted-foreground leading-relaxed mb-6 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
