import { useContext, useEffect, useState } from "react";
import { rtdb } from "../lib/firebase";
import UserContext from "../context/user";
import { useParams, useSearchParams } from "react-router-dom"
import { get, ref, child } from "firebase/database";

export const Todo = () => {
    const params = useParams();
    const user = useContext(UserContext);
    const [message, setMessage] = useState();
    const [isComplete, setComplete] = useState();

    useEffect(()=>{
        console.log(params.location)
        get(child(ref(rtdb), `users/${user?.uid}/locations/${params.location}/todos/${params.message}`))
        .then(snapshot =>{
            console.log(snapshot.val());
        })
    },[])
    return (
        <div>
            <h1>Todo: {params.message}</h1>
        </div>
    )
}