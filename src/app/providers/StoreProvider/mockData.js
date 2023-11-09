import { FuturePet1Image, FuturePet2Image, PetCoutriesImage } from 'app/assets';

export const mockData = {
  projectsData: {
    projectsInfo: [
      {
        id: 1,
        image: PetCoutriesImage,
        title: {
          en: "Countries and Flags",
          es: "Los Países y Los Banderas",
          ru: "Страны и Флаги"
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
          ru: "Будущий Проект"
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
          ru: "Будущий Проект"
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
          ru: "React"
        }
      },
      "Future": {
        translations: {
          en: "Future",
          es: "Futuros",
          ru: "Будущие"
        }
      }
    }
  }
}