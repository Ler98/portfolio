import { Outlet } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

function Layout() {
  return (
    <section className="app">
      <header></header>
      <section className="wrapper">
        <main>
          <ScrollToTop />
          <Outlet />
        </main>
      </section>
      <footer></footer>
    </section>
  );
}

export default Layout;
