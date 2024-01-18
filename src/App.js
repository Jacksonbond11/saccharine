import Header from "./components/Header";
import Countdown from "./components/Countdown";
import Hero from "./components/Hero";
import MainShop from "./components/MainShop";
import { useState } from "react";
import Itempage from "./components/Itempage";
import Cart from "./components/Cart";

function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const [cartOpen, setcartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

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

      return updatedCart;
    });
  };

  const updateQuantity = (index, newQuantity) => {
    setCart(
      cart.map((item, i) => {
        if (i === index) {
          const updatedItem = { ...item, quantity: newQuantity };
          calculateCartCount();
          return updatedItem;
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      <Header
        handleCartOpen={handleCartOpen}
        handleCartClose={handleCartClose}
        handleItemChange={handleItemChange}
        cartCount={cartCount}
      />
      {cartOpen ? (
        <Cart cart={cart} updateQuantity={updateQuantity} />
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
