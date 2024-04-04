import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AllClasses from './components/AllClasses/AllClasses';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/allClasses',
        element: <AllClasses />,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/allClasses/:id',
        element: <AllClasses />,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/aboutUs',
        element: <About />,
      },
      {
        path: '/contactUs',
        element: <Contact />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
