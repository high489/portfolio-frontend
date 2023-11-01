import styles from './portfolio.module.scss';

import { Sidebar, Home, About, Contact } from 'components';
//import { Skills, Experience, Projects } from 'components';

const Portfolio = () => {
  return (
    <>
      <Sidebar />
      <main className={styles.main}>
        <Home />
        <About />
        {/* <Skills />
        <Experience />
        <Projects /> */}
        <Contact />
      </main>
    </>
  )
}

export { Portfolio };