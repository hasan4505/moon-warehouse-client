import Header from "./Components/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Components/Blogs/Blogs";
import Inventory from "./Components/Inventory/Inventory";
import About from "./Components/About/About";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import Footer from "./Components/Shared/Footer/Footer";
import Home from "./Components/Home/Home/Home";
import NotFound from "./Components/Shared/NotFound/NotFound";
import AddItems from "./Components/AddItems/AddItems";
import ManageItems from "./Components/ManageItems/ManageItems";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

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
        <Route path="/addItems" element={<AddItems></AddItems>}></Route>

        <Route
          path="/manageItems"
          element={
            <RequireAuth>
              <ManageItems></ManageItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="/items" element={<Inventory></Inventory>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
