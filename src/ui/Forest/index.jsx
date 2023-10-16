import styles from './forest.module.scss';

import { Sun, Tree1, Tree2, House } from './assets';

const Forest = () => {
  return (
    <div className={styles.forest}>
      <Sun className={`${styles['forest-element']} ${styles.sun}`} />
      <House className={`${styles['forest-element']} ${styles.house}`} />
      <Tree1 className={`${styles['forest-element']} ${styles.t1}`} />
      <Tree1 className={`${styles['forest-element']} ${styles.t2}`} />
      <Tree2 className={`${styles['forest-element']} ${styles.t3}`} />
      <Tree2 className={`${styles['forest-element']} ${styles.t4}`} />
      <Tree1 className={`${styles['forest-element']} ${styles.t5}`} />
    </div>
  )
}

export { Forest };