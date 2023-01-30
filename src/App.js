import { Fragment } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <Fragment>
      <Cart />
      <Header />
      {/* main은 기본 HTML5 요소 */}
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
