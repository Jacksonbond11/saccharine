import React from "react";
import Storeitem from "./Storeitem";

const inventory = [
  {
    id: 1,
    img1: "./SaccharineFinals/lollipopNobody.png",
    img2: "../SaccharineFinals/backNobody.png",
    name: "lollipop catastrophe",
    price: 24.99,
  },
  {
    id: 2,
    img1: "./SaccharineFinals/peppermintNobody.png",
    img2: "./SaccharineFinals/backNobody.png",
    name: "peppermint turmoil",
    price: 24.99,
  },
  {
    id: 3,
    img1:  "./SaccharineFinals/sundaeNobody.png",
    img2: "./SaccharineFinals/backNobody.png",
    name: "sundae morning",
    price: 24.99,
  },
  {
    id: 4,
    img1: "./SaccharineFinals/donutNobody.png",
    img2: "./SaccharineFinals/backNobody.png",
    name: "donut downturn",
    price: 24.99,
  },
  {
    id: 5,
    img1: "./SaccharineFinals/gummyNobody.png",
    img2: "./SaccharineFinals/backNobody.png",
    name: "gummy bear",
    price: 24.99,
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
