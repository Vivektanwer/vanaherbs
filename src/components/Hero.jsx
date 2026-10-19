import { useEffect, useState } from "react";
import { Button } from "./ui";
import { HERO_VIDEO, HERO_POSTER } from "../data";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  // Load the video only in the browser, after the page is ready (keeps the page fast).
  // Skip it if the visitor prefers reduced motion or has Data Saver on.
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = navigator.connection && navigator.connection.saveData;
    if (HERO_VIDEO && !reduceMotion && !saveData) setShowVideo(true);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-forest bg-cover bg-center px-5 py-28 text-center text-white md:py-44"
      style={HERO_POSTER ? { backgroundImage: `url(${HERO_POSTER})` } : undefined}
    >
      {showVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          poster={HERO_POSTER || undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      )}

      {/* Green gradient on top of the video so the text is always easy to read */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-forest/90 via-forest/70 to-leaf/80"></div> */}

      <div data-reveal className="relative mx-auto max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-widest text-sage">Himalayan Botanical Sourcing</p>
        <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">Where the Himalayas meet the market</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-mist">We source and supply premium wild herbs — Reetha, Himalayan tea leaves, and rare Uttarakhandi botanicals — direct from forest to buyer.</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button to="/products" light>Explore Products</Button>
          <Button to="/contact">Request a Quote</Button>
        </div>
      </div>
    </section>
  );
}
