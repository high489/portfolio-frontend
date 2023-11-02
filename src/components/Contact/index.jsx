import styles from './contact.module.scss';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation()

  return (
    <section className={`${styles.contact} container section`} id="contact">
      <h2 className='section-title'>{ t('portfolio.contact.sectionTitle') }</h2>

      <div className={`${styles['contact-container']} grid`}>

        <div className={styles['contact-info']}>
          <h3 className={styles['contact-title']}>{ t('portfolio.contact.contactTitle') }</h3>
          <div className={styles['contact-details']}>
            <span className={styles['details-text']}>{ t('portfolio.contact.detailsText') }</span><br/>
            <span className={styles['details-email']}>vitalii.matskaniuk@gmail.com</span>
          </div>
        </div>

        <form action="" className={styles['contact-form']}>

          <div className={styles['contact-form-group']}>

            <div className={styles['contact-form-div']}>
              <input 
                type="text" 
                className={styles['contact-form-input']} 
                placeholder={ t('portfolio.contact.contactFormNamePh') } />
            </div>

            <div className={styles['contact-form-div']}>
              <input 
                type="email" 
                className={styles['contact-form-input']} 
                placeholder={ t('portfolio.contact.contactFormEmailPh') } />
            </div>

          </div>

          <div className={styles['contact-form-div']}>
            <input 
              type="text" 
              className={styles['contact-form-input']} 
              placeholder={ t('portfolio.contact.contactFormSubjectPh') }
            />
          </div>

          <div className={`${styles['contact-form-div']} ${styles['contact-form-area']}`}>
            <textarea 
              name='' id='' cols='30' rows='10'
              className={styles['contact-form-input']} 
              placeholder={ t('portfolio.contact.contactFormMessagePh') }
            ></textarea>
          </div>

          <button className={`${styles['contact-form-btn']} btn`}>
            { t('portfolio.contact.contactFormSubmit') }
          </button>

        </form>

      </div>
    </section>
  )
}

export { Contact };