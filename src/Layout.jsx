import { Outlet } from "react-router-dom";
import Home from "./pages/home/Home.jsx";

function Layout() {
  return (
    <section className="app">
      <header></header>
      <section className="wrapper">
        <main>
          <Outlet />
        </main>
      </section>
      <footer></footer>
    </section>
  );
}

export default Layout;
