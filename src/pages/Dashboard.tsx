import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../context/location";
import UserContext from "../context/user";
import { onValue, ref, set, push, onChildAdded, get, child } from "firebase/database";
import { rtdb } from "../lib/firebase";

type Todo = {
    isComplete: boolean;
    message: string;
}

type Location = {
    latitude: number;
    longitude: number;
    name: string;
    todos: object;
}

export const Dashboard = () => {
    const user = useContext(UserContext);
    const location = useContext(LocationContext);
    const [loc, setLoc] = useState(`(${Math.round(location.lat * 1000) / 1000}, ${Math.round(location.lon * 1000) / 1000})`);
    const navigate = useNavigate();
    const [edit, setEdit] = useState(false);
    const [addLoc, setAddLoc] = useState(false);
    const [lat, setLat] = useState(location.lat);
    const [lon, setLon] = useState(location.lon);
    const [name, setName] = useState("");
    const [locationList, setLocationList] = useState<Location[]>([]);
    const [todoList, setTodoList] = useState<Todo[]>([]);

    useEffect(()=>{
        get(child(ref(rtdb), `users/${user?.uid}/locations`))
        .then(snapshot =>{
            const obj = snapshot.val()
            let newLocList: Location[] = [];
            for (let key of Object.keys(obj)) {
                const newLocation: Location = obj[key];
                newLocList.push(newLocation)
                // console.log(`${key} : ${obj[key]}`)
                // console.log(`${key}[todos] : ${newLocation.todos.todo.message}`)
            }
            setLocationList(newLocList);
        });
    },[])
    
    function getTodos(location: Location) {
        let newTodoList: Todo[] = [];
        for (let key of Object.keys(location.todos)) {
            console.log(key)
            const newTodo: Todo = location.todos[key];
            newTodoList.push(newTodo);
        }
        setTodoList(newTodoList);
    }



    function saveLoc() {
    //     if (name !== "") {
    //         console.log(`Name: ${name}, Lat: ${lat}, Lon: ${lon}`);
    //         const newLocation: Location = {
    //             name,
    //             lat,
    //             lon
    //         }
    //         setLocationList([...locationList, newLocation]);
    //         setLat(location.lat);
    //         setLon(location.lon);
    //         setName("");
    //     }
    }

    return (
        <div className="dashboard">
            <div className="header">Dashboard</div>
            <div className="side-bar-container">
                <div className="side-bar">
                    <div>Locations</div>
                    <div className="list">
                        <button className="action" onClick={() => setEdit(!edit)}>{edit ? "Confirm" : "Edit Locations"}</button>
                        <div>
                            {locationList.map(l => (
                                <div className="location" key={l.name}>
                                    {edit ? (<button className="action">x</button>) : <div></div>}
                                    <div className="loc-text" onClick={() => getTodos(l)}>{`${l.name}`}</div>
                                </div>
                            ))}
                        </div>
                        <button className="action" onClick={() => {
                            if (addLoc) {
                                saveLoc();
                            }
                            setAddLoc(!addLoc);
                        }}>{addLoc ? "Save" : "Add Location"}</button>
                        <div>
                            {addLoc ? (
                                <div>
                                    <form>
                                        <div>Latitude</div>
                                        <input type="number" value={lat} onChange={(e) => setLat(+e.target.value)}/>
                                        <div>Longitude</div>
                                        <input type="number" value={lon} onChange={(e) => setLon(+e.target.value)}/>
                                        <div>Name</div>
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                                    </form>
                                </div>
                            ) : <div></div>}
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <div className="sub-header">Current Location: {loc}</div>
                    <div>
                        {
                            todoList.map((todo) => (
                                <div key={todo.message}>{todo.message}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="side-bar">
                    <div>Actions</div>
                    <button onClick={() => navigate("/todo/create")}>Create Todo</button>
                </div>
            </div>
        </div>
    )
}