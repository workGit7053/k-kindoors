"use client";

import { useState } from "react";

// =========================================================================
// CUSTOMIZE HERE: WhatsApp number used for direct quote forwarding
// Replace with your actual 10 or 12 digit country-coded number without +
// =========================================================================
const WHATSAPP_PHONE = "9318335415";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "aluminium-windows",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate instant form processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const openWhatsAppWithDetails = () => {
    const text = encodeURIComponent(
      `Hello KK Indoors,\n\nName: ${formData.name || "N/A"}\nPhone: ${
        formData.phone || "N/A"
      }\nEmail: ${formData.email || "N/A"}\nProduct Interest: ${
        formData.product
      }\nMessage: ${formData.message || "I would like a quote."}`
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, "_blank");
  };

  return (
    <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm sm:p-10">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F8F7E]">
            Online Inquiry
          </span>
          <h2 className="mt-1 text-2xl font-bold text-[#1E2328] sm:text-3xl">
            Request a Free Consultation & Quote
          </h2>
        </div>
      </div>

      <p className="mt-2 text-sm text-[#6B7280]">
        Fill out your project specifications below. Our architectural engineers will review your requirements and provide estimated pricing within 24 hours.
      </p>

      {submitted ? (
        /* Success State Notification */
        <div className="mt-8 rounded-2xl border border-[#A7E0D6] bg-gradient-to-br from-[#E3F4F1] to-[#F5F7F8] p-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0F8F7E] text-2xl text-white shadow-md shadow-[#0F8F7E]/30">
            ✓
          </div>
          <h3 className="mt-4 text-xl font-bold text-[#1E2328]">
            Inquiry Submitted Successfully!
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-[#6B7280]">
            Thank you, <strong className="text-[#1E2328]">{formData.name}</strong>. We have received your request and will contact you at <strong className="text-[#1E2328]">{formData.phone || formData.email}</strong> shortly.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={openWhatsAppWithDetails}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-6 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#0F8F7E]/20 transition-all hover:from-[#14A693] hover:to-[#0F8F7E]"
            >
              <span>Forward to WhatsApp for Faster Reply</span>
              <span>→</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  product: "aluminium-windows",
                  message: "",
                });
              }}
              className="rounded-full border border-[#E5E7EB] bg-white px-5 py-2.5 text-xs font-semibold text-[#1E2328] hover:bg-[#F5F7F8]"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        /* Main Contact Form */
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-wider text-[#1E2328]"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className="mt-2 w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7F8] px-4 py-3 text-sm text-[#1E2328] placeholder:text-[#9CA3AF] transition-colors focus:border-[#0F8F7E] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0F8F7E]"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold uppercase tracking-wider text-[#1E2328]"
              >
                Phone / WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="mt-2 w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7F8] px-4 py-3 text-sm text-[#1E2328] placeholder:text-[#9CA3AF] transition-colors focus:border-[#0F8F7E] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0F8F7E]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-[#1E2328]"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@domain.com"
                className="mt-2 w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7F8] px-4 py-3 text-sm text-[#1E2328] placeholder:text-[#9CA3AF] transition-colors focus:border-[#0F8F7E] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0F8F7E]"
              />
            </div>

            {/* Product Category Interest */}
            <div>
              <label
                htmlFor="product"
                className="block text-xs font-semibold uppercase tracking-wider text-[#1E2328]"
              >
                Product Category
              </label>
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7F8] px-4 py-3 text-sm text-[#1E2328] transition-colors focus:border-[#0F8F7E] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0F8F7E]"
              >
                <option value="aluminium-windows">Aluminium Windows (Slim System)</option>
                <option value="upvc-windows">UPVC Windows (Thermal & Acoustic)</option>
                <option value="sliding-doors">Sliding Patio / Balcony Doors</option>
                <option value="pivot-doors">Pivot & Architectural Entrance Doors</option>
                <option value="acoustic-glazing">Double Glazed / Acoustic Glass</option>
                <option value="entire-project">Complete Home / Villa Fenestration</option>
                <option value="other">Other / Custom Requirement</option>
              </select>
            </div>
          </div>

          {/* Detailed Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold uppercase tracking-wider text-[#1E2328]"
            >
              Project Details & Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please share details such as approximate dimensions, floor plans, number of openings, site location, or schedule..."
              className="mt-2 w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7F8] px-4 py-3 text-sm text-[#1E2328] placeholder:text-[#9CA3AF] transition-colors focus:border-[#0F8F7E] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0F8F7E]"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0F8F7E]/25 transition-all hover:from-[#14A693] hover:to-[#0F8F7E] disabled:opacity-60"
            >
              {loading ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Submit Inquiry Request</span>
                  <span>→</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={openWhatsAppWithDetails}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-6 py-3.5 text-sm font-semibold text-[#1E2328] transition-all hover:border-[#0F8F7E]/40 hover:bg-[#E3F4F1]/30 hover:text-[#0F8F7E]"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4 text-[#0F8F7E]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.35.491 1.199.534 1.286.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
              </svg>
              <span>Instant WhatsApp</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
