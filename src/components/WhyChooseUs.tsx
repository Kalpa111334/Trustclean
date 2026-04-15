import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Clock, Award, ThumbsUp, Recycle } from "lucide-react";

const stats = [
  { icon: ThumbsUp, value: 2500, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 15000, suffix: "+", label: "Jobs Completed" },
  { icon: Clock, value: 6, suffix: "+", label: "Years Experience" },
  { icon: Recycle, value: 100, suffix: "%", label: "Eco-Friendly" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-gradient-primary font-heading text-4xl font-bold sm:text-5xl">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const benefits = [
  "Same-day service available",
  "Transparent pricing, no hidden fees",
  "Satisfaction guarantee on every job",
  "Professional-grade equipment & products",
];

export function WhyChooseUs() {
  return (
    <SectionWrapper id="why-us" className="bg-muted/40">
      <div className="text-center mb-14">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">Why Choose Us</span>
        <h2 className="font-heading text-3xl font-bold text-secondary sm:text-4xl">
          Numbers That Speak for Themselves
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center rounded-2xl bg-card p-6 shadow-card"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <s.icon className="h-6 w-6" />
            </div>
            <AnimatedCounter target={s.value} suffix={s.suffix} />
            <p className="mt-1 text-sm text-muted-foreground font-medium">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="flex items-center gap-3 rounded-xl bg-card px-5 py-3.5 shadow-card"
          >
            <span className="text-accent text-lg">✓</span>
            <span className="text-sm font-medium text-secondary">{b}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
