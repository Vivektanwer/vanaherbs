import { PageHero, Section, Heading, ImageBox } from "../components/ui";

const problems = [
  "Young people leave the mountains because local jobs are scarce.",
  "Villages empty out and traditional knowledge is lost.",
  "Collectors and farmers often lack a fair, reliable market.",
  "Rich Himalayan botanicals remain under-used by Indian industry.",
];

export default function About() {
  return (
    <>
      <PageHero small="Our Story" title="Rooted in the mountains" 
      image="/images/about-hero.webp"
      />
      <Section>
        <div className="flex flex-col gap-10 md:flex-row">
          <div data-reveal className="flex flex-col gap-4 md:w-3/5">
            <p>Our founder is from Delhi, with family roots in Uttarakhand. His brother and co-founder was born and raised in the mountains of Uttarakhand.</p>
            <p>Growing up between the city and the hills, they saw the same story again and again: families leaving the mountains in search of work.</p>
            <blockquote className="border-l-4 border-sage pl-5 font-heading text-3xl text-forest">“Why should people be forced to leave their homes, families, and communities simply to earn a living?”</blockquote>
            <p>VanaHerbs is our answer: build a trusted market for Himalayan botanicals so that people can earn well where they belong.</p>
          </div>
          <div data-reveal className="md:w-2/5"><ImageBox 
          src="/images/founder.webp" 
          alt="Founders" icon="bi-people" className="h-96" /></div>
        </div>
      </Section>

      <Section className="bg-cream">
        <Heading small="The Problem" title="The Problem We Are Solving" />
        <ul className="mx-auto flex max-w-2xl flex-col gap-3">
          {problems.map((p) => (
            <li key={p} data-reveal className="flex gap-3 rounded-xl bg-white p-4 shadow-sm">
              <i className="bi bi-check-circle-fill text-leaf"></i><span>{p}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="flex flex-col gap-6 md:flex-row">
          <div data-reveal className="rounded-2xl bg-forest p-8 text-white md:w-1/2">
            <i className="bi bi-bullseye text-3xl text-sage"></i>
            <h2 className="mt-2 text-3xl font-bold">Our Mission</h2>
            <p className="mt-3 text-mist">To connect Himalayan producers directly with Indian industry, creating fair, dependable livelihoods in the mountains through ethical botanical sourcing.</p>
          </div>
          <div data-reveal className="rounded-2xl bg-mist p-8 md:w-1/2">
            <i className="bi bi-eye text-3xl text-leaf"></i>
            <h2 className="mt-2 text-3xl font-bold text-forest">Our Vision</h2>
            <p className="mt-3">Our 20-year goal: a thriving Himalayan botanical economy where families can build their future at home, without having to migrate to earn a living. (Edit with your exact 20-year goal.)</p>
          </div>
        </div>
      </Section>
    </>
  );
}
