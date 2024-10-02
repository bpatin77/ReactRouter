import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <p>Colors</p>
        <nav id='navbar'>
          {/* Use NavLink if the link is meant for site navigation */}
          <NavLink to="/blue">Blue</NavLink>
          <NavLink to="/red">Red</NavLink>
        </nav>
        {/* Outlet means render the children components from the route */}
        <Outlet />{/**/}
      </header>
    </>
  );
}
