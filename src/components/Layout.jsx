import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <br />
      <br />
      <br />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
