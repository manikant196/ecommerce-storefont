import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const {addToCart,addToWishlist,} = useCart();

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>
      <p className="rating">
        ⭐ {product.rating}
      </p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      <button
        className="wishlist-btn"
        onClick={() =>
        addToWishlist(product)}>
        ❤️ Wishlist
      </button>
    </div>
  );
}

export default ProductCard;