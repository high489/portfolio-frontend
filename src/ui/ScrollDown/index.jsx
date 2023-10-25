import styles from './scroll-down.module.scss';
import { Link as LinkScroll } from 'react-scroll';

const ScrollDown = ({ text }) => {
  return (
    <div className={styles['scroll-down']}>
      <LinkScroll to="about" className={styles['mouse-wrapper']}>
        <span className={styles['scroll-name']}>{text}</span>
        <span className={styles.mouse}>
          <span className={styles.wheel}></span>
        </span>
      </LinkScroll>
    </div>
  )
}

export { ScrollDown };