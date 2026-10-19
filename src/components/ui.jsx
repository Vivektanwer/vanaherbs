import { Link } from "react-router";

// Small reusable building blocks used by every page.

export function Section({ children, className = "" }) {
  return <section className={"px-5 py-20 " + className}><div className="mx-auto max-w-6xl">{children}</div></section>;
}

export function Heading({ small, title }) {
  return (
    <div data-reveal className="mb-12 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-leaf">{small}</p>
      <h2 className="mt-2 text-4xl font-bold md:text-5xl">{title}</h2>
    </div>
  );
}

// Pass "image" (e.g. "/images/about-hero.jpg") to get a photo background with a green overlay.
// Without "image" it stays a plain forest-green banner.
export function PageHero({ small, title, text, image }) {
  return (
    <section
      className="relative overflow-hidden bg-forest bg-cover bg-center px-5 py-24 text-center text-white md:py-32"
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      {image && <div className="absolute inset-0 bg-gradient-to-b from-forest/90 via-forest/75 to-forest/90"></div>}
      <div className="relative">
        <p className="text-sm font-bold uppercase tracking-widest text-sage">{small}</p>
        <h1 className="mx-auto mt-3 max-w-3xl text-5xl font-bold md:text-6xl">{title}</h1>
        {text && <p className="mx-auto mt-5 max-w-2xl text-mist">{text}</p>}
      </div>
    </section>
  );
}

export function Button({ to, children, light = false }) {
  const style = light ? "bg-white text-forest hover:bg-mist" : "bg-leaf text-white hover:bg-forest";
  return <Link to={to} className={"inline-block rounded-full px-7 py-3 font-medium shadow transition hover:-translate-y-0.5 hover:shadow-lg " + style}>{children}</Link>;
}

// Image placeholder. Pass a "src" to show a real lazy-loaded image.
export function ImageBox({ src, alt = "", icon = "bi-image", className = "h-52" }) {
  if (src) return <img src={src} alt={alt} loading="lazy" className={"w-full rounded-xl object-cover " + className} />;
  return (
    <div className={"flex w-full items-center justify-center rounded-xl bg-mist text-4xl text-sage " + className} role="img" aria-label={alt || "Image placeholder"}>
      <i className={"bi " + icon}></i>
    </div>
  );
}

// Video box. Same size as the placeholder: full width, 320px high on desktop.
export function VideoBox({ src }) {
  const box = "h-64 w-full rounded-xl md:h-120";

  if (src) {
    return (
      <video
        src={src}
        className={box + " object-cover"}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  return (
    <div className={box + " flex items-center justify-center bg-mist text-5xl text-sage"}>
      <i className="bi bi-play-circle"></i>
    </div>
  );
}

// Cards sit in a flex row that wraps (no CSS grid).
export const cardWidth = "w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]";

export function ProductCard({ p }) {
  return (
    <article data-reveal className={cardWidth + " rounded-2xl bg-white p-4 shadow-md transition hover:-translate-y-1 hover:shadow-xl"}>
      <ImageBox src={p.image} alt={p.name} icon="bi-flower1" />
      <h3 className="mt-4 text-2xl font-bold text-forest">{p.name}</h3>
      <p className="text-sm italic text-leaf">{p.botanical}</p>
      <p className="mt-2 text-sm"><span className="font-bold">Form:</span> {p.form}</p>
    </article>
  );
}
