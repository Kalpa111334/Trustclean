import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Dilini Perera", role: "Homeowner, Colombo", text: "TrustClean Lanka transformed our home before the New Year celebration. The team was punctual, thorough, and incredibly friendly. Our house hasn't looked this good in years!", rating: 5 },
  { name: "Ranjith Fernando", role: "Office Manager, Kandy", text: "We've been using their office cleaning service for 8 months now. Consistent quality, professional staff, and great communication. Highly recommend for any business.", rating: 5 },
  { name: "Samantha de Silva", role: "Event Planner, Galle", text: "They handled the cleanup after our 300-person wedding flawlessly. The venue was spotless by morning. Will definitely book again for future events!", rating: 5 },
  { name: "Nuwan Jayawardena", role: "Contractor, Negombo", text: "Post-construction cleaning is their specialty. They removed all the dust and debris from our newly built villa in just one day. Exceptional work!", rating: 5 },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <SectionWrapper id="testimonials">
      <div className="text-center mb-14">
        <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">Testimonials</span>
        <h2 className="font-heading text-3xl font-bold text-secondary sm:text-4xl">What Our Clients Say</h2>
      </div>

      <div className="relative mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-card p-8 md:p-12 shadow-card text-center"
          >
            <Quote className="mx-auto h-10 w-10 text-primary/20 mb-4" />
            <p className="text-lg text-foreground leading-relaxed italic">"{t.text}"</p>
            <div className="mt-6 flex justify-center text-amber-400 text-sm gap-0.5">
              {Array.from({ length: t.rating }, (_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <div className="mt-4">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                {t.name[0]}
              </div>
              <p className="mt-2 font-heading font-semibold text-secondary">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={prev} className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary/10 text-foreground transition-colors" aria-label="Previous testimonial">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/30"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary/10 text-foreground transition-colors" aria-label="Next testimonial">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
