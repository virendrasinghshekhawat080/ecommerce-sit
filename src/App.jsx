
import { BrowserRouter, Routes, Route } from "react-router-dom";


import CartProvider from "./context/CartContext";


// Components
import Navbar from "./Navbar";
import CategoryBar from "./CategoryBar";


// Pages
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import MyOrders from "./pages/MyOrders";
import About from "./pages/About";





function App() {


  return (


    <CartProvider>


      <BrowserRouter>



        {/* Main Navbar */}

        <Navbar />



        {/* Category Navbar */}

        <CategoryBar />





        <Routes>



          <Route

            path="/"

            element={<Home />}

          />



          <Route

            path="/about"

            element={<About />}

          />



          <Route

            path="/products"

            element={<Products />}

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