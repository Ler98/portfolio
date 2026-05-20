import "../../section/projectLeft/projectLeft.css";
import "../../section/projectRight/projectRight.css";
import test from "../../assets/bilder/test.jpg";
import { useNavigate } from "react-router-dom";

function ProjectRight() {
  const navigate = useNavigate();
  return (
    <section className="project">
      <section className="project__title-section noBAckground"></section>

      <section className="project__img-section">
        <img className="project__img" src={test} alt="projektbild" />
      </section>
      <section className="projectRight__subtitle-section">
        <h2 className="project__subtitle">Projekt</h2>
        <p className="project__info">
          Webbutvecklare projekt i skolan där jag gjort en hemsida för katter
          och dess vänner. I detta projekt har jag fokuserat på API-anrop och en
          bra upplevelse för användaren.
        </p>
        <button
          onClick={() => navigate("/design/projekt")}
          className="project__button"
        >
          Läs mer om projektet
        </button>
      </section>
    </section>
  );
}

export default ProjectRight;
