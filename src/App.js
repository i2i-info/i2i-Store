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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
function App() {
  return (
    <div className="App">
      <Routers>
        <div className="i2i-header d-flex justify-content-between">
          <a href="http://www.i2i-info.com/" className="text-white p-2">
            Developed by : Idea to Implementation Infotech
          </a>
          <div className="follow align-self-center">
            <a
              href="https://github.com/i2i-info/i2i-Store.git"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://www.linkedin.com/company/i2i-infotech"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/Idea.to.implementation.infotech"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://twitter.com/i2i_infotech"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitterSquare />
            </a>
            <a
              href="https://www.instagram.com/i2i_infotech"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagramSquare />
            </a>
          </div>
        </div>
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
