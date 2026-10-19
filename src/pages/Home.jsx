import { Section, Heading, Button, ImageBox, ProductCard, VideoBox } from "../components/ui";
import { products, steps, SECTION_VIDEO } from "../data";
import Hero from "../components/Hero";

const why = [
  { icon: "bi-tree", title: "Direct from the forest", text: "Short supply chain, traceable origin." },
  { icon: "bi-people", title: "Community first", text: "Fair income for mountain families." },
  { icon: "bi-patch-check", title: "Quality checked", text: "Sorted, dried and assessed to spec." },
  { icon: "bi-truck", title: "Reliable B2B supply", text: "Consistent volumes across India." },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Section>
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div data-reveal className="w-full md:w-1/2"><ImageBox alt="Himalayan forest" className="h-80" 
          src="/images/home-about.webp"  
           /></div>
          <div data-reveal className="md:w-1/2">
            <p className="text-sm font-bold uppercase tracking-widest text-leaf">About Us</p>
            <h2 className="mt-2 text-4xl font-bold text-forest">Everything from the mountain</h2>
            <p className="mt-4">VanaHerbs works with local farmers, collectors and rural communities in Uttarakhand, building reliable procurement, processing and quality-control systems for businesses in Ayurveda, herbal, cosmetics, wellness and nutraceuticals.</p>
            <div className="mt-6"><Button to="/about">Read Our Story</Button></div>
          </div>
        </div>
      </Section>

      <Section className="bg-cream">
        <Heading small="Featured" title="Our Botanicals" />
        <div className="flex flex-wrap gap-6">{products.slice(0, 6).map((p) => <ProductCard key={p.name} p={p} />)}</div>
        <div className="mt-10 text-center"><Button to="/products">View All Products</Button></div>
      </Section>

      <Section>
        <Heading small="Why VanaHerbs" title="Sourcing you can trust" />
        <div className="flex flex-wrap gap-6">
          {why.map((w) => (
            <div key={w.title} data-reveal className="w-full rounded-2xl bg-cream p-6 text-center shadow-sm sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
              <i className={"bi " + w.icon + " text-4xl text-leaf"}></i>
              <h3 className="mt-3 text-2xl font-bold text-forest">{w.title}</h3>
              <p className="mt-1 text-sm">{w.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-forest text-white">
        <Heading small="Supply Process" title="From forest to buyer" />
        <ol className="flex flex-wrap justify-center gap-4">
          {steps.map((s, i) => (
            <li key={s.title} data-reveal className="w-full rounded-xl bg-leaf/60 p-5 sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]">
              <span className="font-heading text-4xl text-sage">{i + 1}</span>
              <p className="text-lg font-bold">{s.title}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 text-center"><Button to="/process" light>See the full process</Button></div>
      </Section>

      <Section>
        <Heading small="Video" title="See where it grows" />
        <div data-reveal><VideoBox src={SECTION_VIDEO} /></div>
      </Section>

      <Section className="bg-cream">
        <Heading small="Testimonials" title="What buyers say" />
        <div className="flex flex-wrap gap-6">
          {[1, 2, 3].map((n) => (
            <blockquote key={n} data-reveal className="w-full rounded-2xl bg-white p-6 shadow-md md:w-[calc(33.333%-1rem)]">
              <i className="bi bi-quote text-3xl text-sage"></i>
              <p>Testimonial placeholder. Add a real buyer review here.</p>
              <footer className="mt-3 text-sm font-bold text-forest">Customer Name, Company</footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <section className="bg-leaf px-5 py-20 text-center text-white">
        <h2 data-reveal className="text-4xl font-bold md:text-5xl">Ready to source from the Himalayas?</h2>
        <p data-reveal className="mx-auto mt-4 max-w-xl text-mist">Tell us what you need and we will come back with availability and pricing.</p>
        <div className="mt-8"><Button to="/contact" light>Request a Quote</Button></div>
      </section>
    </>
  );
}
