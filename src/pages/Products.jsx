import { PageHero, Section, ProductCard, Button } from "../components/ui";
import { products } from "../data";

export default function Products() {
  return (
    <>
      <PageHero small="Our Botanicals" title="Core Botanical Raw Materials" text="Ethically sourced from Uttarakhand. *Powder availability on request." 
        image="/images/products-hero.webp"
      />
      <Section>
        <div className="flex flex-wrap gap-6">{products.map((p) => <ProductCard key={p.name} p={p} />)}</div>
        <div data-reveal className="mt-14 text-center">
          <p className="mb-4 text-lg">Don't see what you need?</p>
          <Button to="/custom-sourcing">Ask for Custom Sourcing</Button>
        </div>
      </Section>
    </>
  );
}
