import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AuthProvider } from "./contexts/AuthContext";
import AuthSwitch from "./pages/Auth";
import Admin from "./pages/admin";
import Main from "./pages/admin/pages/main";
import Categories from "./pages/admin/pages/categories";
import Brands from "./pages/admin/pages/brands";
import Orders from "./pages/admin/pages/orders";
import Users from "./pages/admin/pages/users";
import { StateProvider } from "./contexts/StateContext";
import NotFound from "./pages/notFound";
import { ProductsProvider } from "./contexts/ProductsContext";
import Products from "./pages/admin/pages/products";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ProductsProvider>
          <StateProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<AuthSwitch />} />
                <Route path="/admin-dashboard" element={<Admin />}>
                  <Route index element={<Navigate to="main" />} />
                  <Route path="main" element={<Main />} />
                  <Route path="categories" element={<Categories />} />
                  <Route path="brands" element={<Brands />} />
                  <Route path="products" element={<Products />} />

                  <Route path="orders" element={<Orders />} />
                  <Route path="users" element={<Users />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </StateProvider>
        </ProductsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
