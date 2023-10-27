import styles from './sidebar.module.scss';
import { useTranslation } from 'react-i18next';
import { Link as LinkScroll } from 'react-scroll';

import { LanguageSelector } from 'ui';
import {
  HomeIcon,
  AboutIcon,
  SkillsIcon,
  ExperienceIcon,
  ProjectsIcon,
  ContactIcon,
} from './assets';

const Sidebar = () => {
  const { i18n } = useTranslation()

  return (
    <>
      <aside className={styles.aside}>

        <LanguageSelector languages={i18n.options.resources} currentLanguage={i18n.resolvedLanguage} />

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