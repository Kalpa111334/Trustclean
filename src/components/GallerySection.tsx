import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import beforeLiving from "@/assets/before-living.jpg";
import afterLiving from "@/assets/after-living.jpg";
import beforeKitchen from "@/assets/before-kitchen.jpg";
import afterKitchen from "@/assets/after-kitchen.jpg";
import beforeConstruction from "@/assets/before-construction.jpg";
import afterConstruction from "@/assets/after-construction.jpg";

const galleryItems = [
  { before: beforeLiving, after: afterLiving, label: "Living Room Transformation" },
  { before: beforeKitchen, after: afterKitchen, label: "Kitchen Deep Clean" },
  { before: beforeConstruction, after: afterConstruction, label: "Post-Construction Cleanup" },
];

function BeforeAfterSlider({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(x, 5), 95));
  }, []);

  const handleTouch = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(x, 5), 95));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="rounded-2xl overflow-hidden shadow-card cursor-col-resize"
      onMouseMove={handleMove}
      onTouchMove={handleTouch}
    >
      <div className="relative h-64 sm:h-72">
        {/* "Before" image (full background) */}
        <img
          src={item.before}
          alt={`Before - ${item.label}`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          width={768}
          height={512}
        />
        {/* BEFORE label */}
        <span className="absolute top-3 left-3 z-10 inline-block rounded-full bg-destructive/80 px-3 py-1 text-xs font-bold text-destructive-foreground">
          BEFORE
        </span>

        {/* "After" image (clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={item.after}
            alt={`After - ${item.label}`}
            className="h-full w-full object-cover"
            loading="lazy"
            width={768}
            height={512}
          />
          {/* AFTER label */}
          <span className="absolute top-3 left-3 inline-block rounded-full bg-accent/80 px-3 py-1 text-xs font-bold text-accent-foreground">
            AFTER
          </span>
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-card shadow-lg z-20"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card shadow-elevated flex items-center justify-center">
            <span className="text-sm text-muted-foreground font-bold">↔</span>
          </div>
        </div>
      </div>
      <div className="bg-card px-5 py-3">
        <p className="font-heading text-sm font-semibold text-secondary">{item.label}</p>
      </div>
    </motion.div>
  );
}

export function GallerySection() {
  return (
    <SectionWrapper id="gallery" className="bg-muted/40">
      <div className="text-center mb-14">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">Gallery</span>
        <h2 className="font-heading text-3xl font-bold text-secondary sm:text-4xl">Before & After</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Drag the slider to see the difference our cleaning makes. Real results from real projects.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, i) => (
          <BeforeAfterSlider key={item.label} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
