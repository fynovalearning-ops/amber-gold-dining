import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Gift, Star, Cake, Clock } from "lucide-react";
import chefsTableCtaImg from "@/assets/chefs-table-cta.jpg";

const ENROL_URL = "https://rewards.oolio.io/timeless/enrol";

const benefits = [
  {
    icon: Gift,
    title: "$10 Welcome Discount",
    desc: "Receive a $10 welcome discount the moment you sign up to the program.",
  },
  {
    icon: Star,
    title: "Time is Money",
    desc: "Earn 1 point for every $1 spent in-store, redeemable on future visits.",
  },
  {
    icon: Clock,
    title: "Prime Time",
    desc: "Enjoy triple points when you order our signature Tomahawk Feast.",
  },
  {
    icon: Cake,
    title: "Birthday Reward",
    desc: "A special reward to celebrate your birthday with us.",
  },
];

const Rewards = () => {
  return (
    <Layout>
      <div className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center overflow-hidden">
          <img
            src={chefsTableCtaImg}
            alt="Times Berwick dining experience"
            width={1216}
            height={1824}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/55 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16 w-full animate-fade-in">
            <p className="text-primary uppercase tracking-[0.3em] text-xs md:text-sm mb-4">Rewards Programme</p>
            <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-6 md:mb-8">
              Times Berwick Rewards
            </h1>
            <div className="gold-divider max-w-20 mb-4 md:mb-6" />
            <p className="text-foreground/80 leading-relaxed mb-6 md:mb-8 max-w-xl text-sm md:text-base">
              Join our loyalty program and enjoy benefits every time you visit. Earn points on
              your purchases, access exclusive offers, and redeem rewards designed to thank you
              for your continued support.
            </p>
            <a
              href={ENROL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-gold-light"
            >
              Join Now
            </a>
          </div>
        </section>

        {/* How it works */}
        <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <ScrollReveal className="max-w-3xl mb-12 md:mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">How it works</p>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-6">
              Earn points every time you dine
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Receive a $10 welcome discount when you sign up, and earn points with every
              in-store purchase. Simply provide your phone number or scan your rewards card at
              checkout. With Time is Money, you'll collect 1 point for every $1 spent, which can
              be redeemed on future visits.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.1}>
                <div className="border border-border bg-secondary/50 p-8 h-full">
                  <b.icon className="w-8 h-8 text-primary mb-5" strokeWidth={1.5} />
                  <h3 className="font-serif text-xl mb-3">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-secondary">
          <ScrollReveal className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-6">
              Sign up in seconds
            </h2>
            <p className="text-muted-foreground mb-8 text-sm md:text-base">
              Enrol online and start earning rewards on your very next visit.
            </p>
            <a
              href={ENROL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-3 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-gold-light"
            >
              Enrol Now
            </a>
          </ScrollReveal>
        </section>
      </div>
    </Layout>
  );
};

export default Rewards;
