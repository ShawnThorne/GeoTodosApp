import { useContext, useEffect, useState } from "react";
import { rtdb } from "../lib/firebase";
import UserContext from "../context/user";
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { set, get, ref, child, push, update, remove } from "firebase/database";

export const Todo = () => {
    const params = useParams();
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [oldMessage, setOldMessage] = useState("");
    const [isComplete, setComplete] = useState(false);
    const [edit, setEdit] = useState(false);

    useEffect(()=>{
        get(child(ref(rtdb), `users/${user?.uid}/locations/${params.location}/todos/${params.message}`))
        .then(snapshot =>{
            setMessage(snapshot.val()['message'])
            setOldMessage(snapshot.val()['message'])
            setComplete(snapshot.val()['isComplete'])
        })
    },[])

    function completeTask(){
        set(ref(rtdb,`/users/${user?.uid}/locations/${params.location}/todos/${params.message}`),{
            isComplete: !isComplete,
            message: params.message
        }).then(()=>{
            navigate('/dashboard');
        })
    }

    function saveTask(){
        remove(ref(rtdb,`/users/${user?.uid}/locations/${params.location}/todos/${oldMessage}`))
        set(ref(rtdb,`/users/${user?.uid}/locations/${params.location}/todos/${message}`),{
            isComplete: isComplete,
            message: message
        }).then(()=>{
            setEdit(false);
            setOldMessage(message);
        })
    }
    
    function deleteTask(){
        remove(ref(rtdb,`/users/${user?.uid}/locations/${params.location}/todos/${message}`)).then(()=>{
            navigate('/dashboard');
        })
    }

    return (
        <div>
            {!edit ? (
                <div>
                    <div className="detail">Todo: {message}</div>
                    <div className="detail">IS COMPLETE: {isComplete ? "Yes" : "No"}</div>
                    <button onClick={() => deleteTask()}>Delete</button>
                    <button onClick={()=>completeTask()}>{!isComplete ? "Complete This Task?": "Uncomplete This task"}</button>
                    <button onClick={() => setEdit(true)}>Edit</button>
                </div>
            ) : (
                <div>
                    <div className="detail">
                        Todo: <input className="edit-detail" type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
                    </div>
                    <div className="detail">IS COMPLETE: {isComplete ? "Yes" : "No"}</div>
                    <button onClick={() => saveTask()}>Save</button>
                </div>
            )}
        </div>
    )
}