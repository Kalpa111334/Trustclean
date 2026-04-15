import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, CalendarDays } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        >
          <a
            href={`https://wa.me/94771234567?text=${encodeURIComponent("Hi! I'd like to book a cleaning service.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-clean-green text-accent-foreground shadow-elevated transition-transform hover:scale-110"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
          <a
            href="#booking"
            className="flex h-14 w-14 items-center justify-center rounded-full gradient-primary text-primary-foreground shadow-elevated transition-transform hover:scale-110"
            aria-label="Book now"
          >
            <CalendarDays className="h-6 w-6" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
