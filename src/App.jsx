import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useSmoothScroll, useRevealAnimations } from "./animations";
import { buildHead } from "./seo";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import CustomSourcing from "./pages/CustomSourcing";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";

export default function App() {
  const { pathname } = useLocation();
  useSmoothScroll();
  useRevealAnimations(pathname);

  // Update <head> when moving between pages (the server already sent the right one on first load).
  useEffect(() => {
    const doc = new DOMParser().parseFromString("<head>" + buildHead(pathname) + "</head>", "text/html");
    document.title = doc.title;
    doc.querySelectorAll("meta[name], meta[property], link[rel=canonical]").forEach((tag) => {
      const key = tag.getAttribute("name") || tag.getAttribute("property");
      const old = key
        ? document.head.querySelector(`meta[name="${key}"], meta[property="${key}"]`)
        : document.head.querySelector("link[rel=canonical]");
      if (old) old.replaceWith(tag.cloneNode());
      else document.head.appendChild(tag.cloneNode());
    });
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/custom-sourcing" element={<CustomSourcing />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<div className="py-40 text-center"><h1 className="text-5xl">Page not found</h1></div>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
