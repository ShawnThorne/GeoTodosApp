import { useState } from "react";
import { auth, rtdb } from "../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { set, ref } from "firebase/database";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    function signUp() {
      createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
          set(ref(rtdb, 'users/' + user.uid),{
            email,
          })
          navigate('/dashboard')
        })
    }
  
    function login() {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate('/dashboard');
          location.reload();
        })
    }
  
    return (
      <div className="login">
        <div className="header">Login / Create Account</div>
        <div className="content">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
          <div className="login-controls">
            <button className="secondary" onClick={signUp}>Create Account</button>
            <button onClick={login}>Sign In</button>
          </div>
        </div>
      </div>
    )
  }