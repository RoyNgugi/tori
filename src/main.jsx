import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Layout and Pages
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import AllClasses from "./components/AllClasses/AllClasses";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Signup from "./components/Login/signup";
import ErrorPage from "./components/ErrorPage/ErrorPage";

// Auth
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { AuthProvider } from "./components/auth/AuthContext";

// Instruments
import Guitar from "./instruments/guitar";
import Violin from "./instruments/violin";
import Drums from "./instruments/Drums";
import Flute from "./instruments/flute";
import Saxophone from "./instruments/saxophone";
import Trumpet from "./instruments/trumpet";
import Clarinet from "./instruments/Clarinet";
import Cello from "./instruments/Cello";
import Harp from "./instruments/harp";
import Piano from "./instruments/piano";
import { homeLoader } from "./Loaders/homeloader";

// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // Public routes
      { index: true, element: <Home />, loader: homeLoader }, // Home at "/"
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },

      // Protected routes
      {
        element: <ProtectedRoute />,
        children: [
          { path: "home", element: <Home />, loader: homeLoader }, // Also accessible via "/home"
          { path: "allClasses", element: <AllClasses />, loader: homeLoader },
          { path: "aboutUs", element: <About /> },
          { path: "contactUs", element: <Contact /> },
          { path: "instruments/guitar", element: <Guitar /> },
          { path: "instruments/violin", element: <Violin /> },
          { path: "instruments/drums", element: <Drums /> },
          { path: "instruments/flute", element: <Flute /> },
          { path: "instruments/saxophone", element: <Saxophone /> },
          { path: "instruments/trumpet", element: <Trumpet /> },
          { path: "instruments/clarinet", element: <Clarinet /> },
          { path: "instruments/cello", element: <Cello /> },
          { path: "instruments/harp", element: <Harp /> },
          { path: "instruments/piano", element: <Piano /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);


