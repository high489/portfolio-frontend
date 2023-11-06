import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import styles from './language-selector.module.scss';

const LanguageSelector = ({ handleHideSidebar, languages, currentLanguage }) => {
  const SelectedLanguageFlag = languages[currentLanguage].flag
  const { i18n } = useTranslation()
  const [ showOptions, setShowOptions ] = useState(false)
  const languageSelectorRef = useRef(null)
  const languageOptionsRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageSelectorRef.current && languageOptionsRef.current) {
        if (!languageSelectorRef.current.contains(event.target) && !languageOptionsRef.current.contains(event.target)) {
          setShowOptions(false)
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLanguageSelect = (language) => {
    setTimeout(() => {
      i18n.changeLanguage(language)
      handleHideSidebar()
    }, 150);
    setShowOptions(false)
    
  }

  return (
    <div
      className={styles['language-selector']}
      ref={languageSelectorRef} 
      onClick={() => setShowOptions(!showOptions)}
    >
      <div className={`${styles.language} ${styles['selected-language']}`}>
        <SelectedLanguageFlag className={styles.flag} />
      </div>
      
      <CSSTransition
        nodeRef={languageOptionsRef}
        in={showOptions}
        timeout={150}
        classNames={{
          enter: styles['language-options-enter'],
          enterActive: styles['language-options-enter-active'],
          exit: styles['language-options-exit'],
          exitActive: styles['language-options-exit-active'],
        }}
        unmountOnExit
      >
        <div className={styles['language-options']} ref={languageOptionsRef}>
          {Object.keys(languages)
            .filter(lang => lang !== currentLanguage)
            .map(lang => {
              let languageOption = languages[lang]
              return (
                <div
                  key={lang}
                  className={`${styles.language} ${styles['language-option']}`}
                  onClick={() => handleLanguageSelect(lang)}
                >
                  <languageOption.flag className={styles.flag} />
                </div>
              )
            })}
        </div>
      </CSSTransition>

    </div>
  )
}

export { LanguageSelector };