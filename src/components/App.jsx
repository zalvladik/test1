import { Route, Routes } from 'react-router-dom'
import { SharedLayout } from "./SharedLayout";
import { Suspense, lazy } from 'react';
import NotFound from '../pages/NotFound';

const Home = lazy(() => import('../pages/Home'))
const PostsList = lazy(() => import('../pages/PostsList'))

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home/>} />
          <Route path='posts' element={<PostsList/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};