import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AuthProvider } from "./contexts/AuthContext";
import AuthSwitch from "./pages/Auth";
import Admin from "./pages/admin";
import Main from "./pages/admin/pages/main";
import Categories from "./pages/admin/pages/categories";
import Brands from "./pages/admin/pages/brands";
import Orders from "./pages/admin/pages/orders";
import Users from "./pages/admin/pages/users";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<AuthSwitch />} />
            <Route path="/admin-dashboard" element={<Admin />}>
              <Route index element={<Main />} />
              <Route path="categories" element={<Categories />} />
              <Route path="brands" element={<Brands />} />
              <Route path="products" element={<Brands />} />
              <Route path="orders" element={<Orders />} />
              <Route path="users" element={<Users />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
