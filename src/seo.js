// ONE place to edit every page's SEO. Change the text below any time.
export const SITE_URL = "https://vanaherbs-v2.vercel.app";

export const seo = {
  "/": {
    title: "VanaHerbs | Himalayan Botanical Sourcing from Uttarakhand",
    description: "Premium wild herbs like Reetha, Himalayan tea leaves and rare Uttarakhandi botanicals, sourced direct from forest to buyer.",
    robots: "index, follow",
  },
  "/about": {
    title: "Our Story | VanaHerbs",
    description: "Why VanaHerbs exists: to create livelihoods in the Himalayas so families no longer have to migrate to earn a living.",
    robots: "index, follow",
  },
  "/products": {
    title: "Botanical Raw Materials | VanaHerbs Products",
    description: "Reetha, Giloy, Kutki, Brahmi, Tulsi, Amla and more. Ethically sourced Himalayan botanicals in whole, cut and powder forms.",
    robots: "index, follow",
  },
  "/custom-sourcing": {
    title: "Custom Himalayan Sourcing | VanaHerbs",
    description: "Need a specific Himalayan botanical? We source based on availability, seasonality, quantity and your specifications.",
    robots: "index, follow",
  },
  "/process": {
    title: "Our 7-Step Supply Process | VanaHerbs",
    description: "From farmer and collector to B2B delivery: see how VanaHerbs procures, cleans, dries, tests and packs botanicals.",
    robots: "index, follow",
  },
  "/contact": {
    title: "Contact & Request a Quote | VanaHerbs",
    description: "Request a quote or ask about Himalayan botanical raw materials. Email info.vanaherbs@gmail.com or call +91 9654385462.",
    robots: "index, follow",
  },
  "/thank-you": {
    title: "Thank You | VanaHerbs",
    description: "Thanks for contacting VanaHerbs. We will get back to you shortly.",
    robots: "noindex, nofollow",
  },
};

const notFound = { title: "Page not found | VanaHerbs", description: "This page does not exist.", robots: "noindex, nofollow" };

// Builds the <head> tags as a string (used on the server and the client).
export function buildHead(path) {
  const clean = path.split("?")[0].replace(/(.)\/$/, "$1");
  const page = seo[clean] || notFound;
  const url = SITE_URL + (clean === "/" ? "" : clean);
  const image = SITE_URL + "/og-image.webp";
  return `
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <meta name="robots" content="${page.robots}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="VanaHerbs" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="theme-color" content="#1b4332" />`;
}
