"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  homeType: "",
  budget: 100000,
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      setError(
        "Please share your name and phone number so we can reach you."
      );
      return;
    }

    setError("");

    // No backend wired up yet — replace this with your form endpoint or API route.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-card border border-border bg-white p-10 text-center card-shadow"
      >
        <div className="flex flex-col items-center gap-4">
          <CheckCircle2 size={42} className="text-accent" />

          <h3 className="text-xl font-semibold text-text-primary">
            Thanks, {form.name.split(" ")[0]} — we've got it.
          </h3>

          <p className="max-w-md text-[14px] leading-6 text-text-secondary">
            Someone from our team will call you at {form.phone} within 24 hours
            to schedule your free consultation.
          </p>

          <button
            onClick={() => {
              setForm(initialForm);
              setSubmitted(false);
            }}
            className="mt-2 text-[14px] font-medium text-accent underline underline-offset-4"
          >
            Send another message
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-card border border-border bg-white p-6 shadow-lg sm:p-8 lg:p-10"
    >
      {/* Full Name + Phone Number */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-[13.5px] font-medium text-text-secondary"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="rounded-lg border border-border bg-background px-4 py-3 text-[15px] text-text-primary outline-none transition-colors focus:border-accent"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-[13.5px] font-medium text-text-secondary"
          >
            Phone Number
          </label>

          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="rounded-lg border border-border bg-background px-4 py-3 text-[15px] text-text-primary outline-none transition-colors focus:border-accent"
          />
        </div>
      </div>

      {/* Email + Home Type */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-[13.5px] font-medium text-text-secondary"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ananya@email.com"
            className="rounded-lg border border-border bg-background px-4 py-3 text-[15px] text-text-primary outline-none transition-colors focus:border-accent"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="homeType"
            className="text-[13.5px] font-medium text-text-secondary"
          >
            Home Type
          </label>

          <select
            id="homeType"
            name="homeType"
            value={form.homeType}
            onChange={handleChange}
            className="rounded-lg border border-border bg-background px-4 py-3 text-[15px] text-text-primary outline-none transition-colors focus:border-accent"
          >
            <option value="">Select one</option>
            <option value="1bhk">1 BHK</option>
            <option value="2bhk">2 BHK</option>
            <option value="3bhk">3 BHK</option>
            <option value="villa">Villa</option>
          </select>
        </div>
      </div>

      {/* Budget Range */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <label
            htmlFor="budget"
            className="text-[13.5px] font-medium text-text-secondary"
          >
            Estimated Budget
          </label>

          <span className="text-[14px] font-semibold text-accent">
            ₹{Number(form.budget).toLocaleString("en-IN")}
          </span>
        </div>

        <input
          id="budget"
          type="range"
          name="budget"
          min="50000"
          max="1000000"
          step="10000"
          value={form.budget}
          onChange={handleChange}
          className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-accent"
        />

        <div className="flex justify-between text-[12px] text-text-secondary">
          <span>₹50K</span>
          <span>₹10L+</span>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-[13.5px] font-medium text-text-secondary"
        >
          Tell us about your project
        </label>

        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="A little about your home, timeline, or budget..."
          className="resize-none rounded-lg border border-border bg-background px-4 py-3 text-[15px] text-text-primary outline-none transition-colors focus:border-accent"
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-[13.5px] text-red-400">
          {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-medium text-background transition-colors hover:bg-accent-hover"
      >
        Send Message
        <Send size={16} />
      </button>
    </motion.form>
  );
}