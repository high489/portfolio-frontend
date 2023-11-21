import styles from './about.module.scss';
import { useTranslation } from 'react-i18next';

import { MeIcon } from './assets';
import { PersonalQualities } from 'ui';

const resume = {
  en: 'https://docs.google.com/document/d/1XdNbo04bl0xqjDTxzZWR1USiQOYBvo7iryUUMBUweu4/export?format=pdf',
  es: 'https://docs.google.com/document/d/1Ay0KKkC9Q2b0sXydgCumB_gHTdukWnVY/export?format=pdf',
  ru: 'https://docs.google.com/document/d/1_Zob0cEcBg-lWzGm9vsnu5o5xIHXBuBB/export?format=pdf',
}

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className={`${styles.about} container section`} id="about">
      <h2 className='section-title'>
        <span className='section-title-text'>{ t('portfolio.about.sectionTitle') }</span>
      </h2>

      <div className={`${styles['about-container']} grid`}>
        
        <MeIcon className={styles['about-img']} />

        <div className={`${styles['about-data']} grid`}>

          <div className={styles['about-info']}>

            <div className={styles['about-description']}>
              <p>{ t('portfolio.about.infoP1') }</p>
              <p>{ t('portfolio.about.infoP2') }</p>
              <p>{ t('portfolio.about.infoP3') }</p>
            </div>
            
            <a 
              href={resume[i18n.resolvedLanguage]}
              className={`btn ${styles['about-download-resume-btn']}`}
            >
              { t('portfolio.about.downloadResumeBtn') }
            </a>
            
          </div>

          <div className={`${styles['about-positions']} grid`}>
          
            <h3 className={styles['positions-title']}>{ t('portfolio.about.positionsTitle') }</h3>

            <div className={`${styles.position} ${styles.frontend}`}>
              <div className={styles['position-title']}>
                <h3 className={styles['position-name']}>{ t('portfolio.about.position1') }</h3>
                <span className={styles['positions-quantity']}>
                  { t('portfolio.about.position1Exp') }
                </span>
              </div>
            </div>

            <div className={`${styles.position} ${styles['qa-engineer']}`}>
              <div className={styles['position-title']}>
                <h3 className={styles['position-name']}>{ t('portfolio.about.position2') }</h3>
                <span className={styles['positions-quantity']}>
                  { t('portfolio.about.position2Exp') }
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PersonalQualities />
    </section>
  )
}

export { About };