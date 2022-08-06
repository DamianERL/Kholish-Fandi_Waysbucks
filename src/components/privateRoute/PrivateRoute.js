import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
export default function PrivateRoute() {
    const [state] = useContext(UserContext)
  return (
    state.status === "admin" ? <Outlet /> : <Navigate to="/" />
  )
}
