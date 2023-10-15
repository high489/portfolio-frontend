import styles from './home.module.scss';
import { Link as LinkScroll } from 'react-scroll';

import { Developer } from './assets';
import { Socials, ScrollDown, Forest } from 'ui';

const Home = () => {
  return (
    <>
      <section className={`${styles.home} container`} id="home">
        <div className={styles.intro}>
          <Developer className={styles['home-img']} />
          <h1 className={styles['home-name']}>Vitalii Matskaniuk</h1>
          <span className={styles['home-speciality']}>Frontend Developer</span>

          <Socials />

          <LinkScroll to="contact" className="btn">Contact Me</LinkScroll>

          <ScrollDown />
        </div>
        
        <Forest />
      </section>
    </>
  )
}

export { Home };