import React from "react";
import { Provider } from "react-redux";
import { store } from "./assets/Store";
import ProductList from "./assets/Components/ProductList";
import Cart from "./assets/Components/Cart";

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-8 text-center">Shopping Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <ProductList />
          </div>
          <div>
            <Cart />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
