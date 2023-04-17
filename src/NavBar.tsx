import { useNavigate } from "react-router-dom";

export const NavBar = () => {
    const navigate = useNavigate();
    return (
        <nav>
            <button onClick={navigate("/")}>Home</button>
            <button onClick={navigate("/login")}>Login</button>
            <button onClick={navigate("/dashboard")}>Signup</button>
        </nav>
    )
}