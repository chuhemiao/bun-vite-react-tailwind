import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './components/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
]);
