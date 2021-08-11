import { Fragment } from "react";
import React, { useState } from "react";

import Meals from "./component/Meals/Meals";
import Header from "./component/Layout/Header";
import Cart from "./component/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(true);

  const showCartHandler = (props) => {
    setCartIsShown(true);
  };
  const hideCartHandler = (props) => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
