import "./App.css";
import Header from "./Components/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Components/Login/RequireAuth/RequireAuth";
import Blogs from "./Components/Blogs/Blogs";
import Inventory from "./Components/Inventory/Inventory";
import Delivered from "./Components/Delivered/Delivered";
import About from "./Components/About/About";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";

import MyItems from "./Components/MyItems/MyItems";
import Footer from "./Components/Shared/Footer/Footer";
import Home from "./Components/Home/Home/Home";
import ManageInventory from "./Components/ManageInventory/ManageInventory";
import NotFound from "./Components/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
        {/* <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route> */}
        <Route
          path="/manageinventory"
          element={<ManageInventory></ManageInventory>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
