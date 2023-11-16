import { Link, Outlet } from "react-router-dom";


export const Comments = () => {
    return (
        <div>
        <Link to="add">add</Link>
        <h1>Lora</h1>
        <Outlet />

        </div>
    )
}
