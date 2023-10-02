import { RouterProvider } from 'react-router';
import './App.css';
import { router } from './Router';

export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
