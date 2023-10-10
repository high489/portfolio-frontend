import styles from './app.module.scss';
import { useState } from 'react';

import { Portfolio } from 'pages';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button className={styles.test} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Portfolio />
      </div>
    </>
  )
}

export default App
