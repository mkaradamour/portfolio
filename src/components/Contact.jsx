import { useState } from "react";
import { MdEmail, MdLocationPin, MdPhone, MdFlight } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const EMAIL = "mohanadkaradamour@gmail.com";
const PHONE = "+963967304021";
const LINKEDIN = "https://www.linkedin.com/in/mohanad-karadamour-aa550711a/";

// Create a form at https://formspree.io and paste its ID (the part after /f/).
// Until then, submitting opens the visitor's email client instead.
const FORMSPREE_ID = "[TODO: Formspree form ID]";
const formspreeReady = !FORMSPREE_ID.startsWith("[TODO");

const inputClass =
  "w-full rounded bg-white text-primary p-3 text-base placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-palete3";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!formspreeReady) {
      const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} <${data.get("email")}>`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(res.statusText);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 py-24 bg-primary flex flex-col gap-12">
      <h2 className="text-3xl font-bold mx-auto text-center text-palete3">
        Contact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 container mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 text-base sm:text-lg">
          <p className="inline-flex items-center gap-2 self-start rounded-full border border-palete3 px-4 py-2 font-semibold text-white">
            <MdFlight className="text-palete3" aria-hidden="true" />
            Open to relocation to KSA / GCC
          </p>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 self-start rounded bg-[#0A66C2] px-5 py-3 font-semibold text-white hover:bg-[#004182]"
          >
            <FaLinkedin size={24} aria-hidden="true" /> Connect on LinkedIn
          </a>
          <a href={`mailto:${EMAIL}`} className="text-palete4 flex flex-row gap-2 items-center hover:text-palete3 [overflow-wrap:anywhere]">
            <MdEmail className="shrink-0" aria-hidden="true" /> {EMAIL}
          </a>
          <a href={`tel:${PHONE}`} className="text-palete4 flex flex-row gap-2 items-center hover:text-palete3" dir="ltr">
            <MdPhone className="shrink-0" aria-hidden="true" /> {PHONE}
          </a>
          <p className="text-palete4 flex flex-row gap-2 items-center">
            <MdLocationPin className="shrink-0" aria-hidden="true" /> Aleppo, Syria
          </p>
          <div className="flex flex-row gap-4">
            <a href="https://github.com/mkaradamour" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={32} className="text-palete4 hover:text-palete3" />
            </a>
            <a href={`https://wa.me/${PHONE.slice(1)}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp size={32} className="text-palete4 hover:text-palete3" />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="flex-1">
              <span className="sr-only">Name</span>
              <input type="text" name="name" required autoComplete="name" className={inputClass} placeholder="Name" />
            </label>
            <label className="flex-1">
              <span className="sr-only">Email</span>
              <input type="email" name="email" required autoComplete="email" className={inputClass} placeholder="Email" />
            </label>
          </div>
          <label>
            <span className="sr-only">Message</span>
            <textarea name="message" required rows="5" className={inputClass} placeholder="Message" />
          </label>
          <div className="flex flex-row items-center justify-end gap-4">
            <p role="status" className="text-palete4">
              {status === "sent" && "Thanks — your message was sent."}
              {status === "error" && `Something went wrong. Please email ${EMAIL}.`}
            </p>
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-5 py-2 rounded bg-palete3 text-primary font-semibold text-lg disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
