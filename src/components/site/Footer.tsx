import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import { clinic, mailHref, telHref, waHref } from "@/config/clinic";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/treatments", label: "Treatments" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="max-w-sm">
          <p className="font-display text-2xl">{clinic.name}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{clinic.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a
              href={clinic.social.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-input p-2 text-muted-foreground transition-colors hover:border-bluegrey-deep hover:text-foreground"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={clinic.social.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-input p-2 text-muted-foreground transition-colors hover:border-bluegrey-deep hover:text-foreground"
            >
              <Facebook className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="eyebrow">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={telHref} className="transition-colors hover:text-foreground">
                {clinic.phone}
              </a>
            </li>
            <li>
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                WhatsApp {clinic.whatsapp}
              </a>
            </li>
            <li>
              <a href={mailHref} className="transition-colors hover:text-foreground">
                {clinic.email}
              </a>
            </li>
            <li className="leading-relaxed">{clinic.address}</li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Working Hours</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>{clinic.hours.weekdays}</li>
            <li>{clinic.hours.sunday}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-6">
          <p className="text-xs text-muted-foreground">
            © 2026 {clinic.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
