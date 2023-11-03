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
  MenuIcon,
} from './assets';
import { useEffect, useRef, useState } from 'react';

const Sidebar = () => {
  const { i18n } = useTranslation()
  const [toggle, showMenu] = useState(false)

  const sidebarRef = useRef(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;

    const preventTouchMove = (event) => {
      event.preventDefault();
    };

    if (sidebar) {
      sidebar.addEventListener('touchmove', preventTouchMove);
    }

    return () => {
      if (sidebar) {
        sidebar.removeEventListener('touchmove', preventTouchMove);
      }
    };
  }, []);

  return (
    <>
      <aside 
        className={
          toggle
          ? `${styles.aside} ${styles['show-menu']}`
          : `${styles.aside}`
        }
        ref={sidebarRef}
      >

        <LanguageSelector languages={i18n.options.resources} currentLanguage={i18n.resolvedLanguage} />

        <nav className={styles.nav}>
          <ul className={styles['nav-list']}>

            <li className={styles['nav-item']}>
              <LinkScroll to="home" className={styles['nav-link']}>
                <HomeIcon />
              </LinkScroll>
            </li>

            <li className={styles['nav-item']}>
              <LinkScroll to="about" offset={0} className={styles['nav-link']}>
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

      <div 
        className={
          toggle
          ? `${styles['nav-toggle']} ${styles['nav-toggle-open']}`
          : `${styles['nav-toggle']}`
        }
        onClick={() => showMenu(!toggle)}
      >
        <MenuIcon />
      </div>
    </>
  )
}

export { Sidebar };