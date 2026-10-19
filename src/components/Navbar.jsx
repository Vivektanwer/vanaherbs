import { useState } from "react";
import { Link, NavLink } from "react-router";
import { nav } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    "px-3 py-2 text-sm font-medium transition hover:text-leaf " + (isActive ? "text-leaf" : "text-ink");

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Main">
        <Link to="/" className="flex items-center gap-2 text-forest">
          <i className="bi bi-flower2 text-2xl text-leaf"></i>
          <span className="font-heading text-2xl font-bold">VanaHerbs</span>
        </Link>
        <button className="text-3xl md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <i className={open ? "bi bi-x" : "bi bi-list"}></i>
        </button>
        <div className={(open ? "flex" : "hidden") + " absolute left-0 top-full w-full flex-col bg-white p-4 shadow-md md:static md:flex md:w-auto md:flex-row md:items-center md:bg-transparent md:p-0 md:shadow-none"}>
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={linkClass} onClick={() => setOpen(false)}>{n.label}</NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
