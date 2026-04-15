import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Home, Building2, HardHat, PartyPopper, Sparkles } from "lucide-react";

const services = [
  { icon: Home, title: "Home Cleaning", desc: "Thorough cleaning of living spaces, kitchens, bathrooms, and bedrooms. We leave your home sparkling fresh." },
  { icon: Building2, title: "Office Cleaning", desc: "Keep your workplace clean and productive. Regular or one-time deep cleaning for offices of any size." },
  { icon: HardHat, title: "Post-Construction", desc: "Remove dust, debris, and residue after construction. We handle the mess so you can enjoy the result." },
  { icon: PartyPopper, title: "Event Cleaning", desc: "Pre and post-event cleaning for weddings, conferences, and celebrations. Spotless venues guaranteed." },
  { icon: Sparkles, title: "Deep Cleaning", desc: "Intensive cleaning that reaches every corner. Perfect for seasonal refreshes or move-in/move-out situations." },
];

export function ServicesSection() {
  return (
    <SectionWrapper id="services" className="bg-muted/40">
      <div className="text-center mb-14">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">Our Services</span>
        <h2 className="font-heading text-3xl font-bold text-secondary sm:text-4xl">
          Cleaning Solutions for Every Need
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          From daily home maintenance to specialized post-construction cleanup, our trained team delivers exceptional results every time.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl bg-card p-7 shadow-card transition-shadow hover:shadow-elevated cursor-pointer"
          >
            {/* Wipe effect on hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <div className="relative z-10">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-clean transition-transform duration-300 group-hover:scale-110">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-secondary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
