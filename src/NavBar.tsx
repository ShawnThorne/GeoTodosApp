import { Outlet, useNavigate } from "react-router-dom";

export const NavBar = () => {
    const navigate = useNavigate();
    return (
        <nav>
            <button onClick={() =>navigate("/dashboard")}>Home</button>
            <button onClick={() =>navigate("/login")}>Login</button>
            <Outlet />
        </nav>
    )
}