import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import "./App.css";
import Contact from "./components/Contact";
import SkillsAndServices from "./components/SkillsAndServices";
import WhatsAppButton from "./components/WhatsAppButton";
import { useState } from "react";
import { LocaleContext } from "./i18n";
import { ContactIntentContext } from "./contactIntent";

function App({ locale = "en" }) {
  const intentState = useState("fulltime");
  const font = locale === "ar" ? "font-['IBM_Plex_Sans_Arabic',Raleway,sans-serif]" : "font-[Raleway,'IBM_Plex_Sans_Arabic',sans-serif]";
  return (
    <LocaleContext.Provider value={locale}>
      <ContactIntentContext.Provider value={intentState}>
        <div className={`bg-secondary text-white ${font}`}>
          <Header />
          <Hero />
          <About />
          <Experience />
          <SkillsAndServices />
          <Portfolio />
          <Contact />
          <WhatsAppButton />
        </div>
      </ContactIntentContext.Provider>
    </LocaleContext.Provider>
  );
}

export default App;
