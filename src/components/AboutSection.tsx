import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import teamImg from "@/assets/team-cleaning.png";
import { ShieldCheck, Users, Leaf } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Fully Insured & Reliable" },
  { icon: Users, label: "Trained & Vetted Staff" },
  { icon: Leaf, label: "Eco-Friendly Products" },
];

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <img src={teamImg} alt="TrustClean Lanka cleaning team" className="w-full max-w-lg mx-auto drop-shadow-xl" width={900} height={600} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">About Us</span>
          <h2 className="font-heading text-3xl font-bold text-secondary sm:text-4xl">
            Sri Lanka's Most Trusted Cleaning Service
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Founded in 2018, TrustClean Lanka has grown from a small family operation to one of the island's leading professional cleaning companies. We serve over 2,500 happy customers across Colombo, Kandy, Galle, and beyond.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Our mission is simple: deliver spotless results with integrity, reliability, and care for the environment. Every team member is background-checked, professionally trained, and equipped with eco-friendly products.
          </p>

          <div className="mt-8 grid gap-4">
            {badges.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3 rounded-xl bg-muted/60 px-5 py-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <b.icon className="h-5 w-5" />
                </div>
                <span className="font-medium text-secondary">{b.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
