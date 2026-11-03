import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import DateNightPopup from "@/components/DateNightPopup";
import FAQ from "@/components/FAQ";
import heroBg from "@/assets/hero-bg.jpg";
import steakImg from "@/assets/award-winning-cuts-times-berwick-black-angus-riverine.jpg";
import chefRamesh from "@/assets/chef-ramesh.jpg";
import aboutDish from "@/assets/about-dish.jpg";
import pastaImg from "@/assets/pasta-dish.jpg";
import seafoodImg from "@/assets/seafood-dish.jpg";
import chefsTableImg from "@/assets/chefs-table.jpg";
import dateNightImg from "@/assets/date-night.jpg";
import dateNightFeatureImg from "@/assets/date-night-feature.jpg";
import awardSteakhouse from "@/assets/award-steakhouse.jpg";
import awardSteakhouse2026 from "@/assets/award-steakhouse-2026.png";
import awardRomantic from "@/assets/award-romantic.png";
import awardRestaurantGuru2026 from "@/assets/award-restaurant-guru-2026.png.asset.json";
import awardTop10 from "@/assets/award-top10.png";
import giftCardBg from "@/assets/gift-card-bg.jpg";
import grillFlames from "@/assets/grill-flames.jpg";
import scallopsReviewsBg from "@/assets/scallops-reviews-bg.jpg";
import visitUsBg from "@/assets/visit-us-bg.jpg";

