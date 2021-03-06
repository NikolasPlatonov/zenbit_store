import React, { useState } from 'react';
import './App.css';
import { ProductList } from 'components/ProductList/ProductList';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ProductDetails from './ProductDetails/ProductDetails';
import { Header } from './Header/Header';
import Cart from './Cart/Cart';

const data = [
  {
    isEditable: false,
    id: '4423b750-48ea-424a-9432-c77261bb4682',
    name: 'Handcrafted Soft Table',
    price: 407,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvO5W_d84YhIuFoFPnMcZWtwURU0U4C1UFIvrB0XnATAlx5AU9&usqp=CAU',
    origin: 'europe',
    createdAt: '2020-01-20T08:56:16.057Z',
    updatedAt: '2020-01-20T08:56:16.057Z',
  },
  {
    isEditable: false,
    id: 'b7c42263-d46d-4d4b-af2a-ccc076f90c99',
    name: 'Unbranded Metal Bacon',
    price: 990,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRizJ6586PmMM7iQfok44oSSyCSjeiKIzA8QSkfdFXjwz6zYIC9&usqp=CAU',
    origin: 'africa',
    createdAt: '2020-01-20T08:56:16.074Z',
    updatedAt: '2020-01-20T08:56:16.074Z',
  },
  {
    isEditable: false,
    id: 'b4565eee-bbe4-42ba-855d-83e55f3b4f3f',
    name: 'Sleek Metal Chips',
    price: 743,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfnrY4j88RPqgeeSy4i3m-nvR5GIDse3v9NwN-vJDroNjhdGQa&usqp=CAU',
    origin: 'usa',
    createdAt: '2020-01-20T08:56:16.081Z',
    updatedAt: '2020-01-20T08:56:16.081Z',
  },
  {
    isEditable: false,
    id: '41860650-6f9f-4491-8c10-d3ee504145d8',
    name: 'Unbranded Metal Table',
    price: 17,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsJgVngE9Frj8RejmR1r4_HhdbnPT76DFsvuFP3KVPqeGUhHf5&usqp=CAU',
    origin: 'europe',
    createdAt: '2020-01-20T08:56:16.087Z',
    updatedAt: '2020-01-20T08:56:16.087Z',
  },
  {
    isEditable: false,
    id: 'f4ecdd1a-022a-46d4-9d4c-1aa9b62febe2',
    name: 'Refined Fresh Ball',
    price: 498,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyFLIK7cmv5_UJ5dfhnU4TiR3bBsr2i82dEqqKqbMaW9FOHAci&usqp=CAU',
    origin: 'africa',
    createdAt: '2020-01-20T08:56:16.093Z',
    updatedAt: '2020-01-20T08:56:16.093Z',
  },
  {
    isEditable: false,
    id: '0198b079-c901-4a7a-a326-101d5ad8bd8f',
    name: 'Practical Frozen Fish',
    price: 588,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhKIL55KtAy549gfxAuHE4sq4K-ZiXrLbTwtDVfm64Jo2t9o4i&usqp=CAU',
    origin: 'asia',
    createdAt: '2020-01-20T08:56:16.098Z',
    updatedAt: '2020-01-20T08:56:16.098Z',
  },
  {
    isEditable: false,
    id: '332b655d-7706-4a37-a7ff-9d5b35fe85de',
    name: 'Incredible Granite Tuna',
    price: 119,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT8aXM1KuOye1kBhXUReZvMAMNpsG7SRSPyEkdy0-8KPTWVuuP&usqp=CAU',
    origin: 'africa',
    createdAt: '2020-01-20T08:56:16.108Z',
    updatedAt: '2020-01-20T08:56:16.108Z',
  },
  {
    isEditable: false,
    id: '8a5ed72d-d738-4e4d-9473-6f2ba1547748',
    name: 'Awesome Metal Mouse',
    price: 649,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT40SDIFWNWRqCj_lN40V0E8TgutchQ1hTfZAOW6eM1aE0heidK&usqp=CAU',
    origin: 'europe',
    createdAt: '2020-01-20T08:56:16.118Z',
    updatedAt: '2020-01-20T08:56:16.118Z',
  },
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [searchText, setSearchText] = useState('');

  const addToCart = (product) => {
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct) {
      const withoutExistingProduct = cart.filter((p) => p.id !== product.id);
      const updatedUnitsProduct = {
        ...existingProduct,
        units: existingProduct.units + 1,
      };
      setCart([...withoutExistingProduct, updatedUnitsProduct]);
      setCartCounter(cartCounter + 1);
    } else {
      setCart([...cart, { ...product, units: 1 }]);
      setCartCounter(cartCounter + 1);
    }
  };

  const deleteFromCart = (id, units) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    setCartCounter(cartCounter - units);
  };

  const changeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const searchProduct = (products) => {
    return products.filter((e) => {
      return (
        e.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
        e.origin.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
        null
      );
    });
  };

  return (
    <Router>
      <div className="content">
        <div className="header">
          <Header
            cartCounter={cartCounter}
            changeSearchText={changeSearchText}
            searchText={searchText}
          />
        </div>
        <div className="products_container">
          <div>
            <Route
              path="/cart"
              render={() => (
                <Cart cart={cart} deleteFromCart={deleteFromCart} />
              )}
            />

            <Route
              exact
              path="/products"
              render={() => (
                <ProductList
                  data={data}
                  addToCart={addToCart}
                  searchProduct={searchProduct}
                />
              )}
            />

            <Route
              path="/product/:id"
              render={() => (
                <ProductDetails data={data} addToCart={addToCart} />
              )}
            />
          </div>
          <div></div>
        </div>
      </div>
    </Router>
  );
};

export default App;
