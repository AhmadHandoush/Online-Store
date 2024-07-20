import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

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
import Contacts from "./pages/admin/pages/contacts";
import Loading from "./pages/Loading";
import Client from "./pages/Client";
import AllProducts from "./pages/Client/pages/Products";
import Services from "./pages/Client/pages/Services";
import Home from "./pages/Client/pages/Home";
import About from "./pages/Client/pages/About";
import Contact from "./pages/Client/pages/Contact";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ProductsProvider>
          <StateProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Loading />} />
                <Route path="/home" element={<Client />}>
                  <Route index element={<Navigate to={"overview"} />} />
                  <Route path="all-products" element={<AllProducts />} />
                  <Route path="overview" element={<Home />} />
                  <Route path="services" element={<Services />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="/auth" element={<AuthSwitch />} />
                <Route path="/admin-dashboard" element={<Admin />}>
                  <Route index element={<Navigate to="main" />} />
                  <Route path="main" element={<Main />} />
                  <Route path="categories" element={<Categories />} />
                  <Route path="brands" element={<Brands />} />
                  <Route path="products" element={<Products />} />

                  <Route path="orders" element={<Orders />} />
                  <Route path="users" element={<Users />} />
                  <Route path="contacts" element={<Contacts />} />
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
