import { useContext, useEffect, useState } from "react";
import { rtdb } from "../lib/firebase";
import UserContext from "../context/user";
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { set, get, ref, child, push, update } from "firebase/database";

export const Todo = () => {
    const params = useParams();
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const [message, setMessage] = useState();
    const [isComplete, setComplete] = useState();

    useEffect(()=>{
        get(child(ref(rtdb), `users/${user?.uid}/locations/${params.location}/todos/${params.message}`))
        .then(snapshot =>{
            setMessage(snapshot.val()['message'])
            setComplete(snapshot.val()['isComplete'])
        })
    },[])

    function completeTask(){
        set(ref(rtdb,`/users/${user?.uid}/locations/${params.location}/todos/${params.message}`),{
            isComplete: !isComplete
        }).then(()=>{
            navigate('/dashboard');
        })
    }
    return (
        <div>
            <h1>Todo: {params.message}</h1>
            <h1>IS COMPLETE: {isComplete ? "Yes" : "No"}</h1>
            {!isComplete &&
                <div>
                    <button onClick={()=>completeTask()}>Complete This Task?</button>
                </div>
            }
        </div>
    )
}