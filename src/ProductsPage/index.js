import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddProductForm from "../AddProductForm";
import './style.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await getProducts();
    })();
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products');
      const result = await response.json();
      setProducts(result.products);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAddProduct = async () => {
    const newProduct = {
      id: "new-product-id", 
      title: "New Product",
      price: 9.99,
      discountPercentage: 10,
      images: ["image-url"],
    };

   
    const queryParams = new URLSearchParams(newProduct).toString();

    
    navigate(`/add-product?${queryParams}`);
  };

  console.log({ products });
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <button className="add-button" onClick={handleAddProduct}>Add New Product</button>
      <div className="displayProducts">
        {products.map(item => (
          <div key={item.id}>
            <img alt="" src={item.images[1]} className="images" />
            <h3>{item.title}</h3>
            <h3>{item.price}</h3>
            <h3>{item.discountPercentage}</h3>
            <Link to={`/product/${item.id}`} className="btn">
              <button type="submit" className="view">View</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
