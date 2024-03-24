import React from "react";
import Storeitem from "./Storeitem";

const inventory = [
  {
    id: 1,
    img1: "./SaccharineFinals/lollipopNobody.png",
    img2: "../SaccharineFinals/backNobody.png",
    name: "lollipop catastrophe",
    price: 24.99,
    link: "https://www.etsy.com/listing/1686622513/saccharine-streetwear-lollipop-tee?click_key=c7d4dbe0e5095a3c19c92505ad199f8a1594b46a%3A1686622513&click_sum=b45868ed&ref=shop_home_active_5&frs=1",
  },
  {
    id: 2,
    img1: "./SaccharineFinals/peppermintNobody.png",
    img2: "./SaccharineFinals/backNobody.png",
    name: "peppermint turmoil",
    price: 24.99,
    link: "https://www.etsy.com/listing/1687766572/saccharine-streetwear-peppermint-tee?click_key=33c13af09ab8cf1a455343d4470fc330c2a3473c%3A1687766572&click_sum=533aa6e8&ref=shop_home_active_1&frs=1",
  },
  {
    id: 3,
    img1:  "./SaccharineFinals/sundaeNobody.png",
    img2: "./SaccharineFinals/backNobody.png",
    name: "sundae morning",
    price: 24.99,
    link: "https://www.etsy.com/listing/1687765172/saccharine-streetwear-sundae-tee?click_key=d42ace41f836b13c712e1e81da7014bf9b183e64%3A1687765172&click_sum=4dde8abd&ref=shop_home_active_2&frs=1",
  },
  {
    id: 4,
    img1: "./SaccharineFinals/donutNobody.png",
    img2: "./SaccharineFinals/backNobody.png",
    name: "donut downturn",
    price: 24.99,
    link: "https://www.etsy.com/listing/1701949271/saccharine-streetwear-donut-tee?click_key=bcb414ad7990158ae0003ae215c68b4eeeb61d99%3A1701949271&click_sum=29c2c7c5&ref=shop_home_active_4&frs=1",
  },
  {
    id: 5,
    img1: "./SaccharineFinals/gummyNobody.png",
    img2: "./SaccharineFinals/backNobody.png",
    name: "gummy bear",
    price: 24.99,
    link: "https://www.etsy.com/listing/1701951401/saccharine-streetwear-gummy-bear-tee?click_key=528dea279fa72d476a126a4feab171dab8c43e5b%3A1701951401&click_sum=a3019504&ref=shop_home_active_3&frs=1",
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
            link={item.link}
            onItemSelect={handleItemChange}
          />
        ))}
      </div>
    </>
);
};

export default MainShop;
