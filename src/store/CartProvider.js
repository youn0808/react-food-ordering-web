import CartContext from "./cart-context";
const CartProvier = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
      {/* the reason using props.children is, in App.js when we use CartProvider it wrap many components and to access using this provider we need to put it  */}
    </CartContext.Provider>
  );
};

export default CartProvier;
