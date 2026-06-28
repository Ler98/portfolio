import movieApp6 from "../assets/bilder/movieAppReact/movieApp6.png";
import movieApp1 from "../assets/bilder/movieAppReact/movieApp1.png";
import movieApp2 from "../assets/bilder/movieAppReact/movieApp2.png";
import movieApp3 from "../assets/bilder/movieAppReact/movieApp3.png";
import movieApp12 from "../assets/bilder/movieAppReact/movieApp12.png";
import movieApp9 from "../assets/bilder/movieAppReact/movieApp9.png";
import eventApp2 from "../assets/bilder/eventApp/eventApp2.png";
import eventApp1 from "../assets/bilder/eventApp/eventApp1.png";
import eventApp3 from "../assets/bilder/eventApp/eventApp3.png";
import eventApp4 from "../assets/bilder/eventApp/eventApp4.png";
// import eventApp5 from "../assets/bilder/eventApp/eventApp5.png";
import movieDatabase1 from "../assets/bilder/movieDatabase/movieDatabase1.png";
import movieDatabase2 from "../assets/bilder/movieDatabase/movieDatabase2.png";
import movieDatabase3 from "../assets/bilder/movieDatabase/movieDatabase3.png";
import movieDatabase4 from "../assets/bilder/movieDatabase/movieDatabase4.png";
import movieDatabase5 from "../assets/bilder/movieDatabase/movieDatabase5.png";
// import movieDatabase4 from "../assets/bilder/movieDatabase/movieDatabase4.png";
// import movieDatabase3 from "../assets/bilder/movieDatabase/movieDatabase3.png";
// import movieDatabase2 from "../assets/bilder/movieDatabase/movieDatabase2.png";

const codeProjects = [
  {
    id: 11,
    slug: "Neoncinema",
    title: "Neon cinema",
    description:
      "I detta arbete skulle en filmdatabas byggas med react där målet var att upptäcka fördelarna med ett ramverk. Jag tycker react har get mej strukturen som jag saknade innan, men det är lätt att tappa bort sig i alla komponenter. Designen skulle utforskas och diskuteras med valfri AI. Vi skulle ta fram konkreta designbeslut som färgpalett, typsnitt och fontstolekar för att sen tillsammans formullera en genomtänkt promt. Promten använde vi i Figma Make som genererade fram designen. Vi skulle skapa designen så lik vi kunde utan att kika på den färdiga koden. Projektet byggde vi sedan med react där vi använde oss av git project för att plannera upp och fördela arbetet.  ",
    extendedDescription: "Mer info kommer snart",
    image: movieApp6,
    image2: movieApp2,
    image3: movieApp12,
    image4: movieApp9,
    link: "",
    collaboration: "grupparbete",
    projectType: "fiktivt projekt",
    category: "",
    tech: ["React", "CSS", "FigmaMake"],
  },
  {
    id: 22,
    slug: "Where It´s",
    title: "Where It´s",
    description:
      "Här ser du en eventapp som är skapad med react. I appen väljer du det event du är intresserad av, lägger eventet i varukorgen, skickar ordern och till sist får du en bekräftelse.  Projektet skulle innehålla bland annat api-handering, routing, useState och useEffect. För högre betyg krävdes fler krav så som externa biblotek som vi inte gått igenom i klassrummet, med mål att få höre förståelse för documentationer. Designen är byggd efter en färdig figmaskiss där jag har använt mig av färger, typsnitt och mått.",
    extendedDescription: "Mer info kommer snart",
    image: eventApp2,
    image2: eventApp3,
    image3: eventApp4,
    image4: eventApp1,
    link: "",
    collaboration: "Enskilt arbete",
    projectType: "Fiktivt projekt",
    category: "",
    tech: ["React", "CSS", "Figma"],
  },
  {
    id: 33,
    slug: "Mymoviedatabas",
    title: "My movie database",
    description:
      "Detta är en filmdatabas skapad med javascript. Användaren skulle kunna söka efter filmer, se en detaljeras lista om filmer och även kunna lägga till dem i favoriter. Jag har lagt till hovereffekt på fimlkorten, så textytan blir gul, vilket ger en kul detalj.",
    extendedDescription: "Mer info kommer snart",
    image: movieDatabase1,
    image2: movieDatabase2,
    image3: movieDatabase5,
    image4: movieDatabase3,
    link: "",
    collaboration: "Enskilt arbete",
    projectType: "Skarpt projekt",
    category: "",
    tech: ["Javascript", "CSS", "Figma"],
  },
];

export default codeProjects;
