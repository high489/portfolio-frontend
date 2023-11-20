import styles from './experience.module.scss';
import { useTranslation } from 'react-i18next';
import { useStore } from 'app/providers/StoreProvider';
import { useEffect } from 'react';
import { JobCard } from 'ui';

const Experience = () => {
  const { t, i18n } = useTranslation()
  //const resolvedLanguage = i18n.resolvedLanguage
  const { experienceData } = useStore()
  const experience = experienceData.experienceInfo.sort((a, b) => b.id - a.id)

  useEffect(() => {
    //console.log(experience)
  }, [])

  return (
    <section className={`${styles.experience} container section`} id="experience">
      <h2 className='section-title'>
        <span className='section-title-text'>
          { t('portfolio.experience.sectionTitle') }
        </span>
      </h2>

      <div className={`${styles['experience-container']} grid`}>
        <div className={`${styles['experience-timeline']} grid`}>
          {experience.map(job => {
            return (
              <JobCard
                key={job.id}
                language={i18n.resolvedLanguage}
                icon={job.icon}
                position={job.position}
                companyName={job.companyName}
                companyLocation={job.companyLocation}
                jobType={job.jobType}
                periodFrom={job.periodFrom}
                periodTo={job.periodTo}
                responsibilitiesTitle={job.responsibilitiesData.responsibilitiesTitle}
                responsibilities={job.responsibilitiesData.responsibilitiesInfo}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { Experience };