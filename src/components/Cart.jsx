const Cart = ({ cart, updateQuantity }) => {
  return (
    <div className="max-w-5xl m-auto">
      <div className="text-center mt-2 text-5xl">
        <h1>Cart</h1>
        <div className="">
          {cart.map((item, index) => (
            <div key={index} className="flex mb-4">
              <img src={item.img1} alt="" className="max-h-[200px]" />
              <div className="p-4 ml-4 text-left text-lg font-bold">
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>Size: {item.size}</p>
                <div>
                  <button
                    onClick={() =>
                      updateQuantity(index, Math.max(0, item.quantity - 1))
                    }
                  >
                    -
                  </button>
                  <span> {item.quantity} </span>
                  <button
                    onClick={() => updateQuantity(index, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;