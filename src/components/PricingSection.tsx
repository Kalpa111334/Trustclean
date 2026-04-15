import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "5,000",
    period: "per session",
    desc: "Perfect for regular home upkeep",
    features: ["2 rooms cleaned", "Kitchen & bathroom", "Dusting & vacuuming", "2-hour service window"],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "12,000",
    period: "per session",
    desc: "Most popular — best value for families",
    features: ["Full house cleaning", "All rooms & bathrooms", "Kitchen deep clean", "Window cleaning", "4-hour service", "Eco-friendly products"],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "25,000",
    period: "per session",
    desc: "Complete deep clean for perfectionists",
    features: ["Everything in Standard", "Carpet shampooing", "Upholstery cleaning", "Appliance cleaning", "Full-day service", "Priority scheduling", "Satisfaction guarantee"],
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <SectionWrapper id="pricing">
      <div className="text-center mb-14">
        <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">Pricing</span>
        <h2 className="font-heading text-3xl font-bold text-secondary sm:text-4xl">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          All prices in LKR. Custom quotes available for commercial and recurring services.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className={`relative rounded-3xl p-7 transition-shadow ${
              plan.highlighted
                ? "gradient-primary text-primary-foreground shadow-elevated ring-2 ring-primary/20 scale-[1.03]"
                : "bg-card shadow-card"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-accent-foreground shadow-clean">
                MOST POPULAR
              </span>
            )}
            <h3 className="font-heading text-xl font-bold">{plan.name}</h3>
            <p className={`text-sm mt-1 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
              {plan.desc}
            </p>
            <div className="mt-4 mb-6">
              <span className="font-heading text-4xl font-bold">Rs. {plan.price}</span>
              <span className={`text-sm ml-1 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.period}
              </span>
            </div>
            <ul className="space-y-2.5 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className={`h-4 w-4 mt-0.5 shrink-0 ${plan.highlighted ? "text-accent-foreground" : "text-accent"}`} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={plan.highlighted ? "heroOutline" : "hero"}
              size="lg"
              className={`w-full ${plan.highlighted ? "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" : ""}`}
              asChild
            >
              <a href="#booking">Choose {plan.name}</a>
            </Button>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
