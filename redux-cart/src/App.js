import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./styles/App.css"; // ✅ Importing new styles

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app-container">
          <h1>Redux E-Commerce Cart</h1>
          <div className="content">
            <ProductList />
            <Cart />
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
