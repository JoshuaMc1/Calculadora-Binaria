import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <main className="container h-screen flex flex-col justify-center items-center">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
