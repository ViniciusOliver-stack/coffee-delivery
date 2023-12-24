import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export function DefaultLayout() {
  return (
    <div className="w-[85%] m-auto py-[32px]">
      <Navbar />
      <Outlet />
    </div>
  )
}
