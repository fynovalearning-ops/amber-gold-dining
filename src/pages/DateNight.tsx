import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import FAQ from "@/components/FAQ";
import dateNightApprovedImg from "@/assets/date-night-dining.jpg.asset.json";
import awardRomantic from "@/assets/award-romantic.png";
import dateNightAwardBg from "@/assets/date-night-award-bg.jpeg";
const dinnerMenuPdf = "/Times-Berwick-Date-Night-Menu.pdf";

const DATE_NIGHT_TIMEZONE = "Australia/Melbourne";

const isBeforeOrOnMay7InMelbourne = () => {
  const parts = new Intl.DateTimeFormat("en-AU", {
    timeZone: DATE_NIGHT_TIMEZONE,
    month: "numeric",
    day: "numeric",
  }).formatToParts(new Date());

  const month = Number(parts.find((part) => part.type === "month")?.value ?? 0);
  const day = Number(parts.find((part) => part.type === "day")?.value ?? 0);

  return month < 5 || (month === 5 && day <= 7);
};

const getFaqs = (showMay7Detail: boolean) => [
  { q: "When is Date Night available?", a: showMay7Detail ? "Date Night is live from 7 May and runs every Thursday until further notice." : "Date Night runs every Thursday until further notice, with seatings available from 6-6.45pm." },
  { q: "Can we book upstairs on a Thursday?", a: "Yes. Upstairs bookings on Thursdays are available from 6-6.45pm, and the Date Night menu is the only menu available for upstairs during that time." },
  { q: "Do you cater to dietary requirements?", a: "Yes, please leave a note on your booking or let your server know of any allergies or dietary preferences on arrival. We cater for vegetarians, offer gluten-free alternatives and more." },
  { q: "Do you offer gift vouchers?", a: <>Yes, you can buy e-gift cards to be delivered straight to their inbox through our website <a href="https://giftcards.oolio.io/timesberwick" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-gold-light transition-colors">here</a>, or you can buy physical gift cards in the restaurant if you'd prefer. Our gift cards range from $50-$200.</> },
];

const sharedEntrees = [
  { name: "Hokkaido Scallops", desc: "Grilled Hokkaido scallops, served with Café de Paris butter & parsley." },
  { name: "Arancini", desc: "Wild mushroom and black truffle arancini with truffle aioli, parmesan cheese, Davidson plum" },
  { name: "Wagyu Tartare", desc: "Soy cured yolk, hand cut premium Wagyu Girello, traditional condiments, parmesan, potato crisp" },
  { name: "Garlic & Parmesan Bread", desc: "Fluffy brioche, glazed with garlic & herb butter, parmesan cheese, rosemary crisp" },
];

const mainCourses = [
  { name: "Lamb Skewer", desc: "Marinated Lamb fillet, onion & red capsicum, lemon & rosemary glaze, finished with pickled onion, harissa and fermented tomato seasoning" },
  { name: "Blue Spanner Crab Risotto", desc: "Crab meat, sautéed scallops, calamari & prawns, fresh fish deglazed with white wine, touch of chilli, confit garlic, roasted cherry tomato" },
  { name: "Crispy Skinned Salmon", desc: "Saffron fregola with prawn meat, mussels, capers, clams, lobster bisque, garlic, chilli, dill, cherry tomatoes, fresh verde" },
  { name: "Mushroom & Ricotta Tortellini (VGO)", desc: "Emerald prawn, sage brown butter, raisins, pine nuts" },
  { name: "250g Wagyu Rump", desc: "Premium Wagyu rump, grain fed 450 days, basted with Times Signature basting, served with your choice of chips, salad or mash" },
  { name: "Signature Gnocchi (VG, VO)", desc: "Butter fried gnocchi with roasted pumpkin, sage cream sauce with a touch of Napoli, garlic and parmesan cheese" },
];

const sharedSides = [
  { name: "Roasted Pumpkin", desc: "Chilli yoghurt, salsa verde, pomegranate, seasonal herbs & almond" },
  { name: "Roast Potatoes", desc: "Roasted potatoes with rosemary & wagyu tallow, parmesan cheese & black truffle aioli" },
];

const sharedDesserts = [
  { name: "Chocolate S'mores", desc: "Layers of melted chocolate and burnt coffee marshmallow, served with vanilla bean ice cream and caramel mousse." },
  { name: "Sticky Date Pudding", desc: "Salted caramel ice cream, caramel sauce, hazelnut praline and cinnamon crème anglaise." },
];

const wines = [
  { name: "Semillion - Juniper 'Original White', Margaret River WA", price: "60" },
  { name: "Chardonnay - Laroche Réserve, France 2020", price: "75" },
  { name: "Pinot Bianco - Nals Margreid Berg, Alto Adige, Italy 2022", price: "60" },
  { name: "Rosé - Hahndorf Hill, Adelaide Hills SA", price: "70" },
  { name: "Shiraz - Kooyoonga Creek, North East VIC 2018", price: "68" },
  { name: "Nebbiolo - Tredberri Langhe, Piedmont, Italy", price: "72" },
  { name: "Cab Sauv - Edward's Road, Penny Hill, McLaren Vale SA", price: "70" },
];

const cocktails = [
  { name: "Strawberry Matcha - Licor 43, muscat, port, matcha, lactic acid", price: "24" },
  { name: "Atomic Melon - Gin, Midori, citrus, simple syrup", price: "20" },
  { name: "Bees Knees - Gin, Cointreau, lemon, honey", price: "20" },
  { name: "Nova Verse - Sloe gin, verjuice, muscat, citrus, simple syrup, wonderfoam", price: "24" },
  { name: "Off Dry Martini - Vodka, limoncello, Sauternes, basil oil", price: "23" },
  { name: "Sea Blast - Rum, Blue Curacao, orange cordial, citrus", price: "22" },
];

const DateNight = () => {
  const showMay7Detail = isBeforeOrOnMay7InMelbourne();
  const faqs = getFaqs(showMay7Detail);

  return (
    <Layout>
      <div className="pt-20 md:pt-24">
        <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end md:items-start overflow-hidden">
            <img src={dateNightApprovedImg.url} width={1440} height={1920} alt="Guests enjoying Date Night at Times Berwick" className="absolute inset-0 w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 md:pb-16 pt-16 md:pt-24 w-full animate-fade-in">
            <p className="hero-label text-sm md:text-lg mb-4">Every Thursday</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-4 md:mb-6">Date night<br />at Times Berwick</h1>
            <div className="max-w-2xl">
              <p className="uppercase tracking-[0.3em] text-xs mb-4 md:mb-6 text-primary-foreground">For Two</p>
              <div className="gold-divider max-w-20 mb-6 md:mb-8" />
              <p className="text-primary-foreground/90 leading-relaxed mb-6 text-sm md:text-base">
                {showMay7Detail ? (
                  <>Date Night, every Thursday at Times Berwick from the <strong className="text-foreground font-medium">7th of May</strong>.</>
                ) : (
                  <>Date Night, every Thursday at Times Berwick with seatings available from <strong className="text-foreground font-medium">6-6.45pm</strong>.</>
                )}
              </p>
              <p className="text-primary-foreground/90 leading-relaxed mb-8 text-sm md:text-base">Book your seat from <strong className="text-primary-foreground font-medium">6-6.45pm</strong> and enjoy a candle-lit dinner from our <strong className="text-primary-foreground font-medium">special Date Night menu</strong>, available upstairs only.</p>
              <div className="flex flex-col sm:flex-row sm:flex-nowrap gap-3">
                <a href="https://www.opentable.com/booking/experiences-availability?rid=266717&restref=266717&experienceId=708380&utm_source=external&utm_medium=referral&utm_campaign=shared" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap px-6 py-3 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-primary/80">Book Date Night</a>
                <a href="#dinner-menu" className="inline-flex items-center justify-center whitespace-nowrap px-6 py-3 border border-primary text-primary uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground">View Dinner Menu</a>
                <a href="#drinks-menu" className="inline-flex items-center justify-center whitespace-nowrap px-6 py-3 border border-primary text-primary uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground">View Drinks Menu</a>
              </div>
            </div>
          </div>
        </section>

        <section id="dinner-menu" className="bg-secondary scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-32 space-y-16">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                <div>
                  <h3 className="font-serif text-4xl md:text-6xl font-light mb-4">Date Night | 79pp</h3>
                  <p className="text-muted-foreground italic max-w-2xl text-sm md:text-base">Shared starters, a side and dessert with a main each</p>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <a href={dinnerMenuPdf} download="Times-Berwick-Date-Night-Menu.pdf" className="inline-flex px-6 py-3 border border-border text-foreground uppercase tracking-[0.15em] text-xs font-medium transition-all duration-300 hover:border-primary hover:text-primary">Download Date Night Menu PDF</a>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="border border-border p-6">
                  <p className="text-primary uppercase tracking-[0.2em] text-xs mb-2">Entrée</p>
                  <h4 className="font-serif text-xl mb-6">One to share</h4>
                  <ul className="space-y-5">
                    {sharedEntrees.map((item) => (
                      <li key={item.name}>
                        <span className="text-foreground font-medium text-sm">{item.name}</span>
                        <span className="block text-xs text-muted-foreground mt-1">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-border p-6">
                  <p className="text-primary uppercase tracking-[0.2em] text-xs mb-2">Main course</p>
                  <h4 className="font-serif text-2xl mb-6">One each</h4>
                  <ul className="space-y-5">
                    {mainCourses.map((item) => (
                      <li key={item.name}>
                        <span className="text-foreground font-medium text-sm">{item.name}</span>
                        <span className="block text-xs text-muted-foreground mt-1">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>


                <div className="border border-border p-6">
                  <p className="text-primary uppercase tracking-[0.2em] text-xs mb-2">Side</p>
                  <h4 className="font-serif text-xl mb-6">One to share</h4>
                  <ul className="space-y-5">
                    {sharedSides.map((item) => (
                      <li key={item.name}>
                        <span className="text-foreground font-medium text-sm">{item.name}</span>
                        <span className="block text-xs text-muted-foreground mt-1">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-border p-6">
                  <p className="text-primary uppercase tracking-[0.2em] text-xs mb-2">Dessert</p>
                  <h4 className="font-serif text-xl mb-6">One to share</h4>
                  <ul className="space-y-5">
                    {sharedDesserts.map((item) => (
                      <li key={item.name}>
                        <span className="text-foreground font-medium text-sm">{item.name}</span>
                        <span className="block text-xs text-muted-foreground mt-1">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 flex justify-start">
                <a href={dinnerMenuPdf} target="_blank" rel="noopener noreferrer" className="inline-flex px-6 py-3 border border-border text-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:border-primary hover:text-primary">View Wine & Cocktail List</a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative pt-8 pb-20 md:pt-10 md:pb-28 overflow-hidden">
          <img src={dateNightAwardBg} width={1279} height={1920} alt="Cocktail on a candle-lit table at Times Berwick" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center opacity-40" />
          <div className="hero-overlay absolute inset-0" />
          <ScrollReveal className="relative z-10 flex flex-col items-start text-left max-w-7xl mx-auto px-6">
            <img src={awardRomantic} width={724} height={1024} alt="Best Romantic Restaurant 2025 - Restaurant Guru" loading="lazy" className="w-64 md:w-72 mb-8" />
            <p className="text-primary-foreground/90 italic max-w-xl text-sm md:text-base leading-relaxed">The Times Berwick is made for date night. Awarded Best Romantic Restaurant in Berwick in 2025 by Restaurant Guru.</p>
          </ScrollReveal>
        </section>

        <section id="drinks-menu" className="bg-secondary py-16 md:py-20 scroll-mt-24">
          <ScrollReveal className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:max-w-sm">
                <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">To drink</p>
                <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">Wines & specialty cocktails</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">Available to enjoy alongside our Date Night menu in the upstairs dining room.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
                <div className="border border-border p-6">
                  <h3 className="font-serif text-2xl mb-5">Wines</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {wines.map((wine) => (
                      <li key={wine.name} className="flex justify-between gap-4">
                        <span>{wine.name}</span>
                        <span className="shrink-0 tabular-nums">{wine.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-border p-6">
                  <h3 className="font-serif text-2xl mb-5">Cocktails</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {cocktails.map((cocktail) => (
                      <li key={cocktail.name} className="flex justify-between gap-4">
                        <span>{cocktail.name}</span>
                        <span className="shrink-0 tabular-nums">{cocktail.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <FAQ items={faqs} />

        <section className="relative py-32 md:py-40 overflow-hidden">
          <img src={dateNightApprovedImg.url} width={1440} height={1920} alt="Date Night dish and cocktails at Times Berwick" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="hero-overlay absolute inset-0" />
          <ScrollReveal className="relative z-10 max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-[1] mb-8">Book your Thursday date night</h2>
            <p className="text-muted-foreground mb-10 max-w-xl text-lg">Bring your other half and let us take care of the rest, brownie points guaranteed. Book now.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://www.opentable.com/booking/experiences-availability?rid=266717&restref=266717&experienceId=708380&utm_source=external&utm_medium=referral&utm_campaign=shared" target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-3.5 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-gold-light">Reserve a Table</a>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </Layout>
  );
};

export default DateNight;
