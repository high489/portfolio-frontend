import styles from './technical-skills.module.scss';

const TechnicalSkills = ({ technicalSkillsInfo }) => {
  return (
    <div className={styles['technical-skills-list']}>
      {technicalSkillsInfo.map(({ id, title, icon }) => {
        let SkillIcon = icon

        return (
          <div className={styles['skill-box']} key={id}>
            <SkillIcon className={styles['skill-icon']}/>
            <span className={styles['skill-title']}>{ title }</span>
          </div>
        )
      })}
    </div>
  )
}

export { TechnicalSkills };