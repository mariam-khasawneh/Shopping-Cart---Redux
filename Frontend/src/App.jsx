import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import Marketplace from "./Pages/marketplace";

function App() {
  return (
    <Provider store={store}>
      <Marketplace />
    </Provider>
  );
}

export default App;
