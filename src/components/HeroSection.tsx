import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bubbles } from "@/components/Bubbles";
import cleanerImg from "@/assets/cleaner-hero.png";
import { ArrowRight, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden gradient-hero flex items-center">
      <Bubbles count={15} />

      {/* Sparkle accents */}
      <div className="pointer-events-none absolute top-20 left-[15%] h-3 w-3 rounded-full bg-accent animate-sparkle" style={{ animationDelay: "0s" }} />
      <div className="pointer-events-none absolute top-40 right-[20%] h-2 w-2 rounded-full bg-primary animate-sparkle" style={{ animationDelay: "0.8s" }} />
      <div className="pointer-events-none absolute bottom-32 left-[30%] h-4 w-4 rounded-full bg-accent animate-sparkle" style={{ animationDelay: "1.6s" }} />

      <div className="mx-auto max-w-7xl px-4 py-32 md:py-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-heading text-4xl font-bold leading-tight text-secondary sm:text-5xl lg:text-6xl">
            Professional Cleaning Services{" "}
            <span className="text-gradient-primary">You Can Trust</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground leading-relaxed">
            Experience spotless spaces with TrustClean Lanka. Our trained professionals deliver reliable, eco-friendly cleaning for homes, offices, and events across Sri Lanka.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#booking">
                Book Now <ArrowRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+94771234567">
                <Phone className="mr-1 h-5 w-5" /> Get Free Quote
              </a>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-amber-400 text-sm">★★★★★</div>
              <p className="text-sm text-muted-foreground">2,500+ happy customers</p>
            </div>
          </div>
        </motion.div>

        {/* Character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={cleanerImg}
              alt="TrustClean Lanka professional cleaner"
              className="w-full max-w-md drop-shadow-2xl"
              width={800}
              height={800}
            />
          </motion.div>
          {/* Floating badges */}
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-0 glass rounded-2xl px-4 py-3 shadow-card"
          >
            <p className="text-sm font-bold text-secondary">⭐ 5-Star Rated</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
