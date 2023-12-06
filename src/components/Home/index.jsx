import styles from './home.module.scss';
import { useTranslation } from 'react-i18next';
import { useStore } from 'app/providers/StoreProvider';
import { Link as LinkScroll } from 'react-scroll';

import { Developer } from './assets';
import { Socials, ScrollDown, ParallaxScroll, Forest } from 'ui';

const Home = () => {
  const { t } = useTranslation()
  const { socialsData } = useStore()

  return (
    <>
      <section className={`${styles.home} container`} id="home">
        <div className={styles.intro}>
          <Developer className={styles['home-img']} />

          <h1 className={styles['home-name']}>{ t('portfolio.home.name') }</h1>

          <span className={styles['home-speciality']}>{ t('portfolio.home.speciality') }</span>

          <a
            href="https://www.codewars.com/users/high489"
            target='_blank' 
            rel="noreferrer"
          >
            <img 
              className={styles['home-codewars-badge']}
              src="https://www.codewars.com/users/high489/badges/micro?theme=light"
              alt="codewars"
            />
          </a>
             
          <Socials socialsData={socialsData}/>

          <LinkScroll to="contact" className={`btn ${styles['home-contact-btn']}`}>{ t('portfolio.home.contactBtnText') }</LinkScroll>

          <ScrollDown text={ t('ui.scrollElementText') }/>
        </div>
      </section>
      <ParallaxScroll 
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          width: '100%'
        }}
        speed={0.5}
      >
        <Forest />
      </ParallaxScroll>
    </>
  )
}

export { Home };