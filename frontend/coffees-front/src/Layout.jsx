import { Outlet } from "react-router-dom";
import TopNavbar from "./components/TopNavBar.jsx";

function Layout() {
  return (
    <>
      <TopNavbar />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
