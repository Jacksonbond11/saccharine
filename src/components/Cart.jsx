const Cart = ({ cart, updateQuantity, subtotal }) => {
  return (
    <div className="max-w-4xl m-auto bg-base-200 min-h-[100vh]">
      <div className="max-w-3xl m-auto">
        <div className="text-center pt-2 text-5xl">
          <h1>Cart</h1>
          <div className="mt-4 md:flex align-middle justify-between">
            <div>
              {cart.map((item, index) => (
                <div key={index} className="flex md:mb-4 p-4">
                  <img
                    src={item.img1}
                    alt=""
                    className="md:max-h-[200px] max-h-[150px]"
                  />
                  <div className="p-4 md:ml-4 text-left text-lg font-bold">
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>Size: {item.size}</p>
                    <div>
                      {item.quantity > 1 ? (
                        <button
                          className="btn"
                          onClick={() =>
                            updateQuantity(
                              index,
                              Math.max(0, item.quantity - 1)
                            )
                          }
                        >
                          -
                        </button>
                      ) : (
                        <button className="btn">-</button>
                      )}
                      <span className="p-3 m-2"> {item.quantity} </span>
                      <button
                        className="btn"
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col  items-center">
              <div className="text-3xl font-bold mt-6">
                <h2>Total: ${subtotal}</h2>
              </div>
              <button className="btn border-teal-300 mt-6 md:w-full w-1/2">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
