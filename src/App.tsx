import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/products/Products";
import NavBar from "./components/navBar/NavBar";
import CartProducts from "./components/cartProducts/CartProducts";
import WishList from "./components/wishList/WishList";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<CartProducts />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
