import "../../section/projectLeft/projectLeft.css";
import test from "../../assets/bilder/test.jpg";
import SushiYama7mindre from "../../assets/bilder/sushiyama/SushiYama7mindre.jpg";
import { useNavigate } from "react-router-dom";
import designProjects from "../../data/designProjects";
import codeProjects from "../../data/codeProjects";

function ProjectLeft({ projects }) {
  const navigate = useNavigate();
  return (
    <>
      {projects.map((project, index) => {
        return (
          <section key={project.id}>
            <section
              className={index % 2 === 1 ? "project reverse" : "project"}
            >
              <section className="project__content">
                <section className="projectLeft__subtitle-section">
                  <h2 className="project__subtitle">{project.title}</h2>
                  <p className="project__info">{project.description}</p>
                  <button
                    onClick={() => navigate(`/project/${project.slug}`)}
                    className="project__button"
                  >
                    Läs mer om projektet
                  </button>
                </section>
                <section className="project__img-section">
                  <img
                    className="project__img"
                    src={SushiYama7mindre}
                    alt="projektbild"
                  />
                </section>
              </section>
            </section>
          </section>
        );
      })}
    </>
  );
}

export default ProjectLeft;

//kopia på koden jag hade innan jag importerade designproject från mappen data

{
  /* <section className={reverse ? "project reverse" : "project"}>
      <section className="project__content">
        <section className="projectLeft__subtitle-section">
          <h2 className="project__subtitle">Projekt</h2>
          <p className="project__info">
            Webbutvecklare projekt i skolan där jag gjort en hemsida för katter
            och dess vänner. I detta projekt har jag fokuserat på API-anrop och
            en bra upplevelse för användaren.
          </p>
          <button
            onClick={() => navigate("/design/projekt")}
            className="project__button"
          >
            Läs mer om projektet
          </button>
        </section>
        <section className="project__img-section">
          <img className="project__img" src={test} alt="projektbild" />
        </section>
      </section>
    </section> */
}
