import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';

const router = createBrowserRouter([
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
