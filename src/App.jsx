import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import "./App.css";
import Contact from "./components/Contact";
import SkillsAndServices from "./components/SkillsAndServices";

function App() {
  return (
    <div className="bg-secondary text-white font-[Raleway]">
      <Header />
      <Hero />
      <About />
      <SkillsAndServices />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
