import { useContext } from "react"
import { Contexts } from "../../contexts/Contexts"
import {  Navigate, Outlet } from "react-router-dom"
export default function AuthGuard(props) {

    const {isAuthenticated} = useContext(Contexts)

    if (!isAuthenticated) {
        return <Navigate to="/login"/>
    }

    return (
            <Outlet/>
    )
}