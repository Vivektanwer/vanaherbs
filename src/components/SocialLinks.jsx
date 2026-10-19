import { social } from "../data";

export default function SocialLinks() {
  const links = social.filter((s) => s.url);
  return (
    <ul className="flex gap-3">
      {links.map((s) => (
        <li key={s.name}>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf text-lg text-white transition hover:-translate-y-1 hover:bg-sage hover:text-forest"
          >
            <i className={"bi " + s.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}
