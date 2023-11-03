import styles from './contact.module.scss';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation()
  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_fsxhlpa', 'template_ejiz8u5', formRef.current, 'SJO4SToV9TW9HL44f')
      .then((result) => {
        e.target.reset()
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }

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

        <form 
          ref={formRef}
          className={styles['contact-form']}
          onSubmit={sendEmail}
        >

          <div className={styles['contact-form-group']}>

            <div className={styles['contact-form-div']}>
              <input 
                name='user_name'
                type="text" 
                className={styles['contact-form-input']} 
                placeholder={ t('portfolio.contact.contactFormNamePh') } />
            </div>

            <div className={styles['contact-form-div']}>
              <input
                name='user_email'
                type="email" 
                className={styles['contact-form-input']} 
                placeholder={ t('portfolio.contact.contactFormEmailPh') } />
            </div>

          </div>

          <div className={styles['contact-form-div']}>
            <input
              name='subject'
              type="text" 
              className={styles['contact-form-input']} 
              placeholder={ t('portfolio.contact.contactFormSubjectPh') }
            />
          </div>

          <div className={`${styles['contact-form-div']} ${styles['contact-form-area']}`}>
            <textarea 
              name='message' id='' cols='30' rows='10'
              className={styles['contact-form-input']} 
              placeholder={ t('portfolio.contact.contactFormMessagePh') }
            ></textarea>
          </div>

          <input
            type='submit'
            value={ t('portfolio.contact.contactFormSubmit') }
            className={`${styles['contact-form-btn']} btn`}
          />

        </form>

      </div>
    </section>
  )
}

export { Contact };