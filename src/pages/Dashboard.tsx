import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../context/location";
import UserContext from "../context/user";

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

    function saveLoc() {
        if (name !== "") {
            console.log(`Name: ${name}, Lat: ${lat}, Lon: ${lon}`);
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
                    <div>Locations list</div>
                    <div className="list">
                        <button className="action" onClick={() => setEdit(!edit)}>{edit ? "Confirm" : "Edit Locations"}</button>
                        <div className="location">
                            {edit ? (<button className="action">x</button>) : <div></div>}
                            <div className="loc-text" onClick={() => setLoc("Home")}>
                                Home
                            </div>
                        </div>
                        <div className="location">
                            {edit ? (<button className="action">x</button>) : <div></div>}
                            <div className="loc-text" onClick={() => setLoc("Work")}> 
                                Work
                            </div>
                        </div>
                        <div className="location">
                            {edit ? (<button className="action">x</button>) : <div></div>}
                            <div className="loc-text" onClick={() => setLoc("School")}>
                                School
                            </div>
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
                        <div>Do Homework</div>
                        <div>Eat Lunch</div>
                        <div>???</div>
                        <div>Prosper</div>
                    </div>
                </div>
                <div className="side-bar">
                    <div>Actions List</div>
                    <button onClick={() => navigate("/todo/create")}>Create Todo</button>
                </div>
            </div>
        </div>
    )
}