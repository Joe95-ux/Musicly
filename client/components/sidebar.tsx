import Logo from "@/components/logo"
import { SidebarRoutes } from "@/components/sidebar-routes"

export const Sidebar = () => {
  return (
    <div className="h-full w-full border-r flex flex-col overflow-y-auto bg-background shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col px-6 w-full">
        <SidebarRoutes />
      </div>
    </div>
  )
}