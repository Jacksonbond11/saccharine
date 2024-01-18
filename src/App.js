import Header from "./components/Header";
import Countdown from "./components/Countdown";
import Hero from "./components/Hero";
import MainShop from "./components/MainShop";
import { useState, useEffect } from "react";
import Itempage from "./components/Itempage";
import Cart from "./components/Cart";

function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const [cartOpen, setcartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const handleItemChange = (newItem) => {
    setSelectedItem(newItem);
  };

  const handleCartOpen = (isOpen) => {
    setcartOpen(isOpen);
  };
  const handleCartClose = (isClosed) => {
    setcartOpen(isClosed);
  };
  const calculateCartCount = () => {
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  };

  const addToCart = (item, size, quantity) => {
    setCart((currentCart) => {
      const newItem = { ...item, size, quantity };
      const updatedCart = [...currentCart, newItem];
      const newCartCount = updatedCart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      setCartCount(newCartCount);

      const newSubtotal = updatedCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setSubtotal(newSubtotal.toFixed(2));

      return updatedCart;
    });
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity >= 0) {
      setCart((currentCart) => {
        return currentCart.map((item, i) => {
          if (i === index) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
      });
    }
  };

  useEffect(() => {
    const newCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(newCartCount);

    const newSubtotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal.toFixed(2));
  }, [cart]);

  return (
    <div className="App">
      <Header
        handleCartOpen={handleCartOpen}
        handleCartClose={handleCartClose}
        handleItemChange={handleItemChange}
        cartCount={cartCount}
        subtotal={subtotal}
      />
      {cartOpen ? (
        <Cart cart={cart} updateQuantity={updateQuantity} subtotal={subtotal} />
      ) : !selectedItem ? (
        <>
          <Hero />
          <MainShop handleItemChange={handleItemChange} />
        </>
      ) : (
        <Itempage
          item={selectedItem}
          handleCartOpen={handleCartOpen}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}

export default App;
