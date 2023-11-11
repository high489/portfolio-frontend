import {
  HtmlIcon,
  CssIcon,
  SassIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  ReduxIcon,
  ReactRouterIcon,
  StyledIcon,
  WebpackIcon,
  GitIcon,
} from 'app/assets/skills';
import { FuturePet1Image, FuturePet2Image, PetCoutriesImage } from 'app/assets/projects';

export const mockData = {
  technicalSkillsData: {
    technicalSkillsInfo: [
      {
        id: 1,
        title: "HTML",
        icon: HtmlIcon,
        grade: 7,
      },
      {
        id: 2,
        title: "CSS",
        icon: CssIcon,
        grade: 4,
      },
      {
        id: 3,
        title: "Sass",
        icon: SassIcon,
        grade: 4,
      },
      {
        id: 4,
        title: "JavaScript",
        icon: JavaScriptIcon,
        grade: 6,
      },
      {
        id: 5,
        title: "TypeScript",
        icon: TypeScriptIcon,
        grade: 4,
      },
      {
        id: 6,
        title: "React",
        icon: ReactIcon,
        grade: 5,
      },
      {
        id: 7,
        title: "Redux",
        icon: ReduxIcon,
        grade: 4,
      },
      {
        id: 8,
        title: "React Router",
        icon: ReactRouterIcon,
        grade: 5,
      },
      {
        id: 9,
        title: "styled components",
        icon: StyledIcon,
        grade: 4,
      },
      {
        id: 10,
        title: "Webpack",
        icon: WebpackIcon,
        grade: 6,
      },
      {
        id: 11,
        title: "Git",
        icon: GitIcon,
        grade: 6,
      },
    ],
  },
  languageSkillsData: {
    languageSkillsTitle: {
      en: "Languages",
      es: "Idiomas",
      ru: "Языки",
    },
    languageSkillsInfo: [
      {
        id: 1,
        title: {
          en: "Russian",
          es: "Ruso",
          ru: "Русский",
        },
        levelName: {
          en: "Native",
          es: "Nativo",
          ru: "Родной",
        },
        levelPercentage: "100%",
        barColor: "#F76D57",
      },
      {
        id: 2,
        title: {
          en: "English",
          es: "Inglés",
          ru: "Английский",
        },
        levelName: "B1-B2",
        levelPercentage: "70%",
        barColor: "#45AAB8",
      },
      {
        id: 3,
        title: {
          en: "Spanish",
          es: "Español",
          ru: "Испанский",
        },
        levelName: "A1-A2",
        levelPercentage: "30%",
        barColor: "#506C7F",
      },
    ],
  },
  projectsData: {
    projectsInfo: [
      {
        id: 1,
        image: PetCoutriesImage,
        title: {
          en: "Countries and Flags",
          es: "Los Países y Los Banderas",
          ru: "Страны и Флаги",
        },
        stack: {
          framework: "React",
          stateManager: "Redux Toolkit",
          styles: "styled-components",
        },
        link: "https://high489.github.io/react-pet-countriesapi/",
        category: "React",
      },
      {
        id: 2,
        image: FuturePet1Image,
        title: {
          en: "The Future Project",
          es: "El Proyecto Futuro",
          ru: "Будущий Проект",
        },
        link: "#projects",
        category: "Future",
      },
      {
        id: 3,
        image: FuturePet2Image,
        title: {
          en: "The Future Project",
          es: "El Proyecto Futuro",
          ru: "Будущий Проект",
        },
        link: "#projects",
        category: "Future",
      },
    ],
    projectsCategoriesInfo: {
      "React": {
        translations: {
          en: "React",
          es: "React",
          ru: "React",
        }
      },
      "Future": {
        translations: {
          en: "Future",
          es: "Futuros",
          ru: "Будущие",
        },
      },
    },
  },
}