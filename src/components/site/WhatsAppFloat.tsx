import { MessageCircle } from "lucide-react";
import { waHref } from "@/config/clinic";

export function WhatsAppFloat() {
  return (
    <a
      href={waHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-secondary"
    >
      <MessageCircle className="size-4 text-sage-deep" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
