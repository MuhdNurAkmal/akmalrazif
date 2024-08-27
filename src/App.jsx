import About from "./components/About";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <NavBar />
      <LandingPage />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};
export default App;
