import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Book Now", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export function Footer() {
  return (
    <footer className="relative bg-secondary text-secondary-foreground pt-16 pb-6 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                <Sparkles className="h-6 w-6 text-primary" />
              </motion.div>
              <span className="font-heading text-lg font-bold">
                Trust<span className="text-primary">Clean</span> Lanka
              </span>
            </div>
            <p className="text-sm text-secondary-foreground/60 leading-relaxed">
              Sri Lanka's trusted professional cleaning service. Making spaces spotless since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/60">
              <li>+94 77 123 4567</li>
              <li>hello@trustcleanlanka.lk</li>
              <li>42 Galle Road, Colombo 03</li>
              <li>Open 7 days: 6AM – 8PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 text-center">
          <p className="text-sm text-secondary-foreground/40">
            © {new Date().getFullYear()} TrustClean Lanka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
