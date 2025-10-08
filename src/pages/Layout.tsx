import { Outlet } from "react-router"

function Layout({fadeLang}:
    {fadeLang:boolean}
) {
  return (
    <main className={`transition-opacity duration-500 ${fadeLang ? "opacity-0":"opacity-100"}`}>
        <Outlet />
    </main>
  )
} 

export default Layout