import movieApp6 from "../assets/bilder/movieAppReact/movieApp6.png";
import eventApp2 from "../assets/bilder/eventApp/eventApp2.png";
import movieDatabase1 from "../assets/bilder/movieDatabase/movieDatabase1.png";

const codeProjects = [
  {
    id: 11,
    slug: "Neoncinema",
    title: "Neon cinema",
    description:
      "I detta arbete skulle en filmdatabas byggas med react där målet var att upptäcka fördelarna med ett ramverk. Jag tycker react har get mej strukturen som jag saknade innan, men det är lätt att tappa bort sig i alla komponenter. Designen skulle utforskas och diskuteras med valfri AI. Vi skulle ta fram konkreta designbeslut som färgpalett, typsnitt och fontstolekar för att sen tillsammans formullera en genomtänkt promt. Promten använde vi i Figma Make som genererade fram designen. Vi skulle skapa designen så lik vi kunde utan att kika på den färdiga koden. Projektet byggde vi sedan med react där vi använde oss av git project för att plannera upp och fördela arbetet.  ",
    image: movieApp6,
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
    image: eventApp2,
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
    image: movieDatabase1,
    link: "",
    collaboration: "Enskilt arbete",
    projectType: "Skarpt projekt",
    category: "",
    tech: ["Javascript", "CSS", "Figma"],
  },
];

export default codeProjects;
