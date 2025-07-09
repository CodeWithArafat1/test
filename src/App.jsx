import About from "./components/About";
import Contact from "./components/Contact";
import Heor from "./components/Heor";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <NavBar />
      <Heor />
      <About />
      <Skills />
      <Resume />
      <Contact />
    </>
  );
};

export default App;
