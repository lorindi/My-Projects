import { useContext } from "react"
import { Contexts } from "../../contexts/Contexts"
import {  Navigate, Outlet } from "react-router-dom"
import Path from "../paths"

export default function AdminGuard() {

    const {isAdmin} = useContext(Contexts)

    if (!isAdmin) {
        return <Navigate to={Path.Home}/>
    }

    return (
            <Outlet/>
    )
}