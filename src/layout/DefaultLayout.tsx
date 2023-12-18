import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export function DefaultLayout() {
    return(
        <div className="px-8 md:px-28 lg:px-[160px] py-[32px]">
            <Navbar/>
            <Outlet/>
        </div>
    )
}