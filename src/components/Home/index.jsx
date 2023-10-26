import styles from './home.module.scss';
import { useTranslation } from 'react-i18next';
import { Link as LinkScroll } from 'react-scroll';

import { Developer } from './assets';
import { Socials, ScrollDown, Forest } from 'ui';

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className={`${styles.home} container`} id="home">
        <div className={styles.intro}>
          <Developer className={styles['home-img']} />
          <h1 className={styles['home-name']}>{ t('portfolio.home.name') }</h1>
          <span className={styles['home-speciality']}>{ t('portfolio.home.speciality') }</span>

          <Socials />

          <LinkScroll to="contact" className="btn">{ t('portfolio.home.contactBtnText') }</LinkScroll>

          <ScrollDown text={ t('portfolio.home.scrollElementText') }/>
        </div>
        
        <Forest />
      </section>
    </>
  )
}

export { Home };