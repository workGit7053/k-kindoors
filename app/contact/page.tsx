import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us & Location | KK Indoors Windows & Doors",
  description:
    "Get in touch with KK Indoors for window and door consultations, custom quotations, site measurements, and showroom visits.",
};

// ===================================================================================
// CONTACT CONFIGURATION: UPDATE THESE VALUES ACCORDING TO YOUR BUSINESS DETAILS
// ===================================================================================
const CONTACT_CONFIG = {
  // WhatsApp detail (use international format without spaces or '+' for wa.me URL)
  whatsapp: {
    display: "+91 93183 35415",
    link: "https://wa.me/919318335415?text=Hello%20KK%20Indoors%2C%20I%20would%20like%20to%20inquire%20about%20windows%20and%20doors.",
    status: "Online • Typically replies in 15 mins",
  },

  // Mobile phone number for direct calling
  phone: {
    display: "+91 93183 35415",
    link: "tel:+919318335415",
    hours: "Mon – Sat: 9:00 AM – 7:30 PM",
  },

  // Email address for plans and formal inquiries
  email: {
    display: "contact@kkindoors.com",
    link: "mailto:contact@kkindoors.com?subject=Inquiry%20from%20KK%20Indoors%20Website",
    note: "Send blueprints, window schedules & CAD drawings",
  },

  // Physical showroom / factory address
  location: {
    name: "KK Indoors Experience Center & Factory",
    addressLine1: "Plot 42, Fenestration & Design Hub",
    addressLine2: "Industrial Area Phase II, New Delhi, 110020, India",
    directionsUrl:
      "https://maps.google.com/?q=New+Delhi+Industrial+Area+Phase+II",
    hours: "Monday – Saturday: 9:30 AM – 6:30 PM (Sunday Closed)",
  },

  // Google Maps Embed URL
  // HOW TO CHANGE THIS MAP:
  // 1. Go to https://maps.google.com
  // 2. Search your exact showroom or business address
  // 3. Click "Share" -> "Embed a map"
  // 4. Copy the URL inside the src="..." attribute and paste it here below
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112104.7214781442!2d77.16858102377827!3d28.591564757530663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F7F8] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* SECTION 1: PAGE HEADER                                                    */}
        {/* ========================================================================= */}
        <header className="max-w-3xl">
          <span className="inline-block rounded-full border border-[#A7E0D6]/60 bg-[#E3F4F1] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0F8F7E]">
            Get In Touch
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#1E2328] sm:text-5xl lg:text-6xl">
            We&apos;re Here to Help Your Space Evolve
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            Whether you need custom window specifications, sliding patio systems, architectural estimates, or a guided tour of our showroom, our engineering specialists are ready to help.
          </p>
        </header>

        {/* ========================================================================= */}
        {/* SECTION 2: CONTACT DETAILS (WhatsApp, Phone, Email, Location)             */}
        {/* ========================================================================= */}
        <section aria-labelledby="contact-channels-heading" className="mt-14">
          <h2 id="contact-channels-heading" className="sr-only">
            Direct Contact Channels
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* --- Channel 1: WhatsApp --- */}
            <div className="group flex flex-col justify-between rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0F8F7E]/40 hover:shadow-xl hover:shadow-[#0F8F7E]/10">
              <div>
                <div className="flex items-center justify-between">
                  {/* WhatsApp Logo */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E3F4F1] to-[#C9EEE7] text-[#0F8F7E] shadow-sm">
                    <svg
                      aria-hidden="true"
                      className="h-7 w-7 text-[#0F8F7E]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.35.491 1.199.534 1.286.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.636 0-3.17-.468-4.479-1.283l-.321-.2-.338.09-2.617.733.722-2.551.101-.357-.225-.349C3.978 15.111 3.8 13.593 3.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2z" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-[#E3F4F1] px-2.5 py-1 text-[11px] font-semibold text-[#0F8F7E]">
                    Fastest
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#1E2328]">
                  WhatsApp Support
                </h3>
                <p className="mt-1 text-xs text-[#6B7280]">
                  {CONTACT_CONFIG.whatsapp.status}
                </p>
                <p className="mt-3 text-sm font-bold text-[#0F8F7E]">
                  {CONTACT_CONFIG.whatsapp.display}
                </p>
              </div>

              <a
                href={CONTACT_CONFIG.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#0F8F7E]/20 transition-all hover:from-[#14A693] hover:to-[#0F8F7E]"
              >
                <span>Message on WhatsApp</span>
                <span>→</span>
              </a>
            </div>

            {/* --- Channel 2: Phone --- */}
            <div className="group flex flex-col justify-between rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0F8F7E]/40 hover:shadow-xl hover:shadow-[#0F8F7E]/10">
              <div>
                <div className="flex items-center justify-between">
                  {/* Phone Logo */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E3F4F1] to-[#C9EEE7] text-[#0F8F7E] shadow-sm">
                    <svg
                      aria-hidden="true"
                      className="h-7 w-7 text-[#0F8F7E]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="rounded-full bg-[#F5F7F8] px-2.5 py-1 text-[11px] font-medium text-[#6B7280]">
                    Direct
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#1E2328]">
                  Phone Consultation
                </h3>
                <p className="mt-1 text-xs text-[#6B7280]">
                  {CONTACT_CONFIG.phone.hours}
                </p>
                <p className="mt-3 text-sm font-bold text-[#0F8F7E]">
                  {CONTACT_CONFIG.phone.display}
                </p>
              </div>

              <a
                href={CONTACT_CONFIG.phone.link}
                className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white px-4 py-2.5 text-xs font-semibold text-[#1E2328] transition-all hover:border-[#0F8F7E]/40 hover:bg-[#E3F4F1]/30 hover:text-[#0F8F7E]"
              >
                <span>Call Directly</span>
                <span>→</span>
              </a>
            </div>

            {/* --- Channel 3: Email --- */}
            <div className="group flex flex-col justify-between rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0F8F7E]/40 hover:shadow-xl hover:shadow-[#0F8F7E]/10">
              <div>
                <div className="flex items-center justify-between">
                  {/* Email Logo */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E3F4F1] to-[#C9EEE7] text-[#0F8F7E] shadow-sm">
                    <svg
                      aria-hidden="true"
                      className="h-7 w-7 text-[#0F8F7E]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="rounded-full bg-[#F5F7F8] px-2.5 py-1 text-[11px] font-medium text-[#6B7280]">
                    CAD / Plans
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#1E2328]">
                  Email Inquiries
                </h3>
                <p className="mt-1 text-xs text-[#6B7280]">
                  {CONTACT_CONFIG.email.note}
                </p>
                <p className="mt-3 truncate text-sm font-bold text-[#0F8F7E]">
                  {CONTACT_CONFIG.email.display}
                </p>
              </div>

              <a
                href={CONTACT_CONFIG.email.link}
                className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white px-4 py-2.5 text-xs font-semibold text-[#1E2328] transition-all hover:border-[#0F8F7E]/40 hover:bg-[#E3F4F1]/30 hover:text-[#0F8F7E]"
              >
                <span>Write an Email</span>
                <span>→</span>
              </a>
            </div>

            {/* --- Channel 4: Location / Experience Center --- */}
            <div className="group flex flex-col justify-between rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0F8F7E]/40 hover:shadow-xl hover:shadow-[#0F8F7E]/10">
              <div>
                <div className="flex items-center justify-between">
                  {/* Location Pin Logo */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E3F4F1] to-[#C9EEE7] text-[#0F8F7E] shadow-sm">
                    <svg
                      aria-hidden="true"
                      className="h-7 w-7 text-[#0F8F7E]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="rounded-full bg-[#F5F7F8] px-2.5 py-1 text-[11px] font-medium text-[#6B7280]">
                    Showroom
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#1E2328]">
                  Experience Center
                </h3>
                <p className="mt-1 text-xs text-[#6B7280]">
                  {CONTACT_CONFIG.location.addressLine1}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#1E2328]">
                  {CONTACT_CONFIG.location.addressLine2}
                </p>
              </div>

              <a
                href={CONTACT_CONFIG.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white px-4 py-2.5 text-xs font-semibold text-[#1E2328] transition-all hover:border-[#0F8F7E]/40 hover:bg-[#E3F4F1]/30 hover:text-[#0F8F7E]"
              >
                <span>View on Map</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: FORM & SHOWROOM BRIEF                                         */}
        {/* ========================================================================= */}
        <section className="mt-16">
          <ContactForm />
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: INTERACTIVE MAP & SHOWROOM DIRECTIONS                          */}
        {/* ========================================================================= */}
        <section aria-labelledby="map-location-heading" className="mt-16">
          <div className="overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm">
            {/* Map Top Bar */}
            <div className="flex flex-col gap-4 border-b border-[#E5E7EB] p-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F8F7E]">
                  Visit In Person
                </span>
                <h2
                  id="map-location-heading"
                  className="mt-1 text-xl font-bold text-[#1E2328] sm:text-2xl"
                >
                  {CONTACT_CONFIG.location.name}
                </h2>
                <p className="mt-1 text-xs text-[#6B7280] sm:text-sm">
                  {CONTACT_CONFIG.location.addressLine1},{" "}
                  {CONTACT_CONFIG.location.addressLine2}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={CONTACT_CONFIG.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#0F8F7E]/20 transition-all hover:from-[#14A693] hover:to-[#0F8F7E]"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            {/*
              ========================================================================
              CUSTOMIZE THE GOOGLE MAP BELOW:
              1. Search your exact location on https://www.google.com/maps
              2. Click "Share" -> "Embed a map"
              3. Copy the URL inside src="..." and replace mapEmbedUrl in CONTACT_CONFIG above
              ========================================================================
            */}
            <div className="relative aspect-[16/9] w-full min-h-[380px] bg-[#F5F7F8] lg:min-h-[460px]">
              <iframe
                title="KK Indoors Showroom & Factory Location"
                src={CONTACT_CONFIG.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            </div>

            {/* Map Information Highlights */}
            <div className="grid grid-cols-1 divide-y border-t border-[#E5E7EB] bg-[#FAFBFB] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0F8F7E]">
                  Visiting Hours
                </p>
                <p className="mt-1 text-sm font-semibold text-[#1E2328]">
                  {CONTACT_CONFIG.location.hours}
                </p>
                <p className="mt-1 text-xs text-[#6B7280]">
                  Walk-ins welcome or book an appointment
                </p>
              </div>

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0F8F7E]">
                  Showroom Exhibits
                </p>
                <p className="mt-1 text-sm font-semibold text-[#1E2328]">
                  Full-Scale Operational Displays
                </p>
                <p className="mt-1 text-xs text-[#6B7280]">
                  UPVC & Aluminium sliders, casements, pivot systems
                </p>
              </div>

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0F8F7E]">
                  Site Surveys
                </p>
                <p className="mt-1 text-sm font-semibold text-[#1E2328]">
                  Complimentary Measurement Visits
                </p>
                <p className="mt-1 text-xs text-[#6B7280]">
                  Available across metropolitan regions
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
