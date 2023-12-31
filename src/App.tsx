import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Sale from "./pages/sale/sale";
import Product from "./pages/product/product";
import User from "./pages/user/user";
import NotFound from "./pages/notFound/notFound";

// components
import Drawer from "./components/drawer";
import { useState, useEffect } from "react";
import { PrivateRoute, AuthRoute } from "./utils/Router/ProtectedRout";
type Props = {};

export default function App({}: Props) {
  const [isAuth, setAuth] = useState(false);
  const [loading, setloading] = useState<boolean>(false);

  useEffect(() => {
   try {
    setloading(true);
    const token = localStorage.getItem("token");

    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
    setloading(false);
   } catch (error) {
    console.log(error);
   }
  }, []);

  if (loading) {
    return<div>Loading...</div>;
  }
  

  return (
    <BrowserRouter>
      {isAuth && <Drawer setAuth={setAuth}/>}
      <div style={{ marginLeft: isAuth ? 70 : 0 }}>
        <Routes>
          <Route path="/" element={<PrivateRoute isAuth={isAuth} />}>
            <Route path="/" element={<Home />} />
            <Route path="/sale" element={<Sale/>} />
            <Route path="/product" element={<Product />} />
            <Route path="/user" element={<User />} />
          </Route>
          <Route path="/" element={<AuthRoute isAuth={isAuth} />}>
            <Route path="/login" element={<Login setAuth={setAuth}/>}/>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}
