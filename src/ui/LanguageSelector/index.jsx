import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './language-selector.module.scss';

import { EngFlag, RusFlag, EspFlag } from './assets';

const languages = [
  { code: 'eng', name: 'English', flag: EngFlag },
  { code: 'rus', name: 'Russian', flag: RusFlag },
  { code: 'esp', name: 'Spanish', flag: EspFlag },
]

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [showOptions, setShowOptions] = useState(false)

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
      setSelectedLanguage(language)
    }, 150)
    setShowOptions(false)
    //onLanguageSelest(language.code)
  }

  return (
    <div className={styles['language-selector']} ref={languageSelectorRef} onClick={() => setShowOptions(!showOptions)}>

      <div className={`${styles.language} ${styles['selected-language']}`}>
        <selectedLanguage.flag className={styles.flag} alt={selectedLanguage.name} />
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
          {languages
            .filter((language) => language.code !== selectedLanguage.code)
            .map((language) => (
              <div
                key={language.code}
                className={`${styles.language} ${styles['language-option']}`}
                onClick={() => handleLanguageSelect(language)}
              >
                <language.flag className={styles.flag} alt={language.name} />
              </div>
            ))}
        </div>
      </CSSTransition>

    </div>
  )
}

export { LanguageSelector };