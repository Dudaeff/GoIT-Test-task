import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import MyLoader from 'components/MyLoader/MyLoader';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<MyLoader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
