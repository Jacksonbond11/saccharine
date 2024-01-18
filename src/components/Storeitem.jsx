import React, { useState } from "react";

const Storeitem = ({ img1, img2, name, price, onItemSelect }) => {
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
    </div>
  );
};

export default Storeitem;
