import React from "react";
import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cart/cartSlice";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css"; // ✅ Import styles

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "TV", price: 1000 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={dispatch} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
