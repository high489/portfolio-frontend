import styles from './personal-qualities.module.scss';
import { useTranslation } from 'react-i18next';

import { HonestyIcon, JusticeIcon, EasyGoingIcon, BoardGamesIcon } from './assets';

const PersonalQualities = () => {
  const { t } = useTranslation();

  return (
    <div className={`${styles['personal-qualities']} grid`}>
      <div className={styles.quality}>
        <HonestyIcon className={styles['quality-icon']} />

        <div>
          <h3 className={styles['quality-title']}>93%</h3>
          <span className={styles['quality-subtitle']}>
            { t('ui.personalQualities.honesty') }
          </span>
        </div>
      </div>

      <div className={styles.quality}>
        <JusticeIcon className={styles['quality-icon']} />

        <div>
          <h3 className={styles['quality-title']}>88%</h3>
          <span className={styles['quality-subtitle']}>
            { t('ui.personalQualities.senseOfJustice') }
          </span>
        </div>
      </div>

      <div className={styles.quality}>
        <EasyGoingIcon className={styles['quality-icon']} />

        <div>
          <h3 className={styles['quality-title']}>99%</h3>
          <span className={styles['quality-subtitle']}>
            { t('ui.personalQualities.easyGoing') }
          </span>
        </div>
      </div>


      <div className={styles.quality}>
        <BoardGamesIcon className={styles['quality-icon']} />

        <div>
          <h3 className={styles['quality-title']}>81%</h3>
          <span className={styles['quality-subtitle']}>
            { t('ui.personalQualities.boardGames') }
          </span>
        </div>
      </div>
    </div>
  )
}

export { PersonalQualities };