import React, { useState } from "react";

const Itempage = ({ item, handleCartOpen, addToCart, handleItemChange }) => {
  const [size, setSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  function addQuantity() {
    setQuantity((e) => quantity + 1);
  }
  function subQuantity() {
    setQuantity((e) => quantity - 1);
  }

  return (
    <div>
      {showAlert ? (
        <div role="alert" className="alert shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <h3 className="font-bold">
              {item.name} has been added to your cart
            </h3>
          </div>
          <button className="btn btn-sm" onClick={() => handleCartOpen(true)}>
            view cart
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="flex justify-end max-w-6xl mt-2 mr-2">
        <button
          className="btn btn-square"
          onClick={() => {
            handleItemChange("");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="grid md:grid-cols-3 p-10 max-w-5xl m-auto">
        <div className="max-w-xl col-span-2">
          <img src={item.img1} alt=""></img>
        </div>
        <div>
          <div className="mt-4">
            <h3 className="text-5xl font-bold">{item.name}</h3>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold">${item.price}</p>
          </div>
          <div className="mt-4">
            <p>size</p>
            <select
              className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
              onChange={(e) => {
                setSize(e.target.value);
                console.log(size);
              }}
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
          <div className="mt-4">
            <p>quantity</p>
            <div className="flex align-middle items-center">
              {quantity > 1 ? (
                <button onClick={subQuantity} className="btn">
                  -
                </button>
              ) : (
                <button className="btn">-</button>
              )}
              <p className="p-3 m-2">{quantity}</p>
              <button onClick={addQuantity} className="btn">
                +
              </button>
            </div>
          </div>
          <div>
            <p>sold out of your size?</p>
            <p>
              sign up for the newsletter to be the first to know when we restock
            </p>
          </div>
          <div className="w-full p-0">
            <button
              className="btn w-full"
              onClick={() => {
                addToCart(item, size, quantity);
                setShowAlert(true);
                setTimeout(() => {
                  setShowAlert(false);
                }, 10000);
              }}
            >
              Add to cart
            </button>
          </div>
          <div className="w-full mt-2">
            <button className="btn w-full" onClick={() => handleCartOpen(true)}>
              View cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itempage;
