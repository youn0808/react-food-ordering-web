import { Fragment } from "react";
import Meals from "./component/Meals/Meals";
import Header from "./component/Layout/Header";
import Cart from "./component/Cart/Cart";
function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
