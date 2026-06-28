import "../../section/heroSection/heroSection.css";
import jag from "../../assets/bilder/Jag.jpg";
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
          {/* Jag brinner för att skapa design i Figma, illustrator och indesign.
          Det intresserar mig att se något växa fram från idé till slut. Css är
          en rolig del som har väckt ett nytt intresse för hur design och
          användarupplevelsen kan byggas med kod. Jag tycker tillgänglighet är
          viktigt och vill förbättra förutsättningar för alla så upplevelsen
          blir den samma. */}
          Jag brinner för att skapa design i Figma, Illustrator och InDesign.
          Det jag tycker är roligast är att få utveckla en idé från skiss till
          en färdig produkt. Jag gillar att kombinera kreativitet med funktion
          och skapa lösningar som är tydliga, genomtänkta och enkla att använda.
          <br />
          <br />
          Under min utbildning till webbutvecklare har jag fått ett stort
          intresse för frontend. Jag tycker om att bygga upp en design med HTML
          och CSS och se hur en idé växer fram i webbläsaren. Programmering är
          fortfarande nytt för mig och jag utvecklar mina kunskaper steg för
          steg. Även om JavaScript ibland är en utmaning tycker jag att det är
          motiverande när jag förstår något nytt och får koden att fungera.
          <br /> <br /> Jag har också arbetat med React under utbildningen och
          tycker om den struktur som ramverket ger när man bygger
          webbapplikationer. Varje projekt har lärt mig något nytt och gjort mig
          mer trygg i mitt sätt att arbeta.
          <br />
          <br />
          Tillgänglighet är något jag tycker är viktigt. Jag vill skapa
          webbplatser som fungerar för så många människor som möjligt och ge
          alla en bra användarupplevelse. Jag är nyfiken, tycker om att
          utvecklas och ser fram emot att fortsätta lära mig mer inom både
          design och webbutveckling.
          <br />
          <br />
        </p>
      </section>
      <section className="hero__nav-section">
        <a className="hero__nav" href="#kodprojekt">
          Kod-projekt
        </a>
        <a className="hero__nav" href="#designprojekt">
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
