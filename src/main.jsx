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
import Signup from './components/Login/signup';
import { Accordion } from '@material-tailwind/react';
import Guitar from '../public/intruments/guitar';
import Violin from '../public/intruments/violin';
import Drums from '../public/intruments/drums';
import Flute from '../public/intruments/flute';
import Saxophone from '../public/intruments/saxophone';
import Trumpet from '../public/intruments/trumpet';
import Clarinet from '../public/intruments/clarinet';
import Cello from '../public/intruments/cello';
import Harp from '../public/intruments/harp';

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
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/instruments/accordion',
        element: <Accordion />,
      },
      {
        path: '/instruments/guitar',
        element: <Guitar />,
      },
      {
        path: '/instruments/violin',
        element: <Violin />,
      },
      {
        path: '/instruments/drums',
        element: <Drums />,
      },
      {
        path: '/instruments/flute',
        element: <Flute />,
      },
      {
        path: '/instruments/saxophone',
        element: <Saxophone />,
      },
      {
        path: '/instruments/trumpet',
        element: <Trumpet />,
      },
      {
        path: '/instruments/clarinet',
        element: <Clarinet />,
      },
      {
        path: '/instruments/cello',
        element: <Cello />,
      },
      {
        path: '/instruments/harp',
        element: <Harp />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
