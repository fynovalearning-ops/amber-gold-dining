import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import chefsTableHeroImg from "@/assets/chefs-table-hero.jpg";
import dateNightApprovedImg from "@/assets/date-night-dining.jpg.asset.json";
import chefsTableCtaImg from "@/assets/chefs-table-cta.jpg";
import lunchImg from "@/assets/lunch-dining.jpg.asset.json";
import fathersDayImg from "@/assets/fathers-day-steak.jpg.asset.json";
import weeknightAsset from "@/assets/weeknight-wine.jpg.asset.json";

type EventCard = {
  title: string;
  eyebrow: string;
  path: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  description: string;
  cta: string;
  isExternal?: boolean;
  ctaStyle?: string;
  imageClassName?: string;
};

// Father's Day card auto-removes on Monday 7 September 2026
const FATHERS_DAY_EXPIRY = new Date("2026-09-07T00:00:00");
const isFathersDayActive = () => new Date() < FATHERS_DAY_EXPIRY;

const events: EventCard[] = [
  {

    title: "Chef's Table",
    eyebrow: "Seasonal dining",
    path: "/chefs-table",
    image: chefsTableHeroImg,
    width: 1920,
    height: 1280,
    alt: "Chef's Table shared feast at Times Berwick",
    description: "Our take on a feed me menu, built around seasonal picks from the kitchen.",
    cta: "Explore",
  },
  {
    title: "Date Night",
    eyebrow: "Every Thursday",
    path: "/date-night",
    image: dateNightApprovedImg.url,
    width: 1440,
    height: 1920,
    alt: "Date Night dining experience at Times Berwick",
    description: "A set menu for two with seatings from 6-6.45pm in the upstairs dining room.",
    cta: "Explore",
  },
  {
    title: "Rewards Programme",
    eyebrow: "Member benefits",
    path: "/rewards",
    image: chefsTableCtaImg,
    width: 1216,
    height: 1824,
    alt: "Dining experience at Times Berwick for rewards programme",
    description: "Join Time is Money for welcome savings, points on every visit and member offers.",
    cta: "Explore",
  },
  {
    title: "Weeknight bookings",
    eyebrow: "Monday-Thursday",
    path: "https://www.opentable.com.au/r/times-berwick-reservations-berwick?restref=266717&lang=en-AU&ot_source=Restaurant%20website",
    image: weeknightAsset.url,
    width: 1440,
    height: 1920,
    alt: "Weeknight bookings at Times Berwick with a free bottle of wine",
    description: "Free bottle of wine on bookings of 4 people or more.",
    cta: "Book now",
    isExternal: true,
    ctaStyle: "button",
  },
  {
    title: "Lunch offer",
    eyebrow: "Monday to Friday, 11:30am-3:00pm",
    path: "/menu#lunch-packages",
    image: lunchImg.url,
    width: 1440,
    height: 1920,
    alt: "Lunch dining at Times Berwick",
    description:
      "Mains and a house drink from $39, two courses $49 or three courses $56. Not available on public holidays.",
    cta: "Explore",
  },
];

const fathersDay: EventCard = {
  title: "Father's Day",
  eyebrow: "Sunday 6 September",
  path: "/fathers-day",
  image: fathersDayImg.url,
  width: 1440,
  height: 1920,
  alt: "Father's Day dining at Times Berwick",
  description:
    "Celebrate Dad with a reduced a-la-carte menu, plus gift cards if you are still deciding on a present.",
  cta: "Explore",
};


const WhatsOn = () => {
  const items = isFathersDayActive() ? [fathersDay, ...events] : events;


  return (
    <Layout>
      <title>What's On | Times Berwick</title>
      <meta
        name="description"
        content="See what's on at Times Berwick, from Date Night and Chef's Table to seasonal dining experiences and member offers."
      />

      <div className="pt-20 md:pt-24 bg-secondary min-h-screen">
        <section className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <ScrollReveal className="max-w-3xl mb-12 md:mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">What's On</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[0.95] mb-6">
              What's happening at Times Berwick
            </h1>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              Explore current dining experiences, seasonal events and offers, all in one place.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 md:gap-y-16 max-w-5xl mx-auto">
            {items.map((item, index) => {
              const ctaClass =
                item.ctaStyle === "button"
                  ? "inline-flex items-center justify-center whitespace-nowrap px-6 py-3 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-gold-light"
                  : "inline-block text-foreground underline underline-offset-4 text-sm md:text-base transition-colors duration-300 group-hover:text-primary";

              const cardContent = (
                <>
                  <div className="aspect-[5/4] overflow-hidden mb-7 bg-background/40">
                    <img
                      src={item.image}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.imageClassName ?? ""}`}
                    />
                  </div>
                  <div className="max-w-md mx-auto text-center">
                    <p className="text-primary uppercase tracking-[0.22em] text-xs mb-4">{item.eyebrow}</p>
                    <h2 className="font-serif text-3xl md:text-4xl font-light mb-5">{item.title}</h2>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <span className={ctaClass}>
                      {item.cta}
                    </span>
                  </div>
                </>
              );

              return (
                <ScrollReveal key={item.path} delay={index * 0.08}>
                  <article className="group">
                    {item.isExternal ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        {cardContent}
                      </a>
                    ) : (
                      <Link to={item.path} className="block">
                        {cardContent}
                      </Link>
                    )}
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WhatsOn;