import { Outlet } from "react-router-dom";
import Home from "./pages/home/Home.jsx";

function Layout() {
  return (
    <section>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </section>
  );
}

export default Layout;
