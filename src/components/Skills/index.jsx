import styles from './skills.module.scss';
import { useStore } from 'app/providers/StoreProvider';
import { useTranslation } from 'react-i18next';

import { LanguageSkills, TechnicalSkills } from 'ui';

const Skills = () => {
  const { t, i18n } = useTranslation()
  const { technicalSkillsData, languageSkillsData } = useStore()

  return (
    <section className={`${styles.skills} container section`} id="skills">
      <h2 className='section-title'>
        <span className='section-title-text'>{ t('portfolio.skills.sectionTitle') }</span>
      </h2>

      <div className={`${styles['skills-container']} grid`}>
        
        <TechnicalSkills
          technicalSkillsInfo={technicalSkillsData.technicalSkillsInfo}
        />

        <LanguageSkills
          languageSkillsTitle={languageSkillsData.languageSkillsTitle}
          languageSkillsInfo={languageSkillsData.languageSkillsInfo}
          resolvedLanguage={i18n.resolvedLanguage}
        />

      </div>
    </section>
  )
}

export { Skills };