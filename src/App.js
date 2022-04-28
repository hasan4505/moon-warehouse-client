import "./App.css";
import Header from "./Components/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Components/Login/RequireAuth/RequireAuth";
import Inventory from "./Components/Inventory/Inventory";
import Delivered from "./Components/Delivered/Delivered";
import About from "./Components/About/About";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import WareHouse from "./Components/WareHouse/WareHouse";
import MyItems from "./Components/MyItems/MyItems";
import Footer from "./Components/Shared/Footer/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<WareHouse></WareHouse>}></Route>
        <Route path="/shop" element={<WareHouse></WareHouse>}></Route>
        <Route path="/orders" element={<MyItems></MyItems>}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/shipment"
          element={
            <RequireAuth>
              <Delivered></Delivered>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
