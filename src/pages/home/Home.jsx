import Footer from "../../section/footer/Footer";
import HeroSection from "../../section/heroSection/HeroSection";
import ProjectLeft from "../../section/projectLeft/ProjectLeft";
import ProjectRight from "../../section/projectRight/ProjectRight";

function Home() {
  return (
    <section>
      <HeroSection />
      <ProjectLeft />
      <ProjectRight />
      <ProjectLeft />
      <ProjectRight />
      <Footer />
    </section>
  );
}

export default Home;
