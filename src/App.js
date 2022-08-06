import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar/navbar";

// import pages
import LandingPage from "./pages/LandingPage";
import DetailProduct from "./pages/DetailProductPage";
import Cart from "./pages/CartPage";
import Profile from "./pages/Profile";
import AddProduct from "./pages/AddProduct"
import AddToping from "./pages/AddToping";
import Transaction from "./pages/Transaction";

import PrivateRoute from "./components/privateRoute/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail-product" element={<DetailProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/" element={<PrivateRoute/>}>
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/add-toping" element={<AddToping />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
