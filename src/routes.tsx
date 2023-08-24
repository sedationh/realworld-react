import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Article from "./pages/Article";
import User from "./pages/User";
import Setting from "./pages/Setting";
import Create from "./pages/Create";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/article/:slug",
        element: (
          <Auth>
            <Article />
          </Auth>
        ),
      },
      {
        path: "/user/:username",
        element: (
          <Auth>
            <User />
          </Auth>
        ),
      },
      {
        path: "/setting",
        element: (
          <Auth>
            <Setting />
          </Auth>
        ),
      },
      {
        path: "/create/:slug?",
        element: (
          <Auth>
            <Create />
          </Auth>
        ),
      },
    ],
  },
]);

export default router;
