import styles from './language-skills.module.scss';

const LanguageSkills = ({ languageSkillsTitle, languageSkillsInfo, resolvedLanguage }) => {
  return (
    <div className={styles['language-skills']}>
      <h3 className={styles['language-skills-title']}>{ languageSkillsTitle[resolvedLanguage] }</h3>

      {languageSkillsInfo.map(({ id, title, levelName, levelPercentage, barColor}) => {
        
        let translatedTitle = title[resolvedLanguage]
        let translatedLevelName = 
          typeof levelName === 'object' 
          ? levelName[resolvedLanguage]
          : levelName

        return (
          <div className={styles['language-data']} key={id}>
            <div className={styles['language-title']}>
              <div className={styles['language-name']}>{ translatedTitle }</div>
              <div className={styles['language-level']}>{ translatedLevelName }</div>
            </div>

            <div className={styles['language-bar']}>
              <span 
                className={`${styles['language-percentage']}`}
                style={{ width: levelPercentage, backgroundColor: barColor }}
              ></span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { LanguageSkills };