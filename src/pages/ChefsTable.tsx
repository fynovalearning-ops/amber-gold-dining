import { Download } from "lucide-react";
import carnivoreFeastImg from "@/assets/carnivore-feast.jpg";
import carnivoreFeast2Img from "@/assets/carnivore-feast-2.jpg";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import FAQ from "@/components/FAQ";
import chefsTableHeroImg from "@/assets/chefs-table-hero.jpg";
import chefsTableIntroImg from "@/assets/chefs-table-intro.jpg";
import chefsTableCtaImg from "@/assets/chefs-table-cta.jpg";
import { generateSetMenuPdf } from "@/utils/generateSetMenuPdf";

type MenuItem = { name: string; desc: string; tag?: string };
type MenuCourse = { course: string; subtitle?: string; items: MenuItem[] };

const setMenu1: MenuCourse[] = [
  { course: "On Arrival", items: [{ name: "Welcome Drink", desc: "A glass of house selected wine, tap beer, cocktail or soft drink per person" }] },
  { course: "Pre-Starter", subtitle: "To share", items: [{ name: "Garlic & Parmesan Bread", desc: "Fluffy brioche, glazed with garlic & herb butter, parmesan cheese, rosemary crisp", tag: "VG" }] },
  { course: "Starters", subtitle: "Your choice of", items: [
    { name: "Mushroom & Truffle Arancini", desc: "Black truffle aioli, parmesan cheese, Davidson plum", tag: "VG" },
    { name: "Signature Fried Calamari", desc: "Coated with Asian spiced flour mix, served with Vietnamese dipping sauce and herbs", tag: "GFO" },
  ]},
  { course: "Mains", subtitle: "To share", items: [
    { name: "Times Carnivore Sharing Board", desc: "Eye of rump (200g), choice of half pork or beef ribs, slow roasted pork belly, flame grilled half chicken. Served with choice of two sides (chips / salad / mash) & choice of a sauce" },
  ]},
  { course: "Desserts", subtitle: "Your choice of", items: [
    { name: "Sticky Date Pudding", desc: "Salted caramel ice cream, caramel sauce, hazelnut praline and cinnamon crème anglaise" },
    { name: "Duo of Ice-Cream or Sorbet", desc: "Choice of two: salted caramel ice cream, vanilla bean ice cream, mango sorbet & berries", tag: "GF" },
  ]},
];

const setMenu2: MenuCourse[] = [
  { course: "On Arrival", items: [{ name: "Welcome Drink", desc: "A glass of house selected wine, tap beer, cocktail or soft drink per person" }] },
  { course: "Pre-Starter", items: [{ name: "Garlic & Parmesan Bread", desc: "Fluffy brioche, glazed with garlic & herb butter, parmesan cheese, rosemary crisp", tag: "VG" }] },
  { course: "Starters", subtitle: "Your choice of", items: [
    { name: "Fermented Chilli Prawns", desc: "Marinated Emerald tiger prawns & garlic, grilled dukkah bread", tag: "GFO" },
    { name: "Times Bruschetta", desc: "Avocado, Roma tomato, Spanish onion, basil with balsamic glaze, extra virgin olive oil, Grana Padano cheese on grilled sourdough", tag: "VG, GFO" },
  ]},
  { course: "Mains", subtitle: "Your choice of", items: [
    { name: "O'Connor Striploin 350gm MB:3+", desc: "150 days grain fed. Recommended: Medium-rare/Medium. Basted in Times' Signature glaze, served with the choice of chips or salad and one choice of sauce", tag: "GFO" },
    { name: "Mushroom and Ricotta Tortellini", desc: "Emerald prawn, sage brown butter, raisins, pine nuts", tag: "VGO" },
    { name: "Times Signature Gnocchi", desc: "Butter fried gnocchi with roasted pumpkin, sage cream sauce with a touch of Napoli, garlic and parmesan cheese", tag: "VG" },
    { name: "Crispy Skinned Salmon", desc: "Saffron fregola with prawn meat, scallops, capers, lobster bisque, garlic, chilli, dill, cherry tomatoes, fresh verde", tag: "GFO" },
    { name: "Half Rack of Beef or Pork Ribs", desc: "Slow cooked and finished on flame, grilled using our signature basting with butter. Served with a side simple salad or crunchy chips", tag: "GFO" },
  ]},
  { course: "Desserts", subtitle: "Your choice of", items: [
    { name: "Sticky Date Pudding", desc: "Salted caramel ice cream, caramel sauce, hazelnut praline and cinnamon crème anglaise" },
    { name: "Crème Brûlée", desc: "Vanilla bean crème brûlée served with vanilla biscotti, mocha cream & fresh berries", tag: "GFO" },
  ]},
];

const faqs = [
  { q: "What is the Chef's Table Experience?", a: "The Chef's Table Experience is an exclusive dining experience where guests enjoy a specially curated menu prepared by our chefs, showcasing premium ingredients and signature dishes." },
  { q: "How many guests can book the Chef's Table?", a: "The Chef's Table is designed for small groups to ensure a personalised and immersive dining experience." },
  { q: "Do I need to book in advance for the Chef's Table?", a: "Yes. Due to limited availability, bookings are required in advance." },
  { q: "Do you cater to dietary requirements?", a: "Yes, please leave a note on your booking or let your server know of any allergies or dietary preferences on arrival. We cater for vegetarians, offer gluten-free alternatives and more." },
  { q: "Is your menu seasonal?", a: "Our menu evolves with seasonal produce to ensure we serve the freshest ingredients and the best dining experience possible." },
];

const ChefsTable = () => {
  return (
    <Layout>
      <div className="pt-20 md:pt-24">
        {/* Hero + Intro */}
        <section className="relative min-h-[65vh] md:min-h-[75vh] flex flex-col justify-end md:justify-center overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover object-top">
            <source src="/videos/chefs-table-hero-bg.mp4" type="video/mp4" />
            <img src={chefsTableHeroImg} alt="Chef's Table shared feast" className="w-full h-full object-cover object-top" />
          </video>
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16 w-full animate-fade-in">
            <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-6 md:mb-8">The Chef's Table</h1>
            <div className="gold-divider max-w-20 mb-4 md:mb-6" />
            <h2 className="font-serif text-xl md:text-3xl font-light leading-[1.2] mb-3 md:mb-4">Our take on a '<em>feed me</em>' menu</h2>
            <p className="text-foreground/80 leading-relaxed mb-4 md:mb-6 max-w-lg text-sm md:text-base">The Chef's Table is a seasonal menu made up of Chef Ramesh & the team's top picks.</p>
            <div className="border border-foreground/40 bg-foreground/10 backdrop-blur-sm inline-block px-4 md:px-5 py-2.5 md:py-3 mb-6 md:mb-8">
              <p className="font-serif text-lg md:text-xl text-foreground">Two options, $99pp</p>
            </div>
            <div>
              <a href="#menu-options" className="self-start inline-flex px-6 py-3 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-primary/80">View Menu Options</a>
            </div>
          </div>
        </section>


        {/* Set Menus */}
        <section id="menu-options" className="scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-32">
          <div className="max-w-6xl">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-end justify-end gap-3 mb-10 md:mb-12">
                <a
                  href="/Times-Berwick-Chefs-Table-Menu.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2.5 text-sm uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
                <a href="https://www.opentable.com.au/r/times-berwick-reservations-berwick?restref=266717&lang=en-AU&ot_source=Restaurant%20website" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm uppercase tracking-[0.15em] hover:bg-primary/80 transition-colors duration-300">Book Now</a>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                { menu: setMenu1, title: "Times Sharing Experience", price: "$99pp", subtitle: "Designed for 2 people", id: "sharing-experience" },
                { menu: setMenu2, title: "4 Course Ultimate Dining Experience", price: "$99pp", subtitle: "", id: "ultimate-dining" },
              ].map(({ menu, title, price, subtitle, id }, idx) => (
                <ScrollReveal key={title} delay={idx * 0.15}>
                  <div id={id} className="border border-border bg-secondary/50 p-6 md:p-10 h-full scroll-mt-32">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2 gap-1">
                      <h3 className="font-serif text-2xl md:text-4xl">{title}</h3>
                      <span className="font-serif text-xl md:text-2xl text-primary">{price}</span>
                    </div>
                    {subtitle && <p className="text-muted-foreground text-sm mb-8">{subtitle}</p>}
                    {!subtitle && <div className="mb-8" />}

                    {menu.map((course, courseIdx) => (
                      <div key={course.course}>
                        {/* Insert image between Mains and Desserts on the first menu */}
                        {idx === 0 && course.course === "Desserts" && (
                          <img src={carnivoreFeast2Img} alt="Times Carnivore Feast" loading="lazy" className="w-full h-48 object-cover object-center scale-110 mb-12 mt-6" />
                        )}
                        <div className="mb-12 last:mb-0 pb-8 last:pb-0 border-b border-border/30 last:border-0">
                          <p className="text-primary uppercase tracking-[0.2em] text-xs mb-1">{course.course}</p>
                          {course.subtitle && (
                            <p className="text-muted-foreground text-xs italic mb-3">{course.subtitle}</p>
                          )}
                          <ul className="space-y-3">
                            {course.items.map((item) => (
                              <li key={item.name}>
                                <span className="text-foreground font-medium text-sm">
                                  {item.name}
                                  {item.tag && <span className="text-muted-foreground font-normal"> ({item.tag})</span>}
                                </span>
                                <span className="block text-xs text-muted-foreground mt-0.5">{item.desc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">What Our Guests Say</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light">Chef's Table Reviews</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={0.05}>
              <div className="border border-border p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic flex-1 mb-6">"I came here with my partner for our anniversary, we got the chef's table set menu and it was spectacular. Our waitress was great, super friendly and attentive. And the food, oh my god the food was incredible. Every time I didn't think it could get any better, it did. We particularly loved the calamari and arancini we had for our entres, and the steak and pork belly were so succulent and flavourful. Our favourites of the night had to be dessert though. The stewed berries that came with the icecream could've been their own dish, they were incredibly delicious and every bite brought a smile to our faces, and the sticky date pudding was light and perfectly balanced with sweetness."</p>
                <p className="text-foreground font-medium text-sm">- Franklin H.</p>
                <p className="text-muted-foreground text-xs mt-1">Google Review</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="border border-border p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic flex-1 mb-6">"We had the chef's menu for dinner and absolutely loved every bit of it! The food was perfectly balanced in flavour, beautifully presented, and served at just the right pace. Our first visit, and we were impressed by the lovely atmosphere - even though the restaurant was full and lively, it never felt noisy or overwhelming. Service was top-notch; they cleared and refreshed the table quickly after each course."</p>
                <p className="text-foreground font-medium text-sm">- Mayo R.</p>
                <p className="text-muted-foreground text-xs mt-1">Google Review</p>
              </div>
            </ScrollReveal>
          </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ items={faqs} />

        {/* Reservation CTA */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <img src={chefsTableCtaImg} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="hero-overlay absolute inset-0" />
          <ScrollReveal className="relative z-10 max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-4xl md:text-7xl font-light leading-[1] mb-6 md:mb-8">Book ahead</h2>
            <p className="text-muted-foreground mb-8 md:mb-10 max-w-lg text-sm md:text-lg">You can upgrade to the Chef's Table menu once you arrive at our venue, but to let us know in advance please write Chef's Table in the notes while booking.</p>
            <a href="https://www.opentable.com.au/r/times-berwick-reservations-berwick?restref=266717&lang=en-AU&ot_source=Restaurant%20website" target="_blank" rel="noopener noreferrer" className="self-start inline-flex px-6 py-3 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-gold-light">Book Now</a>
          </ScrollReveal>
        </section>
      </div>
    </Layout>
  );
};

export default ChefsTable;
