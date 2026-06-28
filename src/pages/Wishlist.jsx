import { useCart } from "../context/CartContext";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useCart();

  return (
    <div className="cart-page">
      <h1>Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <h2>No products in wishlist.</h2>
      ) : (
        wishlist.map((item) => (
          <div
            className="cart-item"
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.name}
            />

            <div>
              <h3>{item.name}</h3>

              <p>₹{item.price}</p>

              <button
                className="remove-btn"
                onClick={() =>
                  removeFromWishlist(
                    item.id
                  )
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;