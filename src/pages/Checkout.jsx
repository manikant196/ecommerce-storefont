import { useCart } from "../context/CartContext";

function Checkout() {
  const { totalPrice } = useCart();

  const handleSubmit = (e) => {
  e.preventDefault();
  alert("Order placed successfully!");
};

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <form className="checkout-form">
        <input
          type="text"
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          placeholder="Email"
          required
        />

        <input
          type="text"
          placeholder="Address"
          required
        />

        <input
          type="text"
          placeholder="Phone Number"
          required
        />

        <h2>Total Amount: ₹{totalPrice}</h2>

        <button type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;