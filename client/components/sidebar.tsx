import Logo from "@/components/logo"
import { SidebarRoutes } from "@/components/sidebar-routes"
import { Skeleton } from "@/components/ui/skeleton";

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

Sidebar.skeleton = function SidebarSkeleton(){
  return(
    <>
        <div className="flex items-center gab-4 mb-2">
          <Skeleton className="h-10 w-[40%]" />
          <Skeleton className="h-10 w-10" />
        </div>
        <div className="flex items-center justify-between mb-2">
          <Skeleton className="h-10 w-[70%]" />
          <Skeleton className="h-10 w-[70%]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-10 w-[70%]" />
          <Skeleton className="h-10 w-[70%]" />
          <Skeleton className="h-10 w-[70%]" />
          <Skeleton className="h-10 w-[70%]" />
        </div>
      </>
  )
}