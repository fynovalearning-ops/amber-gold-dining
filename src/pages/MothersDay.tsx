import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import mothersDayHero from "@/assets/mothers-day-hero.jpg";

const GIFT_CARD_URL =
  "https://giftcards.oolio.io/timesberwick";
const BOOKING_URL =
  "https://www.opentable.com/booking/experiences-availability?rid=266717&restref=266717&experienceId=693561&utm_source=external&utm_medium=referral&utm_campaign=shared";

type MenuItem = { name: string; price?: string; desc: string; tag?: string };
type MenuSection = { title: string; subtitle?: string; items: MenuItem[] };

const menuSections: MenuSection[] = [
  {
    title: "Entrée",
    items: [
      { name: "Sydney Rock Oysters", price: "Half 39 / Dozen 73", desc: "Red wine and shallots dressing" },
      { name: "Garlic & Parmesan Bread", price: "16", desc: "Fluffy brioche, glazed with garlic & herb butter, parmesan cheese, rosemary crisp", tag: "VG" },
      { name: "Time's Bruschetta", price: "18", desc: "Avocado, Roma tomato, Spanish onion, basil with balsamic glaze, extra virgin olive oil, Grana Padano cheese on grilled sourdough", tag: "VG, GFO" },
      { name: "Mushroom & Truffle Arancini", price: "19", desc: "Black truffle aioli, parmesan cheese", tag: "VG" },
      { name: "Portuguese Prawn", price: "26", desc: "Marinated Queensland tiger prawns, fermented chilli sauce & garlic, grilled zaatar flatbread", tag: "GFO" },
      { name: "Scallops", price: "28", desc: "Grilled scallops, nduja butter, crunchy pancetta crumble", tag: "GF" },
      { name: "Signature Wings", price: "22", desc: "Smoked black garlic and adobo sauce, furikake", tag: "GFO" },
      { name: "Signature Fried Calamari", price: "19", desc: "Coated with Asian spiced flour mix, served with Vietnamese dipping sauce and herbs", tag: "GFO" },
      { name: "Times Group Entrée Sharing Board", price: "68", desc: "Chef's selection of Wild Mushroom & Truffle Arancini, Signature Wings, Fried Calamari & Times Bruschetta" },
    ],
  },
  {
    title: "Flame Grilled Skewers",
    subtitle: "Served with your choice of one side, chips or salad & a sauce",
    items: [
      { name: "Pork Belly", price: "44", desc: "Slow cooked with Thai basil and chilli, onion, finished over the flame grill with Szechuan honey, almond and shallot crumb" },
      { name: "Mediterranean Lamb", price: "54", desc: "Marinated lamb fillet, onion & red capsicum, lemon & rosemary glaze, finished with pickled onion, saffron yoghurt and fermented tomato seasoning" },
      { name: "Wagyu Rump", price: "54", desc: "Rosemary and garlic, onion & capsicum, cooked over the flame grill, finished with peach & apricot glaze, chimichurri" },
    ],
  },
  {
    title: "From the Flame Grill - Steaks",
    subtitle: "All steaks glazed with Times homemade basting. Served with your choice of one side: chips, salad or mash",
    items: [
      { name: "Eye Fillet 200gm MB:2+", price: "58", desc: "Riverine Premium Black Angus, 150 days grain fed. Recommended: Medium-rare", tag: "GFO" },
      { name: "Porterhouse 300gm MB:3+", price: "62", desc: "Riverine Premium Black Angus, 150 days grain fed. Recommended: Medium-rare/Medium", tag: "GFO" },
      { name: "Rib-Eye on the Bone 400gm MB:4+", price: "82", desc: "Riverine Premium Black Angus, 150 days grain fed. Recommended: Medium", tag: "GFO" },
      { name: "T-Bone Steak 800gm MB:3+", price: "96", desc: "Riverine Premium Black Angus, 150 days grain fed. Recommended: Medium-rare/Medium", tag: "GFO" },
      { name: "Wagyu Rump 500gm MB:5+", price: "98", desc: "Grain-fed 450 days. Recommended: Medium-rare/Medium" },
      { name: "Wagyu Rib-Eye 300gm MB:7+", price: "92", desc: "Grain-fed 450 days. Recommended: Medium-rare" },
    ],
  },
  {
    title: "Times Sharing Steak",
    items: [
      { name: "O'Connor 1.3kg Tomahawk Steak MB:3+ (Serves Two)", price: "198", desc: "Grain fed 240 days. Served with wagyu roast potatoes, simple salad, broccolini & choice of 2 sauces" },
    ],
  },
  {
    title: "Sauces",
    items: [
      { name: "Garlic Aioli", price: "3", desc: "" },
      { name: "Herb & Garlic Butter", price: "4", desc: "" },
      { name: "Green Peppercorn", price: "4", desc: "" },
      { name: "Creamy Mushroom", price: "5", desc: "" },
      { name: "Fermented Chilli", price: "7", desc: "" },
      { name: "Red Wine Jus", price: "7", desc: "" },
      { name: "Truffle Butter", price: "4", desc: "" },
    ],
  },
  {
    title: "Legendary Ribs",
    subtitle: "Slow cooked for 12 hours, glazed with homemade ribs basting. Served with your choice of one side: chips or salad",
    items: [
      { name: "Pork Ribs - Half Rack", price: "54", desc: "", tag: "GFO" },
      { name: "Pork Ribs - Full Rack", price: "79", desc: "", tag: "GFO" },
      { name: "Beef Ribs - Half Rack", price: "54", desc: "", tag: "GFO" },
      { name: "Beef Ribs - Full Rack", price: "79", desc: "", tag: "GFO" },
    ],
  },
  {
    title: "Times Carnivore Sharing Board (Serves Two)",
    subtitle: "Served with choice of two sides (chips/salad/mash) & choice of a sauce",
    items: [
      { name: "Carnivore Board", price: "142", desc: "Eye of rump (200g), choice of half pork or beef ribs, slow roasted pork belly, flame grilled half chicken" },
    ],
  },
  {
    title: "Our Favourites",
    items: [
      { name: "Slow Cooked Beef Cheek", price: "44", desc: "Creamy potato mash, honey glazed carrot, kale, pickled onion, fried pancetta and red wine jus", tag: "GF" },
      { name: "Wild Caught Barramundi", price: "46", desc: "Pan fried barramundi, fregola with mussels and clams, lobster bisque & cherry tomatoes", tag: "GFO" },
      { name: "Wagyu Burger", price: "36", desc: "Mayura wagyu beef patty, lettuce, pickled cucumber, braised onions, tomato, burger sauce & melted cheese on toasted brioche bun, served with chips", tag: "GFO" },
      { name: "House-Made Chicken Parmigiana", price: "39", desc: "Tender crumbed chicken breast, topped with ham, Napoli sauce, melted mozzarella & tasty cheese. Served with chips and salad" },
    ],
  },
  {
    title: "Salads & Sides",
    items: [
      { name: "Classic Caesar Salad", price: "32", desc: "Cos lettuce, bacon, anchovies, garlic croutons, parmesan cheese, creamy caesar dressing and soft boiled egg. +Chicken 6", tag: "GFO" },
      { name: "Honey Roasted Pumpkin", price: "16", desc: "Chilli yoghurt, salsa verde, seasonal herbs & almond", tag: "VG, GFO" },
      { name: "Sautéed Broccolini", price: "18", desc: "Ajo blanco, almond and crispy shallot pangrattato", tag: "VG, GF, VO" },
      { name: "Wagyu Roast Potatoes", price: "14", desc: "Roasted potatoes with rosemary & wagyu tallow, parmesan cheese & black truffle aioli", tag: "GF" },
      { name: "Simple Salad", price: "12", desc: "Mixed leaf, cucumber, tomato, onion, baby radish, honey mustard vinaigrette & parmesan cheese" },
      { name: "Mash", price: "12", desc: "", tag: "VG, GF" },
      { name: "Chips", price: "10", desc: "" },
    ],
  },
  {
    title: "Kids Menu",
    subtitle: "Strictly 12 years and under. Comes with chips and tomato sauce",
    items: [
      { name: "Wagyu Burger", price: "19", desc: "" },
      { name: "Grilled Chicken Tenders", price: "15", desc: "" },
      { name: "Linguine - Butter & Napoli Sauce", price: "15", desc: "" },
    ],
  },
  {
    title: "House-Made Pastas & Risottos",
    subtitle: "Hand-crafted daily, generously paired with refined sauces, slow-braised meats and pristine seafood",
    items: [
      { name: "King Prawn & Ricotta Ravioli", price: "44", desc: "Confit cherry tomatoes, chilli, lemon cream emulsion, saffron, dill, parmesan cheese" },
      { name: "Seafood Linguine", price: "48", desc: "Sautéed tiger prawns, clams, mussels, calamari & scallops, lobster bisque, cherry tomatoes, capers, touch of chilli", tag: "GFO" },
      { name: "Carbonara", price: "39", desc: "Pancetta, free range egg yolk, spring onion, Grana Padano cheese, black cracked pepper and pecorino with house-made linguine", tag: "GFO" },
      { name: "Time's Signature Gnocchi", price: "42", desc: "Butter fried gnocchi with roasted pumpkin, sage cream sauce with a touch of Napoli, garlic and parmesan cheese", tag: "VG" },
      { name: "Lamb Ragu Pappardelle", price: "42", desc: "Slow cooked lamb shoulder in rich San Marzano tomato for 8 hours, hint of fresh chilli, olives, chimichurri, Grana Padano cheese", tag: "GFO" },
      { name: "Chicken, Mushroom & Truffle Risotto", price: "42", desc: "Black truffle tapenade, basil & semi dried tomato, spinach, mascarpone cream, finished with Grana Padano cheese", tag: "GF" },
      { name: "Lobster & Mixed Seafood Risotto", price: "49", desc: "Lobster meat, scallops, calamari, prawns sautéed and deglazed with white wine, touch of chilli, spinach, confit garlic, capers and roasted cherry tomato", tag: "GF" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Pistachio Tiramisu", price: "21", desc: "A rich fusion of chocolate & espresso-soaked sponge, creamy pistachio mascarpone, chopped pistachio" },
      { name: "Sticky Date Pudding", price: "22", desc: "Salted caramel ice cream, caramel sauce, hazelnut praline and cinnamon crème anglaise" },
      { name: "Crème Brûlée", price: "22", desc: "Vanilla bean crème brûlée served with vanilla biscotti, mocha cream & fresh berries" },
      { name: "Brownie S'mores", price: "22", desc: "Layers of melted chocolate and burnt coffee marshmallow, served with vanilla bean ice cream and caramel mousse" },
      { name: "Desserts Board to Share", price: "56", desc: "Choice of any three desserts from above" },
    ],
  },
];

const MothersDay = () => {
  return (
    <Layout>
      <div className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="relative min-h-[55vh] md:min-h-[70vh] flex items-end overflow-hidden">
          <img
            src={mothersDayHero}
            alt="Mother's Day spread at Times Berwick"
            width={1920}
            height={1279}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16 w-full animate-fade-in">
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">Sunday 10 May 2026</p>
            <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-6">
              Mother's Day
            </h1>
            <div className="gold-divider max-w-20 mb-6" />
            <p className="text-foreground/80 leading-relaxed max-w-lg text-sm md:text-base">
              Treat Mum this Mother's Day with a meal at Times Berwick. Choose what you'd like from our specially curated à&nbsp;la&nbsp;carte menu - the perfect way to celebrate the most important woman in your life.
            </p>
          </div>
        </section>

        {/* CTA band */}
        <ScrollReveal>
          <section className="bg-secondary/30 border-y border-border">
            <div className="max-w-4xl mx-auto px-6 py-10 md:py-14 text-center">
              <p className="font-serif text-xl md:text-2xl mb-6 leading-relaxed">
                Can't make it out? Treat Mum with a <strong>Times Berwick Gift Card</strong> - the perfect present for any occasion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-primary/80"
                >
                  Book a Table
                </a>
                <a
                  href={GIFT_CARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  Buy a Gift Card
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Menu */}
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">Mother's Day À La Carte Menu</h2>
              <div className="gold-divider mx-auto mb-4" />
              <p className="text-muted-foreground text-sm uppercase tracking-[0.15em]">
                V: Vegan &nbsp;·&nbsp; GF: Gluten Free &nbsp;·&nbsp; VG: Vegetarian &nbsp;·&nbsp; GFO: Gluten Free Option &nbsp;·&nbsp; VO: Vegan Option
              </p>
              <p className="text-primary text-xs md:text-sm uppercase tracking-[0.2em] mt-4">
                Please note: tables of 8 or more will be required to dine from the set menu.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-14 md:space-y-20">
            {menuSections.map((section) => (
              <ScrollReveal key={section.title}>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-light mb-1">{section.title}</h3>
                  {section.subtitle && (
                    <p className="text-muted-foreground text-sm italic mb-6">{section.subtitle}</p>
                  )}
                  {!section.subtitle && <div className="gold-divider max-w-12 mb-6" />}
                  <div className="space-y-5">
                    {section.items.map((item) => (
                      <div key={item.name} className="flex justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <p className="font-serif text-base md:text-lg font-medium">
                            {item.name}
                            {item.tag && (
                              <span className="ml-2 text-xs text-primary font-body uppercase">({item.tag})</span>
                            )}
                          </p>
                          {item.desc && (
                            <p className="text-muted-foreground text-sm leading-relaxed mt-0.5">{item.desc}</p>
                          )}
                        </div>
                        {item.price && (
                          <span className="text-primary font-serif text-base md:text-lg whitespace-nowrap pt-0.5">
                            {item.price}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <ScrollReveal>
          <section className="bg-secondary/20 border-t border-border">
            <div className="max-w-3xl mx-auto px-6 py-14 md:py-20 text-center">
              <h2 className="font-serif text-2xl md:text-4xl font-light mb-4">Make It a Day to Remember</h2>
              <div className="gold-divider mx-auto mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
                Gather the family, pull up a chair, and let us take care of the rest. Book your Mother's Day table today.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-3.5 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-primary/80"
              >
                Book Now
              </a>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </Layout>
  );
};

export default MothersDay;
