import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './routes/Home.jsx';
import Page from './routes/Page.jsx';
import NewsCategory from './routes/NewsCategory';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/solar',
    element: <Page pageId="e2ea2c07303730168600032b" />,
  },
  {
    path: 'biogas',
    element: <Page pageId="e3a3c7ef6561616f2600031f" />,
  },
  {
    path: '/fernwaerme',
    element: <Page pageId="e4282a5c3561349bbd000357" />,
  },
  {
    path: '/wind',
    element: <Page pageId="e57e444f3138387b880001e7" />,
  },
  {
    path: '/genosse-werden',
    element: <Page pageId="e5f57d546530346bee000101" />,
  },
  {
    path: '/news',
    element: <NewsCategory category="true" />,
  },

  {
    path: 'news/:id',
    element: <Page type="news" />,
  },
  {
    path: 'impressum',
    element: <Page pageId="e1a1882632616287a00002e6" />,
  },
  {
    path: 'datenschutz',
    element: <Page pageId="e23203266533385fce0003a9" />,
  },
  {
    path: 'kontakt',
    element: <Page pageId="f83c8f9761313743e30003c0" />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
