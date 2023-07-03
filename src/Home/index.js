import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My Online Store</h1>
      </header>
      <main>
        <img
          src="https://res.cloudinary.com/dxyphocwv/image/upload/v1688099132/samples/ecommerce/accessories-bag.jpg"
          alt="Welcome to My Online Store"
          style={{ width: '100%', height: 'auto' }}
        />
        <Link to="/products">Browse Products</Link>
      </main>
    </div>
  );
};

export default HomePage;
