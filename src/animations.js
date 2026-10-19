
import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    let lenis;
    let gsap;
    let ticker;
    let cancelled = false;

    async function init() {
      const [gsapModule, scrollModule, lenisModule] =
        await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
          import("lenis"),
        ]);

      if (cancelled) return;

      gsap = gsapModule.gsap || gsapModule.default;
      const ScrollTrigger =
        scrollModule.ScrollTrigger || scrollModule.default;
      const Lenis = lenisModule.default;

      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis();
      lenis.on("scroll", ScrollTrigger.update);

      ticker = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);
    }

    init().catch(console.error);

    return () => {
      cancelled = true;
      if (gsap && ticker) gsap.ticker.remove(ticker);
      if (lenis) lenis.destroy();
    };
  }, []);
}

export function useRevealAnimations(pathname) {
  useEffect(() => {
    let ctx;
    let cancelled = false;

    async function init() {
      const [gsapModule, scrollModule] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled) return;

      const gsap = gsapModule.gsap || gsapModule.default;
      const ScrollTrigger =
        scrollModule.ScrollTrigger || scrollModule.default;

      gsap.registerPlugin(ScrollTrigger);
      window.scrollTo(0, 0);

      ctx = gsap.context(() => {
        gsap.utils.toArray("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          });
        });
      });
    }

    init().catch(console.error);

    return () => {
      cancelled = true;
      if (ctx) ctx.revert();
    };
  }, [pathname]);
}
