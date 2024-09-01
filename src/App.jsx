import About from "./components/About";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ArrowTop from "./components/ArrowTop";

const App = () => {
  return (
    <>
      <NavBar />
      <ArrowTop />
      <LandingPage />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </>
  );
};
export default App;
