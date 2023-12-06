import styles from './contact.module.scss';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { validateContactForm } from 'app/utils';

const Contact = () => {
  const { t } = useTranslation()
  const [ formData, setFormData ] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  })
  const [ errors, setErrors ] = useState({})
  const formRef = useRef()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleInputFocus = (e) => {
    const { name } = e.target
    setErrors({
      ...errors,
      [name]: undefined,
    })
  }

  const sendEmail = (e) => {
    e.preventDefault()

    const formData = {
      user_name: formRef.current.user_name.value,
      user_email: formRef.current.user_email.value,
      subject: formRef.current.subject.value,
      message: formRef.current.message.value,
    }

    const formErrors = validateContactForm(formData);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return
    }

    setErrors({})

    emailjs.sendForm('service_fsxhlpa', 'template_ejiz8u5', formRef.current, 'SJO4SToV9TW9HL44f')
      .then((result) => {
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: '',
        })
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }

  return (
    <section className={`${styles.contact} container section`} id="contact">
      <h2 className='section-title'>
        <span className='section-title-text'>{ t('portfolio.contact.sectionTitle') }</span>
      </h2>

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
          noValidate
          autoComplete='off'
        >

          <div className={styles['contact-form-group']}>

            <div className={styles['contact-form-div']}>
              <input 
                name='user_name'
                type="text"
                value={formData.user_name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                className={`${styles['contact-form-input']} ${errors.user_name ? styles.invalid : ''}`}
                placeholder={ t('portfolio.contact.contactFormNamePh') }
              />

              <span
                className={styles['input-hint']}
                style={{display: errors.user_name ? 'block' : 'none'}}
              >
                {formData.user_name.length === 0
                ? t('portfolio.contact.FormRequiredHint')
                : t('portfolio.contact.FormNameHint')}
              </span>
            </div>

            <div className={styles['contact-form-div']}>
              <input
                name='user_email'
                type="email"
                value={formData.user_email}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                className={`${styles['contact-form-input']} ${errors.user_email ? styles.invalid : ''}`}
                placeholder={ t('portfolio.contact.contactFormEmailPh') }
              />

              <span
                className={styles['input-hint']}
                style={{display: errors.user_email ? 'block' : 'none'}}
              >
                {formData.user_email.length === 0
                ? t('portfolio.contact.FormRequiredHint')
                : t('portfolio.contact.FormEmailHint')}
              </span>
            </div>

          </div>

          <div className={styles['contact-form-div']}>
            <input
              name='subject'
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className={`${styles['contact-form-input']} ${errors.subject ? styles.invalid : ''}`}
              placeholder={ t('portfolio.contact.contactFormSubjectPh') }
            />
            <span
              className={styles['input-hint']}
              style={{display: errors.subject ? 'block' : 'none'}}
            >
              {formData.subject.length === 0
                ? t('portfolio.contact.FormRequiredHint')
                : t('portfolio.contact.FormSubjectHint')}
            </span>
          </div>

          <div className={`${styles['contact-form-div']} ${styles['contact-form-area']}`}>
            <textarea 
              name='message' id='' cols='30' rows='10'
              value={formData.message}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className={`${styles['contact-form-input']} ${errors.message ? styles.invalid : ''}`}
              style={{ paddingTop: '1.25rem' }}
              placeholder={ t('portfolio.contact.contactFormMessagePh') }
            ></textarea>
            <span
              className={styles['input-hint']}
              style={{display: errors.message ? 'block' : 'none'}}
            >
              {formData.message.length === 0
                ? t('portfolio.contact.FormRequiredHint')
                : t('portfolio.contact.FormMessageHint')}
            </span>
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