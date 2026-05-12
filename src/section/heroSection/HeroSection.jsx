import "../../section/heroSection/heroSection.css";
import test from "../../assets/bilder/test.jpg";

function HeroSection() {
  return (
    <section className="hero">
      {/* <section className="hero__top"> */}
      <section className="hero__title-section">
        <h1 className="hero__title">Lisa Eriksson</h1>
        <h2 className="hero__subtitle">Webbutvecklare & GrafiskDesigner</h2>
      </section>
      <section className="img__profil-sectiion">
        <section className="img__border"></section>
        <img className="img__profil" src={test} alt="profilbild" />
      </section>
      {/* </section> */}
      <section className="hero__about-section">
        <p className="hero__about-text">
          Jag brinner för att skapa design i Figma, illustrator och indesign.
          Det intresserar mig att se något växa fram från idé till slut. Css har
          väckt ett nytt intresse för hur design och användarupplevelsen kan
          byggas med kod. Jag tycker tillgänglighet är viktigt och vill
          förbättra förutsättningar för alla så upplevelsen blir den samma.
        </p>
      </section>
      <section className="hero__link-section">
        <a className="hero__link" href="">
          Kod-projekt
        </a>
        <a className="hero__link" href="">
          Design-projekt
        </a>
      </section>
    </section>
  );
}

export default HeroSection;
