import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../context/location";

export const Dashboard = () => {
    const location = useContext(LocationContext);
    const [loc, setLoc] = useState(`(${Math.round(location.lat * 1000) / 1000}, ${Math.round(location.lon * 1000) / 1000})`);
    const navigate = useNavigate();
    const [edit, setEdit] = useState(false);

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
                            <div onClick={() => setLoc("Home")}>
                                Home
                            </div>
                        </div>
                        <div className="location">
                            {edit ? (<button className="action">x</button>) : <div></div>}
                            <div onClick={() => setLoc("Work")}> 
                                Work
                            </div>
                        </div>
                        <div className="location">
                            {edit ? (<button className="action">x</button>) : <div></div>}
                            <div onClick={() => setLoc("School")}>
                                School
                            </div>
                        </div>
                        <button className="action">Add Location</button>
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