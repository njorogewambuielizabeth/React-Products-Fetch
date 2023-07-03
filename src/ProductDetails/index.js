import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './style.css';
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
  
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <div className="prod">
        <img src={product.images[1]} alt={product.title} className="images" />
        <h3>{product.title}</h3>
        <h3>${product.price}</h3>
        <h3>{product.discountPercentage}%</h3>
      </div>
    </div>
  );
};

export default ProductDetails;