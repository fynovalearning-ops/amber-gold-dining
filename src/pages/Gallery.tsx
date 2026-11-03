import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import food01 from "@/assets/gallery/food-01.jpg";
import food02 from "@/assets/gallery/food-02.jpg";
import food03 from "@/assets/gallery/food-03.jpg";
import food04 from "@/assets/gallery/food-04.jpg";
import food05 from "@/assets/gallery/food-05.jpg";
import food06 from "@/assets/gallery/food-06.jpg";
import food07 from "@/assets/gallery/food-07.jpg";
import food08 from "@/assets/gallery/food-08.jpg";
import food09 from "@/assets/gallery/food-09.jpg";
import food10 from "@/assets/gallery/food-10.jpg";
import food11 from "@/assets/gallery/food-11.jpg";

const images = [
  { src: food01, width: 1279, height: 1920, alt: "Slow-cooked ribs with chips and red wine at Times Berwick" },
  { src: food02, width: 1279, height: 1920, alt: "Beer-battered fish and chips with mushy peas and a glass of white wine" },
  { src: food03, width: 1279, height: 1920, alt: "Hand-made ravioli in a saffron sauce with cherry tomatoes and basil" },
  
  { src: food04, width: 1279, height: 1920, alt: "Beef tartare with crispy potato chips and red wine" },
  { src: food05, width: 1279, height: 1920, alt: "Tiramisu dessert with silky cream being poured over the top" },
  { src: food11, width: 1279, height: 1920, alt: "Selection of premium steak cuts presented on wooden boards" },
  { src: food06, width: 1215, height: 1824, alt: "Flame-grilled skewers cooking over an open fire" },
  { src: food08, width: 1279, height: 1920, alt: "A tomahawk steak presented on a wooden board by the head chef" },
  { src: food07, width: 1279, height: 1920, alt: "Prawns tossed in a pan over the flame" },
];

const Gallery = () => (
  <Layout>
    <section className="bg-secondary/20 pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-xs md:text-sm mb-4">Gallery</p>
            <p className="text-muted-foreground max-w-2xl text-base md:text-lg">A closer look at the dishes that come out of our kitchen and what you can expect when you dine with us!</p>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-[1200px] columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {images.map((img, i) => (
            <ScrollReveal key={img.src} delay={(i % 3) * 0.05}>
              <div className="mb-4 break-inside-avoid overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading={i < 3 ? "eager" : "lazy"}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 md:mt-20 border-t border-border pt-12 text-center">
            <a
              href="https://www.opentable.com.au/r/times-berwick-reservations-berwick?restref=266717&lang=en-AU&ot_source=Restaurant%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-3.5 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-gold-light"
            >
              Book a Table
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Gallery;
