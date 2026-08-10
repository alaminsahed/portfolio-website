import NavBar from "../components/Navbar";
import HeaderMain from "../components/HeaderMain";
import ImpactNumbers from "../components/ImpactNumbers";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Recommendation from "../components/Recommendation";
import ThinkingProcess from "../components/ThinkingProcess";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Collaborate from "../components/Collaborate";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/ui/BackToTop";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeaderMain />
      <ImpactNumbers />
      <About />
      <Skills />
      <Experience />
      <Recommendation />
      <ThinkingProcess />
      <Projects />
      <Blogs />
      <Collaborate />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
