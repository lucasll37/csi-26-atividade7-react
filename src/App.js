import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/add" element={<AddProduct />} />
          <Route path="/" element={<ProductList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
