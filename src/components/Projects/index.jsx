import styles from './projects.module.scss';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { 
  PetCoutriesImage,
  FuturePet1Image,
  FuturePet2Image,
  LinkIcon,
} from './assets';

const projectsData = [
  {
    id: 1,
    image: PetCoutriesImage,
    title: "Countries Statistics",
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
    title: "Future Project",
    link: "#projects",
    category: "Future",
  },
  {
    id: 3,
    image: FuturePet2Image,
    title: "Future Project",
    link: "#projects",
    category: "Future",
  },
];

const Projects = () => {
  const { t } = useTranslation()
  const [projects, setProjects] = useState(projectsData)

  const filterProjectsByCategory = (projectsCategory) => {
    const filteredProjects = projectsData.filter(el => el.category === projectsCategory)
    setProjects(filteredProjects)
  }

  return (
    <section className={`${styles.projects} container section`} id="projects">
      <h2 className='section-title'>
        <span className='section-title-text'>{ t('portfolio.projects.sectionTitle') }</span>
      </h2>

      <div className={styles['projects-filters']}>
        <span 
          className={styles['projects-filter']}
          onClick={() => setProjects(projectsData)}
        >
          { t('portfolio.projects.categories.all') }
        </span>
        <span
          className={styles['projects-filter']}
          onClick={() => filterProjectsByCategory('React')}
        >
          { t('portfolio.projects.categories.react') }
        </span>
        <span 
          className={styles['projects-filter']}
          onClick={() => filterProjectsByCategory('Future')}
        >
          { t('portfolio.projects.categories.future') }
        </span>
      </div>
      
      <div className={`${styles['projects-container']} grid`}>
        {projects.map(({id, image, title, stack, link, category}) => {
          let ProjectImage = image

          return (
            <div className={styles['project-card']} key={id}>
              <div className={styles['project-thumbnail']}>
                <ProjectImage className={styles['project-img']} />
                <div className={styles['project-mask']}></div>
              </div>

              <span className={styles['project-category']}>{ category }</span>
              <h3 className={styles['project-title']}>{ title }</h3>
              <div className={styles['project-stack']}>
                {stack && Object.values(stack).map(value => {
                  return (
                    <div key={value}>{value}</div>
                  )
                })}
              </div>
              <a
                href={link}
                target={link[0] === '#' ? '_self' : '_blank'} 
                rel="noreferrer"
                className={styles['project-link']}
              >
                <LinkIcon />
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export { Projects };