import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import "./App.css";
import Contact from "./components/Contact";
import SkillsAndServices from "./components/SkillsAndServices";
import { LocaleContext } from "./i18n";

function App({ locale = "en" }) {
  const font = locale === "ar" ? "font-['IBM_Plex_Sans_Arabic',Raleway,sans-serif]" : "font-[Raleway,'IBM_Plex_Sans_Arabic',sans-serif]";
  return (
    <LocaleContext.Provider value={locale}>
      <div className={`bg-secondary text-white ${font}`}>
        <Header />
        <Hero />
        <About />
        <SkillsAndServices />
        <Portfolio />
        <Contact />
      </div>
    </LocaleContext.Provider>
  );
}

export default App;
