import styles from './skills.module.scss';
import { useStore } from 'app/providers/StoreProvider';
//import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageSkills } from 'ui';

const Skills = () => {
  const { t, i18n } = useTranslation()
  const { skillsData } = useStore()

  return (
    <section className={`${styles.skills} container section`} id="skills">
      <h2 className='section-title'>
        <span className='section-title-text'>{ t('portfolio.skills.sectionTitle') }</span>
      </h2>

      <div className={`${styles['skills-container']} grid`}>

        <div className={`${styles['skills-data']} ${styles['skills-list']} grid`}>skills icons</div>

        <div className={styles['skills-data']}>
          <LanguageSkills
            languageSkillsTitle={skillsData.languagesData.languagesTitle}
            languageSkills={skillsData.languagesData.languagesInfo}
            resolvedLanguage={i18n.resolvedLanguage}
          />
        </div>
      </div>
    </section>
  )
}

export { Skills };