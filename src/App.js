import { Fragment } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App = () => {
  return (
    <Fragment>
      <Header />
      {/* main은 기본 HTML5 요소 */}
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
