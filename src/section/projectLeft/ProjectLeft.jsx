import "../../section/projectLeft/projectLeft.css";
import test from "../../assets/bilder/test.jpg";

function ProjectLeft() {
  return (
    <section className="project">
      <section className="project__title-section">
        <h1 className="project__title">Kod-projekt</h1>
      </section>
      <section className="projectLeft__subtitle-section">
        <h2 className="project__subtitle">Projekt</h2>
        <p className="project__info">
          Webbutvecklare projekt i skolan där jag gjort en hemsida för katter
          och dess vänner. I detta projekt har jag fokuserat på API-anrop och en
          bra upplevelse för användaren.
        </p>
        <button className="project__button">Läs mer om projektet</button>
      </section>
      <section className="project__img-section">
        <img className="project__img" src={test} alt="projektbild" />
      </section>
    </section>
  );
}

export default ProjectLeft;
