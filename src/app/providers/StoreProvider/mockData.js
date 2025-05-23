import {
  HtmlIcon,
  CssIcon,
  SassIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  ReduxIcon,
  NextJsIcon,
  ReactRouterIcon,
  StyledIcon,
  GitIcon,
  ZustandIcon,
  JestIcon,
  TestingLibraryIcon,
} from 'app/assets/skills';
import { QAIcon, FrontendIcon } from 'app/assets/experience';
import { 
  FuturePetImage,
  PetOnlineSchoolImage,
  PetCoutriesImage,
  PetTodoAppImage,
  PetWetherAppImage,
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
        title: "JavaScript",
        icon: JavaScriptIcon,
        grade: 6,
      },
      {
        id: 4,
        title: "TypeScript",
        icon: TypeScriptIcon,
        grade: 4,
      },
      {
        id: 5,
        title: "React",
        icon: ReactIcon,
        grade: 5,
      },
      {
        id: 6,
        title: "Next.js",
        icon: NextJsIcon,
        grade: 3,
      },
      {
        id: 7,
        title: "Redux",
        icon: ReduxIcon,
        grade: 4,
      },
      {
        id: 8,
        title: "Zustand",
        icon: ZustandIcon,
        grade: 5,
      },
      {
        id: 9,
        title: "React Router",
        icon: ReactRouterIcon,
        grade: 5,
      },
      {
        id: 10,
        title: "Sass",
        icon: SassIcon,
        grade: 4,
      },
      {
        id: 11,
        title: "styled components",
        icon: StyledIcon,
        grade: 4,
      },
      {
        id: 12,
        title: "Git",
        icon: GitIcon,
        grade: 6,
      },
      {
        id: 13,
        title: "Jest",
        icon: JestIcon,
        grade: 4,
      },
      {
        id: 14,
        title: "React Testing Library",
        icon: TestingLibraryIcon,
        grade: 4,
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
        levelPercentage: "60%",
        barColor: "#45AAB8",
      },
      {
        id: 3,
        title: {
          en: "Spanish",
          es: "Español",
          ru: "Испанский",
        },
        levelName: "A2-B1",
        levelPercentage: "40%",
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
          es: "Ingeniero de QA",
          ru: "Тестировщик (QA)",
        },
        periodFrom: {
          en: "April 2018",
          es: "Abril 2018",
          ru: "Апрель 2018",
        }, 
        periodTo: {
          en: "October 2022",
          es: "Octubre 2022",
          ru: "Октябрь 2022",
        },
        jobDescription: {
          en: "Tested new EHS platform features,\nensuring quality and compliance with requirements before releases",
          es: "Probé nuevas funcionalidades de la plataforma EHS, garantizando la calidad y el cumplimiento de los requisitos antes de los lanzamientos a producción",
          ru: "Проводил тестирование новой функциональности EHS-системы, гарантируя качество и соответствие требованиям перед релизами",
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
                en: "Prepared the test plan: wrote and updated manual test cases for team use, maintaining optimal organization for maximum productivity",
                es: "Diseñé el plan de pruebas, redacté y actualicé escenarios, y optimizé los casos de prueba para mejorar la eficiencia del plan",
                ru: "Разрабатывал тест-планы: писал и обновлял тестовые сценарии. Занимался оптимизацией сценариев для большей эффективности тест-планов",
              },
            },
            {
              id: 2,
              description: {
                en: "Prepared the simulated software production environment for testing",
                es: "Configuré entornos de software simulados para la ejecución de pruebas",
                ru: "Подготовка среды для проведения тестирования",
              },
            },
            {
              id: 3,
              description: {
                en: "Conducted the test plan. Produced error reports with step-by-step guidance to reproduce them",
                es: "Ejecuté el plan de pruebas y documenté los errores mediante informes detallados con pasos reproducibles",
                ru: "Проводил тестирование по тест-плану. Составлял пошаговое описание воспроизведения ошибок",
              },
            },
            {
              id: 4,
              description: {
                en: "Drafted process documentation to standardize operating procedures and techniques of test plan",
                es: "Escribí documentación sobre el plan de pruebas, la configuración del entorno y el proceso completo de validación",
                ru: "Подготавоивал документацию о тест-плане и настройке среды тестирования",
              },
            },
            {
              id: 5,
              description: {
                en: "Collaborated with quality team members, client-side developers, server-side developers and leaders to monitor conformance to quality standards",
                es: "Colaboré con desarrolladores backend, frontend y móviles, así como con project managers y clientes, para garantizar la calidad del producto final",
                ru: "Сотрудничал с разработчиками серверной, клиентской частей ПО, тестировщиками и руководителями проекта для достижения требуемого уровня качества продукта",
              },
            },
            {
              id: 6,
              description: {
                en: "Collaborated with the development team in an Agile (Scrum) environment, to accelerate bug fixes and ensure timely, high-quality releases",
                es: "Colaboré con el equipo en Agile (Scrum), para acelerar la resolución de errores y asegurar entregas puntuales y de alta calidad",
                ru: "Работал в команде по методологии Agile (Scrum), чтобы ускорить устранение ошибок и обеспечить своевременные и качественные релизы",
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
          es: "Desarrollador Frontend",
          ru: "Frontend разработчик",
        },
        periodFrom: {
          en: "October 2022",
          es: "Octubre 2022",
          ru: "Октябрь 2022",
        }, 
        periodTo: {
          en: "September 2023",
          es: "Septiembre 2023",
          ru: "Сентябрь 2023",
        },
        jobDescription: {
          en: "Developed features for an EHS platform (React),\nsuccessfully delivering multiple releases to production",
          es: "Desarrollé funcionalidades para la plataforma EHS de la empresa (React),\ncontribuyendo a varios lanzamientos exitosos en producción",
          ru: "Создавал и внедрял функциональность EHS-платформы (React),\nдоведя несколько релизов до продакшена",
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
                en: "Built responsive interfaces featuring routing and dynamic content updates, improving user experience and extending session length",
                es: "Creé interfaces responsivas con enrutamiento y gestión dinámica de contenido, mejorando la UX y aumentando la duración de las sesiones",
                ru: "Разрабатывал отзывчивые интерфейсы с роутингом и динамическим контентом, улучшая UX и увеличивая время сеанса пользователей",
              },
            },
            {
              id: 2,
              description: {
                en: "Implemented state management solutions (Redux) for efficient data handling and clear structure, accelerating the delivery of new features",
                es: "Implementé gestión de estado (Redux) para un manejo eficiente de datos y una estructura clara, acelerando la entrega de nuevas funcionalidades",
                ru: "Настраивал управление состоянием (Redux) для эффективной работы с данными, ускоряя внедрение новой функциональности",
              },
            },
            {
              id: 3,
              description: {
                en: "Integrated external APIs with typed data definitions (TypeScript), reducing errors, development and maintenance costs",
                es: "Integré APIs externas con definiciones tipadas de datos (TypeScript), reduciendo errores y costos de desarrollo y mantenimiento",
                ru: "Интегрировал внешние API с типизированным описанием  данных (TypeScript), снижая число ошибок, затраты на разработку и поддержку",
              },
            },
            {
              id: 4,
              description: {
                en: "Set up multilingual support (i18next), expanding global audience reach",
                es: "Configuré soporte multilingüe (i18next), logrando un mayor alcance global",
                ru: "Настраивал локализацию (i18next), увеличивая охват аудитории",
              },
            },
            {
              id: 5,
              description: {
                en: "Applied data caching to reduce server requests and bandwidth costs, improving UI performance and enhancing user experience (UX)",
                es: "Apliqué caché de datos, reduciendo solicitudes al servidor y costos de ancho de banda, mejorando el rendimiento de la interfaz y optimizando la experiencia de usuario (UX)",
                ru: "Применял кэширование данных, снижая количество запросов к серверу и затраты на трафик, улучшая производительность интерфейса и пользовательский опыт (UX)",
              },
            },
            {
              id: 6,
              description: {
                en: "Wrote unit tests (Jest, React Testing Library) to ensure expected application behavior, reducing potential development costs",
                es: "Escribí pruebas unitarias (Jest, React Testing Library) para garantizar el comportamiento esperado de la aplicación, reduciendo los costes potenciales de desarrollo",
                ru: "Писал модульные тесты (Jest, React Testing Library) для проверки ожидаемого поведения приложения, снижая потенциальные затраты на разработку",
              },
            },
            {
              id: 7,
              description: {
                en: "Leveraged semantic markup and SEO meta tags, increasing application visibility and improving search engine rankings",
                es: "Aproveché el marcado semántico y las etiquetas meta SEO, aumentando la visibilidad y mejorando el posicionamiento en los motores de búsqueda",
                ru: "Применял семантическую разметку и SEO метатеги, улучшая видимость приложения и повышая его позиции в поисковых системах",
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
        image: PetWetherAppImage,
        title: {
          en: "Weather App",
          es: "Aplicación de Clima",
          ru: "Приложение погоды",
        },
        stack: {
          framework: "Next.js-TypeScript",
          stateManager: "Zustand",
          styles: "SASS/SCSS",
          components: "Bootstrap",
        },
        link: "https://test-work26.vercel.app/",
        category: "Next.js",
      },
      {
        id: 5,
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
      "Next.js": {
        translations: {
          en: "Next.js",
          es: "Next.js",
          ru: "Next.js",
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