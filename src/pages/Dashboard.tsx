import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../context/location";
import UserContext from "../context/user";
import { ref, set, get, child, remove } from "firebase/database";
import { rtdb } from "../lib/firebase";

type Todo = {
    isComplete: boolean;
    message: string;
}

type Location = {
    latitude: number;
    longitude: number;
    name: string;
    todos: string;
}

export const Dashboard = () => {
    const user = useContext(UserContext);
    const location = useContext(LocationContext);
    const [loc, setLoc] = useState<Location>({latitude: Math.round(location.lat * 1000) / 1000, longitude: Math.round(location.lon * 1000) / 1000, name: "", todos: ""});
    const navigate = useNavigate();
    const [edit, setEdit] = useState(false);
    const [addLoc, setAddLoc] = useState(false);
    const [lat, setLat] = useState(location.lat);
    const [lon, setLon] = useState(location.lon);
    const [name, setName] = useState("");
    const [locationList, setLocationList] = useState<Location[]>([]);
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [check, setCheck] = useState(false);
    
    //TODO Make a request to each of the locations in the list and figure out which distance is shorter, then set the current location as that location
    // const directionsService = new google.maps.DirectionsService();
    // const start = new google.maps.LatLng(location.lat, location.lon);

    useEffect(()=>{
        get(child(ref(rtdb), `users/${user?.uid}/locations`))
        .then(snapshot =>{
            let obj = snapshot.val()
            let newLocList: Location[] = [];
            // let distanceList: number[] = [];
            // let minDist = -1
            for (let key of Object.keys(obj)) {
                let newLocation: Location = obj[key];
                newLocList.push(newLocation);
            //     let end = new google.maps.LatLng(newLocation.latitude, newLocation.longitude);
            //     let request = {
            //         origin: start,
            //         destination: end,
            //         travelMode: 'DRIVING'
            //     };
            //     directionsService.route(request, function(result, status) {
            //         if (status == 'OK') {
            //             let dist = result.routes[0].legs[0].distance.value
            //             console.log(dist);
            //             distanceList.push(dist);
            //             if (minDist < 0 || dist < minDist) {
            //                 minDist = dist;
            //             }
            //         }
            //     });
            }
            // for (let i in distanceList) {
            //     if (distanceList[i] === minDist) {
            //         getTodos(locationList[i]);
            //     }
            // }
            setLocationList(newLocList);
            setCheck(false);
        });
        // I Don't think we need this anymore if we can figure out the code above
        // fetch("https://maps.googleapis.com/maps/api/distancematrix/json?destinations=New%20York%20City%2C%20NY&origins=Washington%2C%20DC%7CBoston&units=imperial&key=AIzaSyCsT9S9AOKonSMsFcI3wQUjI7dub4i49fY")
    },[check])
    
    function getTodos(location: Location) {
        let newTodoList: Todo[] = [];
        for (let key of Object.keys(location.todos)) {
            let newTodo: Todo = location.todos[key];
            newTodoList.push(newTodo);
        }
        setLoc(location);
        setTodoList(newTodoList);
    }

    function deleteLoc(toDelete: Location) {
        remove(ref(rtdb,`/users/${user?.uid}/locations/${toDelete.name}`));
        setCheck(true);
    }

    function saveLoc() {
        if (name !== "") {
            let newLocation: Location = {
                name: name,
                latitude: Math.round(lat * 1000) / 1000,
                longitude: Math.round(lon * 1000) / 1000,
                todos: ""
            }
            set(ref(rtdb,`/users/${user?.uid}/locations/${newLocation.name}`),newLocation)
            setLocationList([...locationList, newLocation]);
            setLat(location.lat);
            setLon(location.lon);
            setName("");
        }
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
                                    {edit ? (<button className="action" onClick={() => deleteLoc(l)}>x</button>) : <div></div>}
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
                    <div className="sub-header">Location: {loc.name} ({loc.latitude},{loc.longitude})</div>
                    <div>
                        {
                            todoList.map((todo) => (
                                <div className={`todo ${todo.isComplete ? 'complete' : ''}`} key={todo.message} onClick={() => navigate(`/todo/${loc.name}/${todo.message}`)}>
                                    {todo.message}
                                </div>
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