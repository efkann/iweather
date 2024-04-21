import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PageLayout from './components/layouts/page-layout.tsx';
import RootLayout from './components/layouts/root-layout.tsx';
import SettingsLayout from './components/layouts/settings-layout.tsx';
import './index.css';
import ErrorPage from './routes/error-page.tsx';
import Root from './routes/root.tsx';
import Weather from './routes/weather.tsx';
import Settings from './routes/settings.tsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Root />,
      },
    ],
  },
  {
    // We use a different layout for other routes because we want to show a back button in the header
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/weather/:cityId',
        element: <Weather />,
      },
    ],
  },
  {
    element: <SettingsLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
