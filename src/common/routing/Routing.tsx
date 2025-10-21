import { selectIsLoggedIn } from "@/app/model/appSlice"
import { useAppSelector } from "@/common/hooks"
import { Routes, Route } from "react-router"
import { Desk, PageNotFound, ProtectedRoutes, Settings } from "@/common/components"
import { Login } from "@/features/auth/ui/Login/Login"
import { User } from "@/common/components"

export const Path = {
  Login: "/login",
  Home: "/",
  User: "/user",
  Fitness: "/fintess",
  Settings: "/settings",
  NotFound: "*",
} as const

export const Routing = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  debugger

  return (
    <Routes>
      <Route element={<ProtectedRoutes isAllowed={isLoggedIn} />}>
        <Route path={Path.Home} element={<Desk />} />
        <Route path={Path.User} element={<User />} />
        {/* <Route path={Path.Fitness} element={<Fitness />} /> */}
        {/* <Route path={Path.Settings} element={<Settings />} /> */}
      </Route>

      {/* <Route
        path={Path.Login}
        element={
          <ProtectedRoutes isAllowed={!isLoggedIn} redirectPath={Path.Home}>
            <Desk />
          </ProtectedRoutes>
        }
      /> */}
      <Route path={Path.Settings} element={<Settings />} />
      <Route path={Path.NotFound} element={<PageNotFound />} />
    </Routes>
  )
}
