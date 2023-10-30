import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [productName, setProductName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:3001/products', { name: productName });
      setProductName(''); // Reset the form after successful submission
      alert('Product added successfully!');
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input 
            type="text" 
            value={productName} 
            onChange={e => setProductName(e.target.value)}
            required 
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
