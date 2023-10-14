import styles from './socials.module.scss';

import { LinkedInIcon, GitHubIcon } from './assets';

const Socials = () => {
  return (
    <div className={styles.socials}>
      <a 
        href="https://www.linkedin.com/in/vitalii-matskaniuk/" 
        target='_blank' 
        rel="noreferrer" 
        className={styles['social-link']}
      >
        <LinkedInIcon />
      </a>

      <a 
        href="https://github.com/high489" 
        target='_blank' 
        rel="noreferrer" 
        className={styles['social-link']}
      >
        <GitHubIcon />
      </a>
    </div>
  )
}

export { Socials };