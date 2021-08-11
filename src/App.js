import React, { useState } from "react";
import Meals from "./component/Meals/Meals";
import Header from "./component/Layout/Header";
import Cart from "./component/Cart/Cart";
import CartProvier from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (props) => {
    setCartIsShown(true);
  };
  const hideCartHandler = (props) => {
    setCartIsShown(false);
  };
  return (
    <CartProvier>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvier>
  );
}

export default App;
