import { Link } from "react-router";
import { nav } from "../data";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-forest text-mist">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:flex-row">
        <div className="md:w-1/2">
          <p className="font-heading text-3xl font-bold text-white">VanaHerbs</p>
          <p className="mt-1 text-sage">Himalayan Botanical Sourcing</p>
          <p className="mt-4 max-w-sm text-sm">Ethically sourced botanical raw materials from Uttarakhand for Ayurveda, herbal, cosmetics, wellness and nutraceutical industries.</p>
          <div className="mt-5"><SocialLinks /></div>
        </div>
        <div className="md:w-1/4">
          <h3 className="mb-3 text-xl text-white">Explore</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {nav.map((n) => <li key={n.to}><Link className="hover:text-white" to={n.to}>{n.label}</Link></li>)}
          </ul>
        </div>
        <div className="md:w-1/4">
          <h3 className="mb-3 text-xl text-white">Contact</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><i className="bi bi-envelope me-2"></i>info.vanaherbs@gmail.com</li>
            <li><i className="bi bi-telephone me-2"></i>+91 9654385462</li>
            <li><i className="bi bi-geo-alt me-2"></i>New Delhi / Uttarakhand</li>
          </ul>
        </div>
      </div>
      <p className="border-t border-leaf py-4 text-center text-xs">© {new Date().getFullYear()} VanaHerbs. All rights reserved.</p>
    </footer>
  );
}
