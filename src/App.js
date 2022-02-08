import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Routers>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productsDetails" element={<ProductsDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Routers>
    </div>
  );
}

export default App;
