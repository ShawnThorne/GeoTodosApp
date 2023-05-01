import { useEffect, useState } from 'react'
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Todo } from './pages/Todo';
import { CreateTodo } from './pages/CreateTodo';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from './pages/Layout';
import { LocationContext } from './context/location';

const router = createBrowserRouter([
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
        path: "/todo/:id",
        element: <Todo/>
      },
      {
        path: "/todo/create",
        element: <CreateTodo/>
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
    // const watch = navigator.geolocation.watchPosition((location) => {
    //   setLat(location.coords.latitude);
    //   setLon(location.coords.longitude);
    //   setLocationLoaded(true);
    // }, (err) => {
    //   console.log(err)
    // }, {
    //   enableHighAccuracy: true,
    // })

    // return () => navigator.geolocation.clearWatch(watch)
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
