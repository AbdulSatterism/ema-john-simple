import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';
import Main from './Layout/Main';
import { productsAndCartLoader } from './Loaders/productsAndCartLoader';
import PrivateRoute from './Routes/PrivateRoute';


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main ></Main>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <PrivateRoute>
            <Inventory></Inventory>
          </PrivateRoute>
        },
        {
          path: '/shipping',
          element: <PrivateRoute>
            <Shipping></Shipping>
          </PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        { path: '/about', element: <About></About> },
      ]
    },

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;