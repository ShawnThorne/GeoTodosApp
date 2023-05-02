import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import UserContext, { User } from '../context/user';
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const Layout = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const cleanup = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user !== null) {
        setUser(user as User);
      } else {
        setUser(null)
      }
    });
    return cleanup;
  }, [loading]);

  return(
    <UserContext.Provider value={user}>
        <div className="container">
            <nav className="top">
                <button onClick={() =>navigate("/dashboard")}>Home</button>
                <button onClick={() =>navigate("/login")}>Login</button>
            </nav>
            {loading ? <div>Loading...</div> : <Outlet />}
        </div>
    </UserContext.Provider>
  )
}