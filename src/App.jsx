import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import "./App.css";
import Contact from "./components/Contact";
import axios from "axios";

function App() {
  // axios.get("http://midi.atwebpages.com/public/api/articles").then((res) => {
  //   console.log(res.data);
  // })
  return (
    <div className="bg-secondary [#14213D] text-white font-[Raleway]">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
