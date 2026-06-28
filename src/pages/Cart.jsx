import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty.</h2>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img
            src={item.image}
            alt={item.name}
          />

          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <div className="quantity">
              <button
                onClick={() =>
                  decreaseQuantity(item.id)
                }
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  increaseQuantity(item.id)
                }
              >
                +
              </button>
            </div>

            <button
              className="remove-btn"
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h2>Total: ₹{totalPrice}</h2>

      <Link to="/checkout">
        <button className="checkout-btn">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}

export default Cart;