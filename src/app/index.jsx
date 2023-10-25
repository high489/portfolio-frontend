import { Suspense } from 'react';
import './index.scss';

import { Portfolio } from 'pages';

const App = () => {

  return (
    <>
      <Portfolio />
    </>
  )
}

export default function WrappedApp() {
  return (
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  )
};