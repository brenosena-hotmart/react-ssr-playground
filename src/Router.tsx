import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment, lazy, ReactNode, Suspense } from 'react';

const Home = lazy(() => import('./pages/index'));
const Thinking = lazy(() => import('./pages/thinking'));
const NotFound = lazy(() => import('./components/NotFound'));

const ROUTES = [
  {
    path: '/',
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/thinking',
    element: (
      <Suspense>
        <Thinking />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense>
        <NotFound />
      </Suspense>
    ),
  },
];

type IsomorphicRouterProps = {
  children: ReactNode;
};

const IsomorphicRouter = ({ children }: IsomorphicRouterProps) => {
  if (typeof window === 'undefined') {
    return <>{children}</>;
  }

  return <BrowserRouter>{children}</BrowserRouter>;
};

export const Router = () => {
  return (
    <IsomorphicRouter>
      <Routes>
        {ROUTES.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </IsomorphicRouter>
  );
};
