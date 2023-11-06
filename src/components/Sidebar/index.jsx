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
  MenuClosedIcon,
  MenuOpenedIcon,
} from './assets';
import { useEffect, useRef, useState } from 'react';

const Sidebar = () => {
  const { i18n } = useTranslation()
  const [ toggle, showMenu ] = useState(false)

  const sidebarRef = useRef(null);
  const menuBtnRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && menuBtnRef.current) {
        if (!sidebarRef.current.contains(event.target) && !menuBtnRef.current.contains(event.target)) {
          showMenu(false)
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

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

        <LanguageSelector 
          handleHideSidebar={() => showMenu(false)} 
          languages={i18n.options.resources} 
          currentLanguage={i18n.resolvedLanguage}
        />

        <nav className={styles.nav}>
          <ul className={styles['nav-list']}>

            <li className={styles['nav-item']}>
              <LinkScroll
                to="home"
                className={styles['nav-link']}
                onClick={() => showMenu(false)}
              >
                <HomeIcon />
              </LinkScroll>
            </li>

            <li className={styles['nav-item']}>
              <LinkScroll
                to="about"
                className={styles['nav-link']}
                onClick={() => showMenu(false)}
              >
                <AboutIcon />
              </LinkScroll>
            </li>

            <li className={styles['nav-item']}>
              <LinkScroll
                to="skills"
                className={styles['nav-link']}
                onClick={() => showMenu(false)}
              >
                <SkillsIcon />
              </LinkScroll>
            </li>

            <li className={styles['nav-item']}>
              <LinkScroll
                to="experience"
                className={styles['nav-link']}
                onClick={() => showMenu(false)}
              >
                <ExperienceIcon />
              </LinkScroll>
            </li>

            <li className={styles['nav-item']}>
              <LinkScroll
                to="projects"
                className={styles['nav-link']}
                onClick={() => showMenu(false)}
              >
                <ProjectsIcon />
              </LinkScroll>
            </li>

            <li className={styles['nav-item']}>
              <LinkScroll
                to="contact" 
                className={styles['nav-link']}
                onClick={() => showMenu(false)}
              >
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
        ref={menuBtnRef}
        className={
          toggle
          ? `${styles['nav-toggle']} ${styles['nav-toggle-open']}`
          : `${styles['nav-toggle']}`
        }
        onClick={() => showMenu(!toggle)}
      >
        {toggle ? <MenuOpenedIcon /> : <MenuClosedIcon />}
      </div>
    </>
  )
}

export { Sidebar };