import { rtdb } from "../lib/firebase";
import { get, set, ref, child } from "firebase/database";
import UserContext from "../context/user";
import { LocationContext } from "../context/location";
import { useContext, useEffect, useState } from "react";

export const CreateTodo = () => {
    const user = useContext(UserContext);
    const location = useContext(LocationContext);
    const [message, setMessage] = useState("");
    const [locations, setLocations] = useState<string[]>([''])
    const [chosenLocation, setChosenLocation] = useState("")
    const [newLocation, setNewLocation] = useState("")
    useEffect(()=>{
        get(child(ref(rtdb), `users/${user?.uid}/locations`))
        .then(snapshot =>{
            setLocations(Object.keys(snapshot.val()))
        })
    },[])

    function saveData(){
        if(chosenLocation === ""){
            set(ref(rtdb,`/users/${user?.uid}/locations/${newLocation}`),{
                name: newLocation,
                latitude: Math.round(location.lat * 1000) / 1000,
                longitude: Math.round(location.lon * 1000) / 1000
            }).then(()=>{
                set(ref(rtdb,`/users/${user?.uid}/locations/${newLocation}/todos/${message}`),{
                    message,
                    isComplete: false
                })
            })
        } else {
            set(ref(rtdb,`/users/${user?.uid}/locations/${chosenLocation}/todos/${message}`),{
                name: chosenLocation,
                message,
                isComplete: false
            })
        }
    }

    return (
        <div>
            <h1>Welcome to the Create a Todo Page!</h1>
            <span>Message:</span>
            <input type="text" onChange={(e)=>setMessage(e.target.value)}/>
            <br />
            <span>Location:</span>
            <select name="location" id="location" onChange={(e)=>(setChosenLocation(e.target.value))}>
            <option value=""></option>
            {locations.map((location)=>(
                <option value={location}>{location}</option>
            ))}
            </select>
            {chosenLocation === "" &&
                <div>
                    <span>Name your Current Location:</span>
                    <input type="text" onChange={(e)=>setNewLocation(e.target.value)} />
                </div>
            }
            <br />
            <button onClick={()=>saveData()}>Save</button>
        </div>
    )
}