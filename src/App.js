import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopPage from "./pages/ShopPage";
import RootLayout from "./pages/Root";

function App() {
  // Router Path toi cac Page
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        { path: "shop", element: <ShopPage /> },
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "cart", element: <CartPage /> },
      ],
    },

    { path: "/checkout", element: <CheckoutPage /> },
    { path: "/detail/:productId", element: <DetailPage /> },
  ]);

  return <RouterProvider className="App" router={router}></RouterProvider>;
}

export default App;
