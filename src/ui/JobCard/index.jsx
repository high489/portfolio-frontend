import styles from './job-card.module.scss';
import { useState } from 'react';

import { ArrowDown } from './assets';

const JobCard = ({
  language,
  icon,
  position,
  companyName,
  companyLocation,
  jobType,
  periodFrom,   
  periodTo,
  jobDescription,
  responsibilitiesTitle,
  responsibilities,
}) => {
  const JobIcon = icon
  const [ toggle, showResponsibilities ] = useState(false)

  return (
    <div className={styles['job-card']}>
      <div className={styles['job-icon']}>
        <JobIcon />
      </div>
      
      <h2 className={styles['job-position']}>{position[language]}</h2>

      <div className={styles['job-company']}>
        <span className={styles['company-name']}>
          { window.innerWidth > 576 ? `${companyName}, ` : companyName}
        </span>
        <span className={styles['company-location']}>
          {`${companyLocation[language]} (${jobType[language]})`}
        </span>
      </div>

      <div className={styles['job-period']}>
        {`${periodFrom[language].toUpperCase()} - ${periodTo[language].toUpperCase()}`}
      </div>

      <div className={styles['job-description']}>
        {jobDescription[language]}
      </div>

      <div 
        className={styles['responsibilities-wrapper']}
        style={{ display: toggle ? 'block' : 'inline-block' }}
      >
        <div 
          className={styles['responsibilities-title-wrapper']}
          onClick={() => showResponsibilities(!toggle)}
        >
          <div className={styles['responsibilities-title']}>
            {`${responsibilitiesTitle[language]}${window.innerWidth > 1024 ? ':' : ''}`}
          </div>
          <ArrowDown className={`${styles['responsibilities-arrow']} ${toggle ? styles['arrow-up'] : ''}`} />
        </div>
        
        <ul 
          className={styles['responsibilities-list']}
          style={{ display: window.innerWidth > 1024 ? 'block' : (toggle ? 'block' : 'none')  }}
        >
          {responsibilities.map(({id, description}) => (
              <li className={styles['responsibility']} key={id}>{description[language]}</li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}

export { JobCard };