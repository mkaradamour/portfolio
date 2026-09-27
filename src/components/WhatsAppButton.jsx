import { FaWhatsapp } from "react-icons/fa6";
import { WHATSAPP_URL } from "../constants";
import { useT } from "../i18n";

// Floating chat button, pinned to the bottom corner (end side, so it flips in RTL).
const WhatsAppButton = () => {
  const { t } = useT();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("contact.whatsapp")}
      title={t("contact.whatsapp")}
      className="fixed bottom-5 end-5 md:bottom-8 md:end-8 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#1EBE5A] focus:outline-none focus-visible:ring-4 focus-visible:ring-palete3"
    >
      <FaWhatsapp size={32} aria-hidden="true" />
    </a>
  );
};

export default WhatsAppButton;
