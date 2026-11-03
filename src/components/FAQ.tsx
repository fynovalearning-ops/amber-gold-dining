import ScrollReveal from "@/components/ScrollReveal";
import { ReactNode } from "react";

type FAQItem = { q: string; a: ReactNode };

const FAQ = ({ items, className = "", image }: { items: FAQItem[]; className?: string; image?: string }) => {
  return (
    <section className={`bg-secondary ${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-10 lg:py-16">
        <ScrollReveal>
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-8 md:mb-10">FAQs</h2>
        </ScrollReveal>
        <div className={`flex flex-col ${image ? 'lg:flex-row lg:gap-16' : ''}`}>
          <div className={`${image ? 'flex-1' : 'max-w-3xl'}`}>
            {items.map((item, i) => (
              <ScrollReveal key={i} delay={Math.min(i * 0.05, 0.2)}>
                <details className="group border-b border-border py-6 cursor-pointer">
                  <summary className="flex justify-between items-center list-none font-serif text-xl md:text-2xl text-foreground group-open:text-primary transition-colors duration-300">
                    {item.q}
                    <span className="text-primary text-2xl ml-4 shrink-0 transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="text-muted-foreground leading-relaxed mt-4 pr-8">{item.a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
          {image && (
            <ScrollReveal className="hidden lg:block shrink-0 w-80 xl:w-96">
              <div className="sticky top-32 rounded-sm overflow-hidden">
                <img
                  src={image}
                  alt=""
                  className="w-full h-[28rem] xl:h-[32rem] object-cover"
                />
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
