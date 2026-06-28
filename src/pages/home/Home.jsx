import Footer from "../../section/footer/Footer";
import HeroSection from "../../section/heroSection/HeroSection.jsx";
import ProjectLeft from "../../section/projectLeft/ProjectLeft";
// import ProjectRight from "../../section/projectRight/ProjectRight";
import codeProjects from "../../data/codeProjects";
import designProjects from "../../data/designProjects";

function Home() {
  return (
    <section>
      <HeroSection />
      <section className="project__title-section" id="kodprojekt">
        <h1 className="project__title">Kod-projekt</h1>
      </section>
      <ProjectLeft projects={codeProjects} />
      <section className="project__title-section" id="designprojekt">
        <h1 className="project__title">Design-projekt</h1>
      </section>
      <ProjectLeft projects={designProjects} />
      {/* <ProjectLeft reverse={true} /> */}
      <Footer />
    </section>
  );
}

export default Home;
