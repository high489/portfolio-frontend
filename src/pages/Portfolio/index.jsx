import styles from './portfolio.module.scss';

import { Sidebar, Home, About, Skills, Experience, Projects, Contact } from 'components';

const Portfolio = () => {
  return (
    <>
      <Sidebar />
      <main className={styles.main}>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export { Portfolio };