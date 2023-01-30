import { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

const App = () => {
  const [cartIsShown, setCardIsShown] = useState(false);

  const showCartHandler = () => {
    setCardIsShown(true);
  };

  const HideCartHandler = () => {
    setCardIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={HideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      {/* main은 기본 HTML5 요소 */}
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
