import { useState } from "react";
import { useNavigate } from "react-router";
import { PageHero, Section } from "../components/ui";
import SocialLinks from "../components/SocialLinks";
import { products, FORM_URL } from "../data";

const field = "w-full rounded-lg border border-sage bg-white px-4 py-3 outline-none focus:border-leaf focus:ring-2 focus:ring-mist";

export default function Contact() {
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError("");
    const data = Object.fromEntries(new FormData(e.target));
    try {
      // text/plain + no-cors avoids browser CORS errors with Google Apps Script.
      await fetch(FORM_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain" }, body: JSON.stringify(data) });
      navigate("/thank-you");
    } catch {
      setError("Something went wrong. Please email us directly.");
      setSending(false);
    }
  }

  return (
    <>
      <PageHero small="Contact" title="Request a quote" text="Tell us what you need. We usually reply within one business day." />
      <Section>
        <div className="flex flex-col gap-10 md:flex-row">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:w-3/5">
            <label>Name<input name="name" required className={field} /></label>
            <label>Email<input name="email" type="email" required className={field} /></label>
            <label>Phone<input name="phone" type="tel" className={field} /></label>
            <label>Product Interest
              <select name="product" className={field}>
                <option>Custom / Other</option>
                {products.map((p) => <option key={p.name}>{p.name}</option>)}
              </select>
            </label>
            <label>Message<textarea name="message" rows="5" required className={field}></textarea></label>
            {error && <p className="text-red-700">{error}</p>}
            <button disabled={sending} className="rounded-full bg-leaf px-7 py-3 font-medium text-white shadow transition hover:bg-forest disabled:opacity-60">
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
          <aside className="rounded-2xl bg-forest p-8 text-mist md:w-2/5">
            <h2 className="text-3xl text-white">VanaHerbs</h2>
            <ul className="mt-5 flex flex-col gap-4">
              <li><i className="bi bi-envelope me-2 text-sage"></i><a href="mailto:info.vanaherbs@gmail.com">info.vanaherbs@gmail.com</a></li>
              <li><i className="bi bi-telephone me-2 text-sage"></i><a href="tel:+919654385462">+91 9654385462</a></li>
              <li><i className="bi bi-geo-alt me-2 text-sage"></i>New Delhi / Uttarakhand</li>
            </ul>
            <p className="mb-3 mt-8 text-sm font-bold text-white">Follow us</p>
            <SocialLinks />
          </aside>
        </div>
      </Section>
    </>
  );
}
