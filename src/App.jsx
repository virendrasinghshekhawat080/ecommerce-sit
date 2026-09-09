
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartProvider from "./context/CartContext";

import Navbar from "./Navbar";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import MyOrders from "./pages/MyOrders";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <CartProvider>

      <BrowserRouter basename="/ecommerce-sit">

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />

          <Route
            path="/order-success"
            element={<OrderSuccess />}
          />

          <Route
            path="/my-orders"
            element={<MyOrders />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

        </Routes>

      </BrowserRouter>

    </CartProvider>
  );
}

export default App;