import React, { useState } from "react";

const Itempage = ({ item, handleCartOpen, addToCart }) => {
  const [size, setSize] = useState("S");
  const [quantity, setQuantity] = useState(1);

  function addQuantity() {
    setQuantity((e) => quantity + 1);
  }
  function subQuantity() {
    setQuantity((e) => quantity - 1);
  }

  return (
    <div>
      <div className="grid grid-cols-3 p-10 max-w-5xl m-auto">
        <div className="max-w-xl col-span-2">
          <img src={item.img1} alt=""></img>
        </div>
        <div>
          <div className="mt-4">
            <h3 className="text-5xl font-bold">{item.name}</h3>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold">{item.price}</p>
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
              <button onClick={subQuantity} className="btn">
                -
              </button>
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
              onClick={() => addToCart(item, size, quantity)}
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
