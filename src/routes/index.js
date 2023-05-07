import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProductPage from "../pages/Product";
import ProductCart from "../pages/Product/ProductCart";

const publicRoutes = [
  {
    path: "/",
    component: <Login />,
  },
  { path: "/register", component: <Register /> },
];

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/product-page/:id", component: <ProductPage /> },
  { path: "/product-cart", component: <ProductCart /> },
];

export { authProtectedRoutes, publicRoutes };
