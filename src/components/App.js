import React from 'react';
import './App.css';
import { ProductList } from 'components/ProductList';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="content">
        <div className="header"></div>
        <div className="products_container">
          <div className="products_list">
            <Route path="/products" render={() => <ProductList />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
