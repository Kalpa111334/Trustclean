import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-all focus:ring-2 focus:ring-primary/40";

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-14">
        <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">Contact Us</span>
        <h2 className="font-heading text-3xl font-bold text-secondary sm:text-4xl">Get in Touch</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          {[
            { icon: Phone, label: "+94 77 123 4567", href: "tel:+94771234567" },
            { icon: Mail, label: "hello@trustcleanlanka.lk", href: "mailto:hello@trustcleanlanka.lk" },
            { icon: MapPin, label: "42 Galle Road, Colombo 03, Sri Lanka", href: "#" },
          ].map((c) => (
            <a key={c.label} href={c.href} className="flex items-center gap-4 rounded-xl bg-muted/60 px-5 py-4 transition-colors hover:bg-primary/5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                <c.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-secondary">{c.label}</span>
            </a>
          ))}

          <Button variant="whatsapp" size="lg" className="w-full" asChild>
            <a href={`https://wa.me/94771234567?text=${encodeURIComponent("Hi TrustClean Lanka! I'd like to inquire about your cleaning services.")}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
            </a>
          </Button>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-card h-48">
            <iframe
              title="TrustClean Lanka Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.81535417078!2d79.82118565!3d6.9218374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596e4dc3e2d7%3A0x9bfc0e89e90ba6b7!2sColombo!5e0!3m2!1sen!2slk!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-card p-8 shadow-elevated space-y-4"
        >
          {sent ? (
            <div className="text-center py-12">
              <Mail className="mx-auto h-12 w-12 text-accent mb-3" />
              <h3 className="font-heading text-xl font-bold text-secondary">Message Sent!</h3>
              <p className="text-muted-foreground mt-2">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} required />
              <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} required />
              <textarea placeholder="How can we help you?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className={inputClass} required />
              <Button variant="hero" size="lg" type="submit" className="w-full">Send Message</Button>
            </>
          )}
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
