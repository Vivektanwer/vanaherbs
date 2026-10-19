import { PageHero, Section, Button } from "../components/ui";
import { steps } from "../data";

export default function Process() {
  return (
    <>
      <PageHero small="Supply Process" title="Seven steps from forest to buyer" 
        image="/images/process-hero.webp"
      />
      <Section>
        <ol className="mx-auto flex max-w-3xl flex-col gap-6">
          {steps.map((s, i) => (
            <li key={s.title} data-reveal className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-md">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest font-heading text-2xl text-white">{i + 1}</span>
              <div>
                <h2 className="text-2xl font-bold text-forest">{s.title}</h2>
                <p className="mt-1">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12 text-center"><Button to="/contact">Start an Order</Button></div>
      </Section>
    </>
  );
}
