import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import FAQ from "@/components/FAQ";
import steakImg from "@/assets/menu-hero-new.jpg";
import cocktailsHeroImg from "@/assets/cocktails-hero.jpg";
import oystersFaqImg from "@/assets/oysters-faq.jpg";
import flameGrilledSkewersImg from "@/assets/flame-grilled-skewers.jpg";
import sydneyRockOystersImg from "@/assets/sydney-rock-oysters.jpg";
import carnivoreBoardImg from "@/assets/carnivore-board-new.jpg";
import {
  aLaCarteSections,
  oysterItems,
  rawAndColdItems,
  toBeginItems,
  lunchPackages,
  lunchSections,
  cocktailSections,
  drinksSections,
  wineSections,
  chefsTableCourses,
  ultimateDiningCourses,
  setMenu1Courses,
  setMenu2Courses,
  beveragePackages,
  type MenuSection,
  type MenuItem,
} from "@/data/menuData";

const TABS = [
  { id: "alacarte", label: "À La Carte" },
  { id: "lunch", label: "Lunch" },
  { id: "cocktails", label: "Cocktails" },
  { id: "drinks", label: "Drinks" },
  { id: "wine", label: "Wine" },
  { id: "chefs-table", label: "Chef's Table" },
  { id: "set-menus", label: "Set Menus" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const faqs = [
  { q: "What type of cuisine does Times Berwick serve?", a: "We serve everything from premium cuts of steak and locally sourced seafood to Nasi Goreng and trendy desserts. Our head chef Ramesh has travelled around the world gathering inspiration for Times Berwick's menu and it shows." },
  { q: "Do you cater to dietary requirements?", a: "Yes, please leave a note on your booking or let your server know of any allergies or dietary preferences on arrival. We cater for vegetarians, offer gluten-free alternatives and more." },
  { q: "Do you offer set menus or tasting experiences?", a: "Yes. We offer curated dining experiences including our Chef's Table Experience and multiple set menus, designed to showcase the best of our menu." },
  { q: "Is your menu seasonal?", a: "Our menu evolves with seasonal produce to ensure we serve the freshest ingredients and the best dining experience possible." },
];

// ─── Reusable Menu Item Row ──────────────────────────
const MenuItemRow = ({ item }: { item: MenuItem }) => (
  <div className="menu-item-hover flex justify-between items-baseline py-4 border-b border-border/40">
    <div className="pr-4 flex-1 min-w-0">
      <span className="text-foreground font-medium">
        {item.name}
        {item.tag && (
          <span className="ml-2 text-xs text-primary/70 font-normal tracking-wide">
            ({item.tag})
          </span>
        )}
      </span>
      {item.desc && (
        <span className="block text-muted-foreground text-sm mt-0.5 leading-relaxed italic">
          {item.desc}
        </span>
      )}
    </div>
    {item.price && (
      <span className="text-primary font-serif text-lg shrink-0">
        ${item.price}
      </span>
    )}
  </div>
);

// ─── Reusable Section Block ──────────────────────────
const MenuSectionBlock = ({ section, index }: { section: MenuSection; index: number }) => {
  const sectionImages: Record<string, string> = {
    "Flame Grilled Skewers": flameGrilledSkewersImg,
  };
  const sideImage = sectionImages[section.title];

  const content = (
    <>
      <h3 className="font-serif text-3xl md:text-4xl mb-1">{section.title}</h3>
      {section.subtitle && (
        <p className="text-primary text-sm italic mb-2">{section.subtitle}</p>
      )}
      {section.intro && (
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-2xl">
          {section.intro}
        </p>
      )}
      <div className="gold-divider max-w-16 mt-2 mb-6" />
      <div>
        {section.items.map((item, j) => (
          <MenuItemRow key={j} item={item} />
        ))}
      </div>
      {section.title === "Times Carnivore Sharing Board" && (
        <img
          src={carnivoreBoardImg}
          alt="Times Carnivore Sharing Board with eye of rump, ribs, pork belly and chicken"
          loading="lazy"
          className="mt-4 w-full max-w-sm aspect-[4/3] object-cover rounded-sm shadow-md"
        />
      )}
    </>
  );

  return (
    <ScrollReveal
      key={index}
      delay={Math.min(index * 0.04, 0.15)}
      className="mb-16 last:mb-0 scroll-mt-36 md:scroll-mt-32"
      id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
    >
      {sideImage ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">{content}</div>
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={sideImage}
                alt={`${section.title} at Times Berwick`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ) : (
        content
      )}
    </ScrollReveal>
  );
};

// ─── Course Block (for Chef's Table / Set Menus) ─────
const CourseBlock = ({
  course,
  subtitle,
  items,
  index,
}: {
  course: string;
  subtitle?: string;
  items: { name: string; desc?: string; tag?: string }[];
  index: number;
}) => (
  <ScrollReveal delay={Math.min(index * 0.06, 0.2)} className="mb-12 last:mb-0">
    <div className="border-l-2 border-primary/40 pl-6">
      <p className="text-primary uppercase tracking-[0.2em] text-xs mb-1">
        {course}
      </p>
      {subtitle && (
        <p className="text-muted-foreground text-sm italic mb-3">{subtitle}</p>
      )}
      <div className="space-y-4">
        {items.map((item, j) => (
          <div key={j}>
            <p className="text-foreground font-medium font-serif text-lg">
              {item.name}
              {item.tag && (
                <span className="ml-2 text-xs text-primary/70 font-body font-normal">
                  ({item.tag})
                </span>
              )}
            </p>
            {item.desc && (
              <p className="text-muted-foreground text-sm mt-0.5 leading-relaxed">
                {item.desc}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  </ScrollReveal>
);

// ─── Tab Content Components ──────────────────────────
const AlaCarteTab = () => (
  <div>
    <div className="mb-10 flex flex-wrap gap-3">
      <a
        href="/Times-Berwick-A-La-Carte-Menu.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
      >
        <Download className="w-4 h-4" />
        Download PDF Menu
      </a>
      <Link
        to="/gallery"
        className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
      >
        Explore Gallery
      </Link>
      <a
        href="https://ordering.oolio.io/the-times-berwick"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-gold-light transition-colors duration-300"
      >
        Order Online
      </a>
    </div>

    <ScrollReveal className="mb-16">
      <h3 className="font-serif text-3xl md:text-4xl mb-1">Raw & Cold</h3>
      <div className="gold-divider max-w-16 mt-2 mb-6" />

      {rawAndColdItems.map((item, j) => (
        <MenuItemRow key={j} item={item} />
      ))}

      {/* Oyster sub-heading */}
      <div className="mt-6">
        <h4 className="font-serif text-xl md:text-2xl mb-0.5">Sydney Rock Oysters</h4>
        <div className="pl-6">
          {oysterItems.map((item, j) => (
            <MenuItemRow key={j} item={item} />
          ))}
          <img
            src={sydneyRockOystersImg}
            alt="Sydney rock oysters served on ice with red wine shallot dressing and lemon"
            loading="lazy"
            className="mt-4 w-full max-w-sm aspect-[4/3] object-cover rounded-sm shadow-md"
          />
        </div>
      </div>
    </ScrollReveal>

    {/* Entrée */}
    <ScrollReveal className="mb-16">
      <h3 className="font-serif text-3xl md:text-4xl mb-1">Entrée</h3>
      <div className="gold-divider max-w-16 mt-2 mb-6" />
      <div>
        {toBeginItems.map((item, j) => (
          <MenuItemRow key={j} item={item} />
        ))}
      </div>
    </ScrollReveal>

    {aLaCarteSections.map((section, i) => (
      <MenuSectionBlock key={i} section={section} index={i} />
    ))}
  </div>
);

const LunchTab = () => (
  <div>
    <div className="mb-10 flex flex-wrap gap-3">
      <a
        href="#lunch-packages"
        className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
      >
        Explore Lunch Packages
      </a>
      <a
        href="/Times-Berwick-Lunch-Menu.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
      >
        <Download size={16} />
        Download Lunch Menu PDF
      </a>
    </div>

    {lunchSections.map((section, i) => (
      <MenuSectionBlock key={i} section={section} index={i} />
    ))}

    {/* Lunch Packages — boxed section at the end */}
    <ScrollReveal className="mt-16 scroll-mt-36 md:scroll-mt-32" id="lunch-packages">
      <div className="bg-secondary/40 border border-primary/20 rounded-sm p-8 md:p-12">
        <p className="text-primary uppercase tracking-[0.3em] text-xs mb-3">
          Lunch Packages
        </p>
        <p className="text-muted-foreground text-sm italic mb-2">{lunchPackages.subtitle}</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-2xl">
          {lunchPackages.intro}
        </p>
        <div className="gold-divider max-w-16 mb-6" />
        <div className="space-y-4">
          {lunchPackages.items.map((item, j) => (
            <div key={j} className="flex items-baseline gap-3 py-2 border-b border-border/40">
              <span className="text-primary font-serif text-lg shrink-0">${item.price}</span>
              <span className="text-foreground font-medium">{item.name}</span>
              {item.desc && (
                <span className="text-muted-foreground text-sm italic ml-1">- {item.desc}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

const CocktailsTab = () => (
  <div>
    {/* Hero image with intro */}
    <div className="relative rounded-sm overflow-hidden mb-16 -mx-2">
      <img
        src={cocktailsHeroImg}
        alt="Cocktails at Times Berwick"
        className="w-full h-72 md:h-[28rem] object-cover object-[center_72%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/45 to-transparent" />
      <div className="absolute inset-0 flex items-end md:items-center p-6 md:p-10">
        <div className="bg-background/50 backdrop-blur-sm border border-border/40 rounded-sm p-5 md:p-7 max-w-xl">
          <h3 className="font-serif text-3xl md:text-4xl mb-2">Cocktails</h3>
          <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
            Our cocktail list features all the classics alongside house specials. Always made to order by our experienced bar team.
          </p>
        </div>
      </div>
    </div>

    {cocktailSections.map((section, i) => (
      <>
        <MenuSectionBlock key={i} section={section} index={i} />
      </>
    ))}
  </div>
);

const DrinksTab = () => (
  <div>
    {drinksSections.map((section, i) => (
      <MenuSectionBlock key={i} section={section} index={i} />
    ))}

    {/* Beverage Packages */}
    <ScrollReveal delay={0.1} className="mt-20">
      <h3 className="font-serif text-3xl md:text-4xl mb-2">
        Beverage packages
      </h3>
      <p className="text-muted-foreground text-sm mb-6 max-w-2xl">
        Perfect for functions and group dining. All packages include cocktail on arrival.
      </p>
      <div className="gold-divider max-w-16 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {beveragePackages.map((pkg, i) => (
          <div
            key={i}
            className="bg-secondary/60 border border-border/30 rounded p-6"
          >
            <h4 className="font-serif text-2xl mb-1">{pkg.title}</h4>
            <p className="text-primary font-serif text-xl mb-4">{pkg.price}</p>
            <ul className="space-y-2">
              {pkg.includes.map((item, j) => (
                <li
                  key={j}
                  className="text-muted-foreground text-sm flex items-start gap-2"
                >
                  <span className="text-primary mt-1 text-xs">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ScrollReveal>
  </div>
);

const WineTab = () => (
  <div>
    <ScrollReveal className="mb-10">
      <p className="text-muted-foreground leading-relaxed max-w-2xl text-sm">
        Our carefully curated wine collection celebrates both the finest Australian
        vineyards and prestigious international wine houses. Whether you're in
        the mood for a crisp white, a full-bodied red, or something refreshingly
        pink, our diverse selection caters to both the curious newcomer and the
        seasoned enthusiast.
      </p>
      <p className="text-muted-foreground text-xs mt-3 italic">
        Prices shown as Glass / Bottle where available
      </p>
    </ScrollReveal>
    {wineSections.map((section, i) => (
      <MenuSectionBlock key={i} section={section} index={i} />
    ))}
  </div>
);

const ChefsTableTab = () => (
  <div>
    {/* Sharing Experience */}
    <ScrollReveal className="mb-16">
      <div className="bg-secondary/40 border border-primary/20 rounded-sm p-8 md:p-12">
        <p className="text-primary uppercase tracking-[0.3em] text-xs mb-3">
          Exclusive Experience
        </p>
        <h3 className="font-serif text-4xl md:text-5xl mb-2">
          Times Sharing Experience
        </h3>
        <p className="font-serif text-2xl text-primary mb-6">
          $99<span className="text-muted-foreground text-base"> per person</span>{" "}
          <span className="text-muted-foreground text-sm">designed for 2 people</span>
        </p>
        <div className="gold-divider max-w-24 mb-8" />
        {chefsTableCourses.map((c, i) => (
          <CourseBlock
            key={i}
            course={c.course}
            subtitle={c.subtitle}
            items={c.items}
            index={i}
          />
        ))}
      </div>
    </ScrollReveal>

    {/* 4 Course Ultimate */}
    <ScrollReveal className="mb-12">
      <div className="bg-secondary/40 border border-primary/20 rounded-sm p-8 md:p-12">
        <p className="text-primary uppercase tracking-[0.3em] text-xs mb-3">
          Premium Experience
        </p>
        <h3 className="font-serif text-4xl md:text-5xl mb-2">
          4 Course Ultimate Dining Experience
        </h3>
        <p className="font-serif text-2xl text-primary mb-6">
          $99<span className="text-muted-foreground text-base"> per person</span>

        </p>
        <div className="gold-divider max-w-24 mb-8" />
        {ultimateDiningCourses.map((c, i) => (
          <CourseBlock
            key={i}
            course={c.course}
            subtitle={c.subtitle}
            items={c.items}
            index={i}
          />
        ))}
      </div>
    </ScrollReveal>
  </div>
);

const SetMenusTab = () => (
  <div>
    {/* Set Menu 1 */}
    <ScrollReveal className="mb-16">
      <div className="bg-secondary/40 border border-border/30 rounded-sm p-8 md:p-12">
        <p className="text-primary uppercase tracking-[0.3em] text-xs mb-3">
          Option One
        </p>
        <h3 className="font-serif text-4xl md:text-5xl mb-2">Set Menu 1</h3>
        <p className="font-serif text-2xl text-primary mb-6">
          $95<span className="text-muted-foreground text-base"> per person</span>
        </p>
        <div className="gold-divider max-w-24 mb-8" />
        {setMenu1Courses.map((c, i) => (
          <CourseBlock
            key={i}
            course={c.course}
            subtitle={c.subtitle}
            items={c.items}
            index={i}
          />
        ))}
      </div>
    </ScrollReveal>

    {/* Set Menu 2 */}
    <ScrollReveal className="mb-12">
      <div className="bg-secondary/40 border border-primary/20 rounded-sm p-8 md:p-12">
        <p className="text-primary uppercase tracking-[0.3em] text-xs mb-3">
          Premium Option
        </p>
        <h3 className="font-serif text-4xl md:text-5xl mb-2">Set Menu 2</h3>
        <p className="font-serif text-2xl text-primary mb-6">
          $110<span className="text-muted-foreground text-base"> per person</span>
        </p>
        <div className="gold-divider max-w-24 mb-8" />
        {setMenu2Courses.map((c, i) => (
          <CourseBlock
            key={i}
            course={c.course}
            subtitle={c.subtitle}
            items={c.items}
            index={i}
          />
        ))}
      </div>
    </ScrollReveal>
  </div>
);

// ─── Tab Content Map ─────────────────────────────────
const TAB_CONTENT: Record<TabId, () => JSX.Element> = {
  alacarte: AlaCarteTab,
  lunch: LunchTab,
  cocktails: CocktailsTab,
  drinks: DrinksTab,
  wine: WineTab,
  "chefs-table": ChefsTableTab,
  "set-menus": SetMenusTab,
};

// ─── Main Page ───────────────────────────────────────
const MenuPage = () => {
  const [activeTab, setActiveTab] = useState<TabId>("alacarte");
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-1px 0px 0px 0px" }
    );
    const sentinel = document.getElementById("tabs-sentinel");
    if (sentinel) observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Auto-scroll active tab into view on mobile
  useEffect(() => {
    if (!tabsContainerRef.current) return;
    const activeEl = tabsContainerRef.current.querySelector(
      `[data-tab="${activeTab}"]`
    ) as HTMLElement | null;
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeTab]);

  const TabContent = TAB_CONTENT[activeTab];

  return (
    <Layout>
      <div className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="relative h-[50vh] md:h-[55vh] flex items-end overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/menu-hero-bg.mp4" type="video/mp4" />
            <img src={steakImg} alt="Premium dining at Times Berwick" className="w-full h-full object-cover" />
          </video>
          <div className="hero-overlay absolute inset-0" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 md:pb-16 w-full animate-fade-in">
            <p className="hero-label mb-4">
              Times Berwick
            </p>
            <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-3 md:mb-4">
              Menu
            </h1>
            <p className="text-foreground/80 max-w-lg text-sm md:text-base leading-relaxed">
              Our menu was put together by Head Chef Ramesh Sapkota and his team. Locally sourced, premium ingredients, always. From handmade pasta to flame-grilled steak, visit us for an experience that stands out.
            </p>
          </div>
        </section>

        {/* Sentinel for sticky detection */}
        <div id="tabs-sentinel" className="h-0" />

        {/* Sticky Tab Navigation */}
        <div
          ref={tabsRef}
          className={`sticky top-16 md:top-20 z-30 transition-all duration-300 ${
            isSticky
              ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg"
              : "bg-secondary/80 backdrop-blur-sm"
          }`}
        >
          {/* Mobile: stacked grid */}
          <div className="grid grid-cols-2 gap-1 px-4 py-2 md:hidden">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                data-tab={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3 py-3.5 min-h-[48px] text-xs uppercase tracking-[0.12em] font-medium transition-all duration-300 rounded-sm ${
                  activeTab === tab.id
                    ? "text-primary bg-primary/10 border border-primary/30"
                    : "text-muted-foreground border border-border/30 hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Desktop: horizontal tabs */}
          <div
            ref={tabsContainerRef}
            className="hidden md:flex max-w-7xl mx-auto px-6 gap-2"
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                data-tab={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative whitespace-nowrap px-5 py-4 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 shrink-0 ${
                  activeTab === tab.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <section className="py-12 lg:py-24">
          <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <TabContent />
              </motion.div>
            </AnimatePresence>
          </div>
          </div>
        </section>

        {/* Booking CTA */}
        <ScrollReveal>
          <section className="bg-secondary py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              We'll save you a seat
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
              Walk in or secure your spot through the button below and we'll see you soon in our Berwick venue.
            </p>
            <a
              href="https://www.opentable.com.au/r/times-berwick-reservations-berwick?restref=266717&lang=en-AU&ot_source=Restaurant%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-10 py-3 text-sm uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors duration-300"
            >
              Book a Table
            </a>
            </div>
          </section>
        </ScrollReveal>

        {/* FAQ */}
        <FAQ items={faqs} />
      </div>
    </Layout>
  );
};

export default MenuPage;
