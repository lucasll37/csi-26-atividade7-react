import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <header>
        <h1>Product App</h1>
        <nav>
          <Link to="/">Product List</Link>
          <Link to="/add">Add Product</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2023 Product App</p>s
      </footer>
    </div>
  );
};

export default Layout;
