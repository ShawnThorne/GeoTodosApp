import { useEffect, useState } from 'react'
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Todo } from './pages/Todo';
import { CreateTodo } from './pages/CreateTodo';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from './pages/Layout';
import { LocationContext } from './context/location';
import { HelpPage } from './pages/Help';

const router = createHashRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path: "/",
        element: <Dashboard/>,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/todo/:location/:message",
        element: <Todo/>
      },
      {
        path: "/todo/create",
        element: <CreateTodo/>
      },
      {
        path: "/help",
        element: <HelpPage/>
      },
    ]
  }
]);

function App() {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [locationLoaded, setLocationLoaded] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      setLocationLoaded(true);
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
    }, (err) => {
      console.log(err)
    }, {
      enableHighAccuracy: true,
    })
  }, []);

  return (
    <LocationContext.Provider value={{lat, lon}}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </LocationContext.Provider>
  )
}

export default App
