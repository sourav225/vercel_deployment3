import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Account from "./Components/Account";
import ProductPage from "./Components/ProductPage";
import ProductNavbar from "./Components/ProductNavbar";
import Cart from "./Components/Cart";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home refresh={true} />} />
        <Route path="/account" element={<Account />} />
        <Route path="/products" element={<ProductNavbar />} />
        <Route path="/productp/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
