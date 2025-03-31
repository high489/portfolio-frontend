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
import { QAIcon, FrontendIcon } from 'app/assets/experience';
import { 
  FuturePetImage,
  PetOnlineSchoolImage,
  PetCoutriesImage,
  PetTodoAppImage,
} from 'app/assets/projects';
import { LinkedInIcon, HhIcon, GitHubIcon } from 'app/assets/socials';

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
  experienceData: {
    experienceInfo: [
      {
        id: 1,
        category: "QA",
        icon: QAIcon,
        companyName: "ProcessMap",
        companyLocation: {
          en: "Miami, USA",
          es: "Miami, EE.UU.",
          ru: "Майами, США",
        },
        jobType: {
          en: "remote",
          es: "remoto",
          ru: "удаленно",
        },
        position: {
          en: "QA Engineer",
          es: "Ingeniero de Calidad (QA)",
          ru: "Тестировщик (QA)",
        },
        periodFrom: {
          en: "April 2016",
          es: "Abril 2016",
          ru: "Апрель 2016",
        }, 
        periodTo: {
          en: "June 2020",
          es: "Junio 2020",
          ru: "Июнь 2020",
        },
        responsibilitiesData: {
          responsibilitiesTitle: {
            en: "Responsibilities",
            es: "Responsabilidades",
            ru: "Обязанности",
          },
          responsibilitiesInfo: [
            {
              id: 1,
              description: {
                en: "Prepared the test plan: wrote and updated manual test cases for team use, maintaining optimal organization for maximum productivity.",
                es: "Preparación del plan de pruebas: escritura y actualización de escenarios. Optimización de escenarios para aumentar la eficiencia del plan.",
                ru: "Подготовка тест-плана: написание и обновление тестовых сценариев. Оптимизация сценариев для эффективности тест-плана.",
              },
            },
            {
              id: 2,
              description: {
                en: "Prepared the simulated software production environment for testing.",
                es: "Preparación del entorno de producción de software simulados para realizar las pruebas.",
                ru: "Подготовка среды для проведения тестирования.",
              },
            },
            {
              id: 3,
              description: {
                en: "Conducted the test plan. Produced error reports with step-by-step guidance to reproduce them.",
                es: "Realización del plan de pruebas. Elaboración de informes de errores con guía paso a paso para reproducirlos.",
                ru: "Проведение тестирования согласно подготовленному тест-плану. Составление отчетов по выявленным ошибкам с пошаговым описанием для их воспроизведения.",
              },
            },
            {
              id: 4,
              description: {
                en: "Drafted process documentation to standardize operating procedures and techniques of test plan.",
                es: "Escritura de la documentación sobre el plan de pruebas, configuración del entorno para realizarlo y proceso de pruebas.",
                ru: "Написание документации о тест-плане, настройке среды тестирования.",
              },
            },
            {
              id: 5,
              description: {
                en: "Collaborated with quality team members, client-side developers, server-side developers and leaders to monitor conformance to quality standards.",
                es: "Colaboración con desarrolladores de backend, de frontend, móviles, directores del proyecto y clientes para conseguir la calidad de producto requerida.",
                ru: "Взаимодействие между разработчиками серверной, клиентской частей ПО, тестировщиками и руководителями проекта для достижения требуемого уровня качества продукта",
              },
            },
            {
              id: 6,
              description: {
                en: "Worked with Agile and Scrum methodologies to accomplish project milestones and meet demanding timelines.",
                es: "Utilización de la metodología Agile (Scrum) para alcanzar los hitos del proyecto y cumplir con los plazos de entrega.",
                ru: "Взаимодействие с командой по методикам Agile (Scrum) для достижения поставленных целей в заданные сроки.",
              },
            },
          ],
        },
      },
      {
        id: 2,
        category: "Frontend",
        icon: FrontendIcon,
        companyName: "ProcessMap",
        companyLocation: {
          en: "Miami, USA",
          es: "Miami, EE.UU.",
          ru: "Майами, США",
        },
        jobType: {
          en: "remote",
          es: "remoto",
          ru: "удаленно",
        },
        position: {
          en: "Frontend developer",
          es: "Desarrollador de Frontend",
          ru: "Frontend разработчик",
        },
        periodFrom: {
          en: "June 2020",
          es: "Junio 2020",
          ru: "Июнь 2020",
        }, 
        periodTo: {
          en: "May 2021",
          es: "Mayo 2021",
          ru: "Май 2021",
        },
        responsibilitiesData: {
          responsibilitiesTitle: {
            en: "Responsibilities",
            es: "Responsabilidades",
            ru: "Обязанности",
          },
          responsibilitiesInfo: [
            {
              id: 1,
              description: {
                en: "Implemented new features for Web-client of product.",
                es: "Implementado nuevas características para cliente Web de producto.",
                ru: "Реализация новых возможностей для Web-клиента приложения.",
              },
            },
            {
              id: 2,
              description: {
                en: "Fixed Web-client errors.",
                es: "Corregidos errores de cliente Web.",
                ru: "Исправление ошибок на Web-клиенте.",
              },
            },
            {
              id: 3,
              description: {
                en: "Drafted documentation of completed tasks.",
                es: "Escritura de la documentación sobre tareas completadas.",
                ru: "Написание документации о завершенных задачах.",
              },
            },
          ],
        }, 
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
          framework: "React-JavaScript",
          stateManager: "Redux Toolkit",
          styles: "styled-components",
        },
        link: "https://high489.github.io/react-pet-countriesapi/",
        category: "React",
      },
      {
        id: 2,
        image: PetOnlineSchoolImage,
        title: {
          en: "Scheduler of Online School",
          es: "Horario\nde la Escuela en Línea",
          ru: "Расписание\nОнлайн Школы",
        },
        stack: {
          framework: "React-TypeScript",
          stateManager: "RTK Query",
          styles: "SASS/SCSS",
        },
        link: "https://high489.github.io/sirius-future-test-task/",
        category: "React",
      },
      {
        id: 3,
        image: PetTodoAppImage,
        title: {
          en: "To-Do App",
          es: "Aplicación de To-Do",
          ru: "Приложение To-Do",
        },
        stack: {
          framework: "React-TypeScript",
          stateManager: "Zustand",
          styles: "SASS/SCSS",
          tests: "Jest",
        },
        link: "https://high489.github.io/classic-todo-app/",
        category: "React",
      },
      {
        id: 4,
        image: FuturePetImage,
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
  socialsData: [
    {
      id: 1,
      link: "https://www.linkedin.com/in/vitalii-matskaniuk/",
      icon: LinkedInIcon,
    },
    {
      id: 2,
      link: "https://hh.ru/resume/3e931a00ff0c9fe43e0039ed1f5832776e7432",
      icon: HhIcon,
    },
    {
      id: 3,
      link: "https://github.com/high489",
      icon: GitHubIcon,
    },
  ],
}