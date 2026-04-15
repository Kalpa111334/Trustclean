import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { CalendarDays, CheckCircle } from "lucide-react";

const serviceTypes = ["Home Cleaning", "Office Cleaning", "Post-Construction", "Event Cleaning", "Deep Cleaning"];

export function BookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", location: "", service: "", date: "", time: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim() || !/^[\d+\-\s]{7,15}$/.test(form.phone.trim())) errs.phone = "Valid phone number required";
    if (!form.location.trim()) errs.location = "Location is required";
    if (!form.service) errs.service = "Select a service";
    if (!form.date) errs.date = "Select a date";
    if (!form.time) errs.time = "Select a time";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-all focus:ring-2 focus:ring-primary/40 ${
      errors[field] ? "border-destructive" : "border-input"
    }`;

  if (submitted) {
    return (
      <SectionWrapper id="booking" className="bg-muted/40">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mx-auto max-w-lg text-center rounded-3xl bg-card p-12 shadow-elevated">
          <CheckCircle className="mx-auto h-16 w-16 text-accent mb-4" />
          <h3 className="font-heading text-2xl font-bold text-secondary">Booking Received!</h3>
          <p className="mt-2 text-muted-foreground">Thank you, {form.name}! We'll contact you at {form.phone} to confirm your {form.service.toLowerCase()} appointment.</p>
          <Button variant="hero" size="lg" className="mt-6" onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", location: "", service: "", date: "", time: "" }); }}>
            Book Another
          </Button>
        </motion.div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="booking" className="bg-muted/40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">Book Now</span>
          <h2 className="font-heading text-3xl font-bold text-secondary sm:text-4xl">
            Schedule Your Cleaning
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Fill out the form and our team will reach out within 30 minutes to confirm your booking. Same-day service available for requests before 10 AM.
          </p>
          <div className="mt-6 flex items-center gap-3 rounded-xl bg-card px-5 py-4 shadow-card">
            <CalendarDays className="h-8 w-8 text-primary shrink-0" />
            <div>
              <p className="font-heading font-semibold text-secondary">Open 7 Days a Week</p>
              <p className="text-sm text-muted-foreground">6:00 AM – 8:00 PM • Including holidays</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-card p-8 shadow-elevated space-y-4"
        >
          <div>
            <input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass("name")} />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
          </div>
          <div>
            <input placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass("phone")} />
            {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
          </div>
          <div>
            <input placeholder="Location (e.g., Colombo 07)" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className={inputClass("location")} />
            {errors.location && <p className="text-xs text-destructive mt-1">{errors.location}</p>}
          </div>
          <div>
            <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={inputClass("service")}>
              <option value="">Select Service Type</option>
              {serviceTypes.map((s) => (<option key={s} value={s}>{s}</option>))}
            </select>
            {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputClass("date")} />
              {errors.date && <p className="text-xs text-destructive mt-1">{errors.date}</p>}
            </div>
            <div>
              <input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className={inputClass("time")} />
              {errors.time && <p className="text-xs text-destructive mt-1">{errors.time}</p>}
            </div>
          </div>
          <Button variant="hero" size="lg" type="submit" className="w-full">
            Confirm Booking
          </Button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
