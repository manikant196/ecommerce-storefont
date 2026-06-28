import { useState } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const filteredProducts = products
  .filter((product) => {
    return (
      (category === "All" ||
        product.category === category) &&
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  })
  .sort((a, b) => {
    if (sort === "low") {
      return a.price - b.price;
    }

    if (sort === "high") {
      return b.price - a.price;
    }

    return 0;
  });

  return (
    <>
      <Hero />

      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <div className="categories">
        <button onClick={() => setCategory("All")}>
          All
        </button>

        <button
          onClick={() =>
            setCategory("Electronics")
          }
        >
          Electronics
        </button>

        <button
          onClick={() =>
            setCategory("Accessories")
          }
        >
          Accessories
        </button>

        <button
          onClick={() =>
            setCategory("Gadgets")
          }
        >
          Gadgets
        </button>
      </div>

      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}

export default Home;