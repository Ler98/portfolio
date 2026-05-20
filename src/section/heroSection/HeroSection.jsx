import "../../section/heroSection/heroSection.css";
import jag from "../../assets/bilder/jag.jpg";
import github from "../../assets/iconer/github.svg";
import linkedin from "../../assets/iconer/linkedin.svg";

function HeroSection() {
  return (
    <section className="hero">
      {/* <section className="hero__top"> */}
      <section className="hero__title-section">
        <section className="hero__title-center">
          <h1 className="hero__title">Lisa Eriksson</h1>
          <h2 className="hero__subtitle">Webbutvecklare & GrafiskDesigner</h2>
        </section>
      </section>
      <section className="img__profil-sectiion">
        <section className="img__border"></section>
        <img className="img__profil" src={jag} alt="profilbild" />
      </section>
      {/* </section> */}
      <section className="hero__about-section">
        <p className="hero__about-text">
          Jag brinner för att skapa design i Figma, illustrator och indesign.
          Det intresserar mig att se något växa fram från idé till slut. Css har
          väckt ett nytt intresse för hur design och användarupplevelsen kan
          byggas med kod. Jag tycker tillgänglighet är viktigt och vill
          förbättra förutsättningar för alla så upplevelsen blir den samma.
          <br />
          <br />
          Jag brinner för att skapa design i Figma, illustrator och indesign.
          Det intresserar mig att se något växa fram från idé till slut. Css har
          väckt ett nytt intresse för hur design och användarupplevelsen kan
          byggas med kod. Jag tycker tillgänglighet är viktigt och vill
          förbättra förutsättningar för alla så upplevelsen blir den samma.
        </p>
      </section>
      <section className="hero__nav-section">
        <a className="hero__nav" href="#kodprojekt">
          Kod-projekt
        </a>
        <a className="hero__nav" href="#kodprojekt">
          Design-projekt
        </a>
        {/* <section className="nav__ikon-section"> */}
        <a
          href="https://github.com/Ler98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="nav__ikon" src={github} alt="Länk till GitHub" />
        </a>
        <a
          href="https://linkedin.com/in/lisa-eriksson-580b601ba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="nav__ikon" src={linkedin} alt="link till linkedin" />
        </a>
      </section>
    </section>
  );
}

export default HeroSection;
