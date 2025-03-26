import React from "react";
import "../styles/ProductList.css"; // ✅ Import styles

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <p>{product.name} - ${product.price}</p>
      <button onClick={() => addToCart({ type: "cart/addToCart", payload: product })}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