const faqs = [
  { q: "What makes Times Berwick different?", a: "Times Berwick is truly a hidden gem in Berwick. We serve everything from locally sourced steaks, cooked over an open flame to Nasi Goreng. We have an extensive menu but that doesn't affect the quality of the dishes that land to your table and that sets us apart. Alongside our premium food, we have a range of impressive specialty classic and house cocktails available and of course, we hire the friendliest staff to make you feel at home from the minute you walk through our doors." },
  { q: "Do I need to make a reservation?", a: "Not always. We take walk-ins but we do recommend booking a table in advance, especially on the weekend to avoid disappointment." },
  { q: "How do I make a booking?", a: "You can reserve a spot on our website using any of the orange \"book now\" buttons or call us on +61 3 8796 3883 to reserve a spot over the phone during opening hours." },
  { q: "What type of cuisine does Times Berwick serve?", a: "We serve everything from premium cuts of steak and locally sourced seafood to Nasi Goreng and trendy desserts. Our head chef Ramesh has travelled around the world gathering inspiration for Times Berwick's menu and it shows." },
  { q: "Do you cater to dietary requirements?", a: "Yes, please leave a note on your booking or let your server know of any allergies or dietary preferences on arrival. We cater for vegetarians, offer gluten-free alternatives and more." },
  { q: "Is there parking available nearby?", a: "Yes, there are a number of free parking spots right outside the venue as well as free street parking nearby." },
  { q: "Are children welcome?", a: "Yes. Families are welcome at Times Berwick." },
  { q: "Do you offer gift vouchers?", a: <>Yes, you can buy e-gift cards to be delivered straight to their inbox through our website <a href="https://giftcards.oolio.io/timesberwick" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-gold-light transition-colors">here</a>, or you can buy physical gift cards in the restaurant if you'd prefer. Our gift cards range from $50-$200.</> },
  { q: "Can I order online?", a: <>Yes, we offer online ordering for pick-up. Order <a href="https://ordering.oolio.io/the-times-berwick" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-gold-light transition-colors">here</a>.</> },
];

const Index = () => {
  return (
    <Layout>
      <DateNightPopup />
      <title>Times Berwick | Award-Winning Steakhouse & Fine Dining</title>
      <meta name="description" content="Premium Black Angus steakhouse in Berwick VIC. Best Quality Steakhouse 2025. Fine dining, handmade pasta, seafood & cocktails." />

      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          width="1920"
          height="1080"
          poster={heroBg}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <img src={heroBg} alt="Times Berwick fine dining interior" width="1920" height="1080" fetchPriority="high" className="w-full h-full object-cover" />
        </video>
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 md:pb-24 w-full animate-fade-in">
          <p className="hero-label text-sm mb-4 md:mb-6">Award Winning Berwick Dining & Modern Australian Steakhouse</p>
          <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl font-light leading-[0.9] mb-6 md:mb-8">
            <span className="text-primary font-semibold">Times</span><br />Berwick
          </h1>
          <p className="text-muted-foreground text-base md:text-xl font-light max-w-xl mb-8 md:mb-10">
            An award-winning dining experience where premium cuts and local seafood meet specialty cocktails and the finest hospitality in Berwick
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://www.opentable.com.au/r/times-berwick-reservations-berwick?restref=266717&lang=en-AU&ot_source=Restaurant%20website" target="_blank" rel="noopener noreferrer" className="self-start px-6 py-3 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-gold-light">Book a Table</a>
          </div>
        </div>
      </section>

      {/* Recognition & Awards */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-28">
          <ScrollReveal>
            
            <h2 className="font-serif text-4xl md:text-7xl font-light mb-6 text-center">Recognition &amp; awards</h2>
            <div className="gold-divider max-w-20 mx-auto mb-12 md:mb-16" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto items-center justify-center">
            {[
              {
                title: "Best Quality Steakhouse 2025 & 2026",
                subtitle: "City of Casey, VIC",
                description: "Recognised for premium cuts, expert preparation and exceptional service.",
                image: awardSteakhouse,
                secondaryImage: awardSteakhouse2026,
                span: "md:col-span-2",
              },
              {
                title: "Best Romantic Restaurant 2025",
                subtitle: "Restaurant Guru",
                description: "Awarded for our elegant atmosphere and unforgettable dining experiences.",
                image: awardRomantic,
                span: "md:col-span-1",
              },
              {
                title: "Top 10 Restaurants in Berwick",
                subtitle: "Restaurant Guru 2025 & 2026",
                description: "Celebrated as one of Berwick's leading dining destinations and recommended on Restaurant Guru.",
                image: awardTop10,
                secondaryImage: awardRestaurantGuru2026.url,
                span: "md:col-span-2",
              },
            ].map((award: any, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className={award.span}>
                <div className="group text-center transition-all duration-500">
                  {award.secondaryImage ? (
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="w-full aspect-square overflow-hidden rounded-sm">
                        <img src={award.image} alt={award.title} loading="lazy" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <div className="w-full aspect-square overflow-hidden rounded-sm">
                        <img src={award.secondaryImage} alt={`${award.title} 2026`} loading="lazy" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                      </div>
                    </div>
                  ) : (

                    <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-sm">
                      <img src={award.image} alt={award.title} loading="lazy" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  )}
                  <h3 className="font-serif text-xl md:text-2xl font-light text-foreground mb-1">{award.title}</h3>
                  <p className="text-primary text-xs uppercase tracking-[0.2em] mb-4">{award.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{award.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Banner */}
      <ScrollReveal>
        <section className="bg-secondary py-6 overflow-hidden">
          <div className="flex items-center justify-center gap-8 md:gap-20 px-6 flex-wrap">
            {["Best Quality Steakhouse 2025 & 2026", "Best Romantic Restaurant 2025", "Top 10 Restaurants in Berwick"].map((award, i) => (
              <span key={i} className="text-primary text-xs md:text-sm uppercase tracking-[0.25em] whitespace-nowrap">{award}</span>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <ScrollReveal className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-3 md:mb-4">Our Story</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.05] mb-4 md:mb-6">15+ years of Melbourne hospitality</h2>
          <div className="gold-divider max-w-20 mb-4 md:mb-6" />
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6 md:mb-8">With over fifteen years of experience in Melbourne's bustling and evolving hospitality scene, Times Berwick brings world-class dining to the heart of Berwick. Our emphasis on premium, local and seasonal ingredients, handmade dishes, and amazing service is what sets us apart in Melbourne's diverse dining scene.</p>
          <a href="https://www.opentable.com.au/r/times-berwick-reservations-berwick?restref=266717&lang=en-AU&ot_source=Restaurant%20website" target="_blank" rel="noopener noreferrer" className="inline-flex px-6 py-3 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-gold-light">Book Now</a>
        </ScrollReveal>
      </section>

      {/* About collage */}
      <section className="max-w-7xl mx-auto px-6 pb-16 lg:pb-24">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={aboutDish} alt="Signature dish at Times Berwick" loading="lazy" className="w-full h-full object-cover object-center" />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img src={grillFlames} alt="Skewers cooking over open flame at Times Berwick" loading="lazy" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-primary/60" />
      </div>

      {/* Featured Dishes */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center justify-between mb-14 md:mb-20">
                <div className="hidden md:block shrink-0 mr-12">
                  <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden">
                    <img src={chefRamesh} alt="Chef Ramesh" loading="lazy" className="w-full h-full object-cover object-[center_20%] scale-[2.2]" />
                  </div>
                </div>
                <div>
                  <p className="text-primary uppercase tracking-[0.3em] text-xs mb-3 md:mb-4">Chef Ramesh's Picks</p>
                  <h2 className="font-serif text-4xl md:text-7xl font-light">Premium ingredients, complete in our Berwick kitchen</h2>
                </div>
              </div>
            </ScrollReveal>

            {/* Dish 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-16 md:mb-24 items-center">
              <ScrollReveal direction="left" className="lg:col-span-4 flex flex-col justify-center">
                <h3 className="font-serif text-3xl md:text-4xl mb-3">Award-winning cuts from Australia's Riverine region</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">At Times Berwick, we use only the best produce. Our Angus is sourced from New South Wales' <a href="https://riverinaangus.com.au/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-gold-light transition-colors">Riverina Black Angus</a>, 150 days grain fed for superior tenderness, rich and consistent flavour, higher marbling, and greater availability. Once it arrives in our kitchen, we cook it over an open flame to your liking. Chef recommends medium-rare to make the most of the flavour.</p>
                <a href="https://www.opentable.com.au/r/times-berwick-reservations-berwick?restref=266717&lang=en-AU&ot_source=Restaurant%20website" target="_blank" rel="noopener noreferrer" className="self-start inline-flex px-6 py-3 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-gold-light">Book Now</a>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.15} className="lg:col-span-8 aspect-[16/10] overflow-hidden">
                <img src={steakImg} alt="Award-winning cuts from Times Berwick, Black Angus Riverine" loading="lazy" className="w-full h-full object-cover object-[38%_50%] transition-transform duration-700 hover:scale-105" />
              </ScrollReveal>
            </div>

            {/* Dish 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-16 md:mb-24 items-center">
              <ScrollReveal direction="right" className="lg:col-span-4 lg:order-2 flex flex-col justify-center">
                <h3 className="font-serif text-3xl md:text-4xl mb-3">Fresh pasta, made from scratch, in-house</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">All of our pasta is made in-house by our chefs and complete with housemade sauces and premium toppings from local producers before it lands to your table.</p>
                <a href="https://www.opentable.com.au/r/times-berwick-reservations-berwick?restref=266717&lang=en-AU&ot_source=Restaurant%20website" target="_blank" rel="noopener noreferrer" className="self-start inline-flex px-6 py-3 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-gold-light">Book Now</a>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.15} className="lg:col-span-8 lg:order-1 aspect-[16/10] overflow-hidden">
                <img src={pastaImg} alt="Fresh handmade pasta at Times Berwick" loading="lazy" className="w-full h-full object-cover object-[center_70%] scale-125 transition-transform duration-700 hover:scale-[1.35]" />
              </ScrollReveal>
            </div>

            {/* Dish 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
              <ScrollReveal direction="left" className="lg:col-span-4 flex flex-col justify-center">
                <h3 className="font-serif text-3xl md:text-4xl mb-3">Locally sourced, fresh Victorian seafood</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">At Times Berwick, we know that fresh is best when it comes to seafood. All of our seafood is fresh from the market. From oysters and prawns to scallops, we keep it seasonal and source daily from local, Melbourne suppliers.</p>
                <a href="https://www.opentable.com.au/r/times-berwick-reservations-berwick?restref=266717&lang=en-AU&ot_source=Restaurant%20website" target="_blank" rel="noopener noreferrer" className="self-start inline-flex px-6 py-3 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-gold-light">Book Now</a>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.15} className="lg:col-span-8 aspect-[16/10] overflow-hidden">
                <img src={seafoodImg} alt="Locally sourced Victorian seafood at Times Berwick" loading="lazy" className="w-full h-full object-cover object-[center_75%] transition-transform duration-700 hover:scale-105" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] lg:min-h-[70vh]">
        <ScrollReveal direction="left" className="relative overflow-hidden min-h-[300px] md:min-h-[400px]">
          <img src={dateNightFeatureImg} alt="Times Berwick award-winning date night" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center scale-125" />
        </ScrollReveal>
        <ScrollReveal direction="right" className="flex items-center px-6 lg:px-12 py-14 lg:py-0 bg-secondary">
          <div className="max-w-md">
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4 md:mb-6">Every Thursday from 7 May</p>
            <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.05] mb-4 md:mb-6">Date night in Berwick</h2>
            <div className="gold-divider max-w-20 mb-6 md:mb-8" />
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-8 md:mb-10">Fresh from being named <span className="font-semibold text-foreground">Best Romantic Restaurant for 2025 by Restaurant Guru</span>, our Thursday Date Night is back with the updated menu, approved new look, and a beautifully relaxed setting made for two.</p>
            <Link to="/date-night" className="self-start inline-flex px-6 py-3 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-gold-light">Explore Date Night</Link>
          </div>
        </ScrollReveal>
      </section>


      {/* Gift Cards */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[50vh] lg:min-h-[60vh]">
        <ScrollReveal direction="left" className="flex items-center px-6 lg:px-12 py-14 lg:py-0 bg-secondary">
          <div className="max-w-md">
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4 md:mb-6">Give the Gift of Good Food</p>
            <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.05] mb-4 md:mb-6">Gift cards, delivered straight to their inbox</h2>
            <p className="text-muted-foreground mb-8 md:mb-10 leading-relaxed text-sm md:text-base">Last minute gift shopping? We've got you. Our vouchers range from $50 to $200 and make the perfect gift for birthdays, engagements, anniversaries, staff bonuses and other special occasions.</p>
            <a href="https://giftcards.oolio.io/timesberwick" target="_blank" rel="noopener noreferrer" className="self-start inline-flex px-6 py-3 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-gold-light">Buy a Gift Card</a>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right" className="relative overflow-hidden min-h-[300px] md:min-h-[400px]">
          <img src={giftCardBg} alt="Gift cards at Times Berwick" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-[center_30%]" />
        </ScrollReveal>
      </section>

      {/* Google Reviews */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <img src={scallopsReviewsBg} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/80" />
        <ScrollReveal className="relative z-10 text-center mb-16 max-w-7xl mx-auto px-6">
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-6">What Our Guests Say</p>
          <h2 className="font-serif text-5xl md:text-6xl font-light">Google Reviews</h2>
        </ScrollReveal>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Franklin H.", text: <>I came here with my partner for our anniversary, <strong className="text-foreground">we got the chef's table set menu and it was spectacular.</strong> Our waitress was great, super friendly and attentive. And the food, oh my god the food was incredible.</>, stars: 5 },
            { name: "Chad M.", text: <>Times in Berwick is <strong className="text-foreground">truly outstanding.</strong> The menu caters beautifully to all tastes – from <strong className="text-foreground">perfectly cooked steaks and melt-in-your-mouth wagyu beef to authentic Indonesian nasi goreng.</strong> Every dish we tried was full of flavour.</>, stars: 5 },
            { name: "Jenny W.", text: <>I <strong className="text-foreground">love everything here. The vibe, the food, and the service.</strong> We just wanted to have some drinks and didn't have a booking, but the staff somehow got us a table. <strong className="text-foreground">Super friendly staff.</strong></>, stars: 5 },
            { name: "Mayo R.", text: <>We had the <strong className="text-foreground">chef's menu for dinner and absolutely loved every bit of it!</strong> The food was perfectly balanced in flavour, beautifully presented, and served at just the right pace.</>, stars: 5 },
            { name: "Sarah Jayne H.", text: <><strong className="text-foreground">Outstanding service, atmosphere & dining quality.</strong> Very friendly staff & the food was incredible. Thankyou for a lovely brunch experience.</>, stars: 5 },
            { name: "Rebecca N.", text: <>We had a <strong className="text-foreground">mid week dinner date and it was one of the best we've had.</strong> All the dishes sounded very appealing that we struggled to choose and what we ordered was absolutely delicious.</>, stars: 5 },
          ].map((review) => (
            <ScrollReveal key={review.name} delay={0.05}>
              <div className="border border-border p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic flex-1 mb-6">"{review.text}"</p>
                <p className="text-foreground font-medium text-sm">- {review.name}</p>
                <p className="text-muted-foreground text-xs mt-1">Google Review</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} />

      {/* Reservation */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <img src={visitUsBg} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="hero-overlay absolute inset-0" />
        <ScrollReveal className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-7xl font-light leading-[1] mb-6 md:mb-8">Visit Us</h2>
          <p className="text-muted-foreground mb-8 md:mb-10 max-w-lg text-base md:text-lg">Come see us at Times Berwick for an experience that stands out. See you soon.</p>
          <a href="https://www.opentable.com.au/r/times-berwick-reservations-berwick?restref=266717&lang=en-AU&ot_source=Restaurant%20website" target="_blank" rel="noopener noreferrer" className="self-start inline-flex px-6 py-3 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:bg-gold-light">Book Your Table</a>
        </ScrollReveal>
      </section>
    </Layout>
  );
};

export default Index;
