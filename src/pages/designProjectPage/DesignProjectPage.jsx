import "./designProjectPage.css";
import test from "../../assets/bilder/test.jpg";
import test2 from "../../assets/bilder/test2.jpg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import designProjects from "../../data/designProjects";
import codeProjects from "../../data/codeProjects";

function DesignProjectPage({}) {
  const navigate = useNavigate();
  const { slug } = useParams();

  const allprojects = [...designProjects, ...codeProjects];
  const project = allprojects.find((p) => p.slug === slug);

  if (!project) {
    return <h1>Projekt hittades inte</h1>;
  }

  return (
    <section>
      <section className="design">
        <section className="design__title-section" id="kodprojekt"></section>
        <section className="design__subtitle-section">
          <h2 className="design__subtitle">{project.title}</h2>
        </section>
        <p className="design__info">{project.description}</p>
        <section className="design__img-section">
          <img className="design__img" src={test2} alt="projektbild" />
        </section>
        <p className="design__info">
          Webbutvecklare projekt i skolan där jag gjort en hemsida för katter
          och dess vänner. I detta projekt har jag fokuserat på API-anrop och en
          bra upplevelse för användaren.Webbutvecklare projekt i skolan där jag
          gjort en hemsida för katter och dess vänner. I detta projekt har jag
          fokuserat på API-anrop och en bra upplevelse för användaren.
        </p>
        <section className="design__img-section-x2">
          <img className="design__img-2x" src={test} alt="projektbild" />
          <img className="design__img-2x" src={test} alt="projektbild" />
        </section>
        <button onClick={() => navigate("/")} className="design__button">
          Tillbaka
        </button>
      </section>
    </section>
  );
}

export default DesignProjectPage;
