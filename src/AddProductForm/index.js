// AddProductForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProductForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    discountPercentage: "",
    images: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the new product data to the server and handle the server response
    // For simplicity, I'm assuming the server will return the new product with an ID
    const newProduct = {
      ...formData,
      id: "new-product-id", // Replace with the actual ID from the server response
    };

    // Here you can update the list of products in the parent component (Products.js)
    // using a callback function passed as a prop.

    // After adding the new product, navigate back to the products list page
    navigate("/productsPage");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label>Price:</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />
      <label>Discount Percentage:</label>
      <input
        type="number"
        name="discountPercentage"
        value={formData.discountPercentage}
        onChange={handleChange}
      />
      <label>Images (comma-separated URLs):</label>
      <input
        type="text"
        name="images"
        value={formData.images}
        onChange={handleChange}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
