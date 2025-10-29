"use client";
import React from "react";
import { motion } from "framer-motion";
import { LocationIcon, PhoneIcon, EmailIcon } from "../../components/Icons";
import Image from "next/image";



export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Thank you for reaching out! We'll contact you shortly.");
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  // ================= REUSABLE ACCORDION COMPONENT =================
  const AccordionItem = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 * index }}
        viewport={{ once: true }}
        className={`border border-slate-200 rounded-2xl p-6 shadow-sm transition-all 
        ${
          isOpen
            ? "bg-blue-50/50 shadow-md border-blue-200"
            : "bg-white hover:shadow-md"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center text-left"
        >
          <h3 className="font-semibold text-lg text-slate-800">{question}</h3>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-blue-600 text-2xl font-bold"
          >
            +
          </motion.span>
        </button>

        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
            marginTop: isOpen ? "1rem" : "0rem",
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden text-slate-600 leading-relaxed"
        >
          {answer}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative flex flex-col justify-center items-center py-32 bg-white text-center overflow-hidden">
        {/* Subtle Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-white to-slate-50"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Floating Geometric Accents */}
        <motion.div
          className="absolute -top-10 left-10 w-52 h-52 bg-blue-400/60 rounded-full "
          animate={{ y: [0, 30, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500/50 rounded-full "
          animate={{ y: [0, -25, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Center Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block px-4 py-1.5 text-sm font-semibold tracking-widest uppercase rounded-full bg-blue-50 text-blue-700 mb-4"
          >
            Get in Touch
          </motion.span>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 mb-4 leading-tight">
            Let’s <span className="text-blue-600">Connect</span>
          </h1>

          {/* Accent Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="mx-auto mb-6 w-24 h-[3px] bg-blue-600 origin-left"
          />

          {/* Subtitle */}
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions, ideas, or a new project in mind? We’re here to
            collaborate and turn your vision into precision.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10"
          >
            <button
              onClick={() => {
                const formSection = document.getElementById("contact-form");
                if (formSection) {
                  formSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-3 bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-blue-800 hover:shadow-xl transition-all"
            >
              Start a Conversation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom Subtle Pattern Divider */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-100 to-transparent" />
      </section>

      {/* ================= CONTACT FORM & INFO ================= */}

      <section
        id="contact-form"
        className="relative py-28 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* === Contact Info === */}
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-bold mb-6 text-slate-800 leading-tight">
              Reach <span className="text-blue-600">Us</span>
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              We’d love to hear from you. Our team is ready to assist with your
              manufacturing, quotation, and business partnership inquiries.
            </p>

            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="p-4 bg-blue-50 rounded-2xl shadow-sm">
                  <LocationIcon />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">
                    Office Address
                  </h3>
                  <p className="text-slate-600">
                    Sy. No. 70/11, Near Basaveshwara Temple, <br />
                    Cheemasandra, Virgonagar Post, <br />
                    Bangalore – 560049, Karnataka, India
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-4 bg-blue-50 rounded-2xl shadow-sm">
                  <PhoneIcon />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">
                    Contact Persons
                  </h3>
                  <p className="text-slate-600 font-medium">
                    Mr. Chand Pasha & Mr. Shafiulla
                  </p>
                  <p className="text-slate-600">
                    📞 +91 99800 41620, +91 98804 01262 <br />
                    ☎️ 080-7129 0285
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-4 bg-blue-50 rounded-2xl shadow-sm">
                  <EmailIcon />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">
                    Email
                  </h3>
                  <p className="text-slate-600">abindustries4851@gmail.com</p>
                </div>
              </li>

              {/* Optional GST */}
              {/* <li className="flex items-start gap-4">
          <div className="p-4 bg-blue-50 rounded-2xl shadow-sm">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-slate-800">GST No.</h3>
            <p className="text-slate-600">29AAVFA5740J1ZV</p>
          </div>
        </li> */}
            </ul>

            {/* Embedded Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-12 h-72 w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200"
            >
              <iframe
                title="AB Industries Location"
                src="https://www.google.com/maps?q=Sy+No+70%2F11,+Cheemasandra,+Virgonagar,+Bangalore+560049&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>

          {/* === RFQ FORM === */}
          <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
            <h2 className="text-4xl font-bold mb-6 text-slate-800 leading-tight">
              Request for <span className="text-blue-600">Quote</span>
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white border border-slate-200 rounded-3xl shadow-xl p-8 transition-all hover:shadow-2xl"
            >
              {[
                { type: "text", placeholder: "Full Name", required: true },
                { type: "email", placeholder: "Email Address", required: true },
                { type: "tel", placeholder: "Phone Number", required: false },
              ].map((field, i) => (
                <div key={i} className="relative">
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full px-4 py-3 pl-11 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 outline-none transition"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-3 top-3.5 w-5 h-5 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {i === 0 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 0v8m-6 0h12"
                      />
                    )}
                    {i === 1 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 12H8m8 0l-4 4m4-4l-4-4"
                      />
                    )}
                    {i === 2 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5h2l2 7-2 7H3zM6 12h14"
                      />
                    )}
                  </svg>
                </div>
              ))}

              <textarea
                placeholder="Project Details"
                rows="4"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.02 }}
                type="submit"
                className="w-full bg-blue-700 text-white font-semibold py-3 rounded-md hover:bg-blue-800 transition"
              >
                Submit Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ================= QUICK SUPPORT CHANNELS ================= */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        {/* Decorative Gradient Orbs */}
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            {...fadeIn}
            className="text-4xl font-bold mb-14 text-slate-800"
          >
            Other Ways to <span className="text-blue-600">Connect</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 16.5A5.5 5.5 0 0115.5 22H8.25A2.25 2.25 0 016 19.75V4.25A2.25 2.25 0 018.25 2h7.5A2.25 2.25 0 0118 4.25v15.5A2.25 2.25 0 0115.75 22H8.25"
                    />
                  </svg>
                ),
                title: "WhatsApp Support",
                desc: "+91 99800 41620, +91 98804 01262 💬",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l9 6 9-6M3 8v8a2 2 0 002 2h14a2 2 0 002-2V8m-9 6l9-6"
                    />
                  </svg>
                ),
                title: "General Enquiries",
                desc: "abindustries4851@gmail.com",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: "Sales & Quotes",
                desc: "📩 abindustries4851@gmail.com",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0-1.657 1.343-3 3-3h6v6h-6a3 3 0 01-3-3zM3 5h6v6H3V5z"
                    />
                  </svg>
                ),
                title: "Careers & Opportunities",
                desc: "📧 hr@abindustries.in",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: 0.05 * i }}
                className="relative bg-white/90 backdrop-blur-lg border border-slate-200 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="p-4 bg-blue-50 rounded-full shadow-inner">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-slate-800">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-28 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative overflow-hidden">
        {/* Decorative background orbs */}
        <motion.div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.h2
            {...fadeIn}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-800"
          >
            Frequently Asked <span className="text-blue-600">Questions</span>
          </motion.h2>

          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 text-lg">
            Find quick answers about our machining capabilities, materials, and
            order process. Have more questions? Reach out — we’re always happy
            to assist.
          </p>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What information should I include for a quote?",
                a: "Please share detailed part drawings (STEP/PDF), material type, tolerances, finishing requirements, and expected quantities. This ensures we can provide an accurate and fast quotation.",
              },
              {
                q: "Do you support international shipping?",
                a: "Yes, we regularly export precision components to clients across India, Europe, and North America with full customs and compliance documentation.",
              },
              {
                q: "Can I visit your manufacturing facility?",
                a: "Absolutely! We encourage clients to visit our facility in Cheemasandra, Bangalore. Please contact us to schedule an appointment in advance.",
              },
              {
                q: "What materials can you work with?",
                a: "We specialize in machining aluminum, stainless steel, brass, titanium, and a wide range of engineering plastics and composites.",
              },
              {
                q: "How do you ensure quality and precision?",
                a: "Every component undergoes CMM inspection, surface testing, and digital traceability checks to ensure ISO-standard quality.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <AccordionItem index={i} question={faq.q} answer={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VISIT US SECTION ================= */}
      <section className="relative py-28 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white text-center overflow-hidden">
        {/* Decorative Animated SVGs */}
        <motion.div
          className="absolute top-10 left-16 text-blue-300/50"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l3 3" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-16 text-blue-300/50"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        </motion.div>

        {/* Glowing Background Light Orbs */}
        <motion.div
          className="absolute top-32 left-1/4 w-40 h-40 bg-blue-400/40 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-52 h-52 bg-blue-300/50 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold mb-6 drop-shadow-lg"
          >
            Visit Our <span className="text-blue-200">Facility</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Step inside our facility and experience precision manufacturing in
            motion. Get a firsthand look at how we craft excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <a
              href="mailto:sales@abindustries.in"
              className="inline-flex items-center gap-3 bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow-xl hover:bg-blue-50 hover:scale-[1.05] transition-all duration-300"
            >
              Schedule a Visit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
