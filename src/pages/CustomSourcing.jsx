import { PageHero, Section, Button, ImageBox } from "../components/ui";

const factors = ["Availability", "Seasonality", "Quantity", "Buyer specifications"];

export default function CustomSourcing() {
  return (
    <>
      <PageHero small="Custom Sourcing" title="Looking for a specific Himalayan botanical?" text="We also work on custom sourcing requests based on availability, seasonality, quantity and buyer specifications." 
      image="/images/custom-hero.webp"
       />
      <Section>
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div data-reveal className="w-full md:w-1/2"><ImageBox alt="Himalayan botanicals" className="h-80"
          src="/images/og-image.webp"
          /></div>
          <div data-reveal className="md:w-1/2">
            <h2 className="text-4xl font-bold text-forest">How we handle your request</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {factors.map((f) => <li key={f}><i className="bi bi-leaf-fill me-2 text-leaf"></i>{f}</li>)}
            </ul>
            <p className="mt-5">Share the botanical, form and volume you need. We will check what the season and our collector network can deliver, then reply with a plan.</p>
            <div className="mt-6"><Button to="/contact">Send a Custom Request</Button></div>
          </div>
        </div>
      </Section>
    </>
  );
}
