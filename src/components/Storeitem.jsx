import React, { useState } from "react";

const Storeitem = ({ img1, img2, name, price, onItemSelect, link }) => {
  const [currentImg, setCurrentImg] = useState(img1);
  const handleItemClick = () => {
    onItemSelect({ img1, img2, name, price });
  };
  return (
    <div className="max-w-5xl m-auto">
      <a href="#" onClick={handleItemClick}>
        <img
          src={currentImg}
          alt={name}
          className="max-h-[300px]"
          onMouseEnter={() => setCurrentImg(img2)}
          onMouseLeave={() => setCurrentImg(img1)}
        />
      </a>
      <p>
        <a href="#">{name}</a>
      </p>
      <p>${price}</p>
      <button className="bg-orange-500 text-black p-2 rounded-md">

      <p><a href={link} target="_blank">Buy now on Etsy</a></p>
      </button>
    </div>
  );
};

export default Storeitem;
