import styles from './projects.module.scss';
import { useStore } from 'app/providers/StoreProvider';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LinkIcon } from './assets';

const Projects = () => {
  const { projectsData } = useStore();
  const [ projects, setProjects ] = useState(projectsData.projectsInfo)
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage
  const projectsCategories = Object.keys(projectsData.projectsCategoriesInfo)

  const filterProjectsByCategory = (projectsCategory) => {
    const filteredProjects = projectsData.projectsInfo.filter(el => el.category === projectsCategory)
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
          onClick={() => setProjects(projectsData.projectsInfo)}
        >
          { t('portfolio.projects.categoryAll') }
        </span>

        {projectsCategories.map(category => {
          return (
            <span
              key={category}
              className={styles['projects-filter']}
              onClick={() => filterProjectsByCategory(category)}
            >
              { projectsData.projectsCategoriesInfo[category].translations[language] }
            </span>
          )
        })}
        
      </div>
      
      <div className={`${styles['projects-container']} grid`}>
        {projects.map(({id, image, title, stack, link, category}) => {
          let ProjectImage = image
          let projectCategory = projectsData.projectsCategoriesInfo[category].translations[language]

          return (
            <div className={styles['project-card']} key={id}>
              <div className={styles['project-thumbnail']}>
                <ProjectImage className={styles['project-img']} />
                <div className={styles['project-mask']}></div>
              </div>

              <span className={styles['project-category']}>{ projectCategory }</span>
              <h3 className={styles['project-title']}>{ title[language] }</h3>
              <div className={styles['project-stack']}>
                <div
                  style={{display: stack ? "block" : "none"}}
                  className={styles['project-stack-title']}>
                  { t('portfolio.projects.stack') }:
                </div>
                {stack && Object.values(stack).map(value => (
                  <div key={value}>{value}</div>
                ))}
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