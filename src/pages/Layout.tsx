import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import UserContext, { User } from '../context/user';
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const Layout = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // TODO auth stuff
    const cleanup = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user !== null) {
        setUser(user as User);
        setLoggedIn(!!user);
      } else {
        setUser(null)
        setLoggedIn(false);
      }
      console.log("Our user is: ", user);
    });

    // if (!loading) {
    //   navigate(loggedIn ? '/dashboard' : '/login');
    // }
    return cleanup;
  }, [loggedIn, loading]);

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