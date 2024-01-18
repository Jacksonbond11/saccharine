import React from "react";
import Storeitem from "./Storeitem";

const inventory = [
  {
    id: 1,
    img1: "./clothing/tshirts/shirt1.png",
    img2: "./clothing/tshirts/shirt2.png",
    name: "lollipop catastrophe",
    price: "$34.99",
  },
  {
    id: 2,
    img1: "./clothing/tshirts/shirt4.png",
    img2: "./clothing/tshirts/shirt5.png",
    name: "peppermint turmoil",
    price: "$24.99",
  },
  {
    id: 3,
    img1: "./clothing/hoodies/hoodie1.png",
    img2: "./clothing/hoodies/hoodie2.png",
    name: "candy circus",
    price: "$44.99",
  },
  {
    id: 4,
    img1: "./clothing/hats/hat1.png",
    img2: "./clothing/hats/hat2.png",
    name: "bubbledustrial",
    price: "$19.99",
  },
];

const MainShop = ({ handleItemChange }) => {
  return (
    <>
      <div className="m-auto flex justify-center font-semibold text-5xl p-2 text-center">
        <h1>explore the collection</h1>
      </div>
      <div className="max-w-7xl grid md:grid-cols-4 p-6 m-auto gap-6">
        {inventory.map((item) => (
          <Storeitem
            key={item.id}
            img1={item.img1}
            img2={item.img2}
            name={item.name}
            price={item.price}
            onItemSelect={handleItemChange}
          />
        ))}
      </div>
    </>
  );
};

export default MainShop;
