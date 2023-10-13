import styles from './sidebar.module.scss';
import { Link as LinkScroll } from 'react-scroll';

import {
  LogoIcon,
  HomeIcon,
  AboutIcon,
  SkillsIcon,
  ExperienceIcon,
  ProjectsIcon,
  ContactIcon,
} from './assets';

const Sidebar = () => {
  return (
    <>
      <aside className={styles.aside}>

        <LinkScroll to="home" className={styles['nav-logo']}>
          <LogoIcon />
        </LinkScroll>

        <nav className={styles.nav}>
          <ul className={styles['nav-list']}>

            <li className={styles['nav-item']}>
              <LinkScroll to="home" className={styles['nav-link']}>
                <HomeIcon />
              </LinkScroll>
            </li>

            <li className={styles['nav-item']}>
              <LinkScroll to="about" className={styles['nav-link']}>
                <AboutIcon />
              </LinkScroll>
            </li>

            <li className={styles['nav-item']}>
              <LinkScroll to="skills" className={styles['nav-link']}>
                <SkillsIcon />
              </LinkScroll>
            </li>

            <li className={styles['nav-item']}>
              <LinkScroll to="experience" className={styles['nav-link']}>
                <ExperienceIcon />
              </LinkScroll>
            </li>

            <li className={styles['nav-item']}>
              <LinkScroll to="projects" className={styles['nav-link']}>
                <ProjectsIcon />
              </LinkScroll>
            </li>

            <li className={styles['nav-item']}>
              <LinkScroll to="contact" className={styles['nav-link']}>
                <ContactIcon />
              </LinkScroll>
            </li>

          </ul>
        </nav>

        <div className={styles['nav-footer']}>
          <span className={styles.copyright}>2023 - 2024</span>
        </div>

      </aside>
    </>
  )
}

export { Sidebar };