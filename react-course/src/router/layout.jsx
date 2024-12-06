import { Outlet } from "react-router-dom";
import { Navbar } from "./narbar";

export function Layout() {
  return <div>
    <Navbar />
    <Outlet />
  </div>
}