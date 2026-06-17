import { Link } from "@tanstack/react-router";
import { nav, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 bg-navy text-stone">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="font-display text-2xl tracking-tight">Northstone</Link>
            <p className="mt-4 max-w-sm text-pretty text-stone/70">
              {site.tagline}
            </p>
            <p className="mt-6 text-sm text-stone/60">{site.region}</p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.18em] text-gold-soft">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-stone/80 transition hover:text-stone">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.18em] text-gold-soft">Get in touch</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href={`mailto:${site.email}`} className="text-stone/80 hover:text-stone">{site.email}</a></li>
              <li className="text-stone/60">{site.phonePlaceholder}</li>
              <li><Link to="/contact" className="text-stone/80 hover:text-stone">Request a consultation →</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-stone/10 pt-8 text-xs text-stone/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.fullName}. Company No. {site.companyNumber}. {site.domain}.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-stone">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-stone">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
