import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Layout/RootLayout.tsx';
import HomePage from './Pages/HomePage.tsx';
import CoinPage from './Pages/CoinPage.tsx';
import AboutPage from './Pages/AboutPage.tsx';
import DetailedCoinsPage from './Pages/DetailedCoinsPage.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children :[
          {
              path:'/',   
              element: <HomePage/>,
          },
          {
            path:'/home',
            element:<HomePage/>,
          },
          {
            path:'/coin',
            element:<CoinPage/>,
          },
          {
            path:'/coin/:id',
            element:<DetailedCoinsPage/>,
          },
          {
            path:'/about',
            element:<AboutPage/>,
          },
        ]
    },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
);
