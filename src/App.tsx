import { useState } from 'react'
import './App.css'
import { Login } from './Login';
import { Dashboard } from './Dashboard';
import { Todo } from './Todo';
import { CreateTodo } from './CreateTodo';
import { NavBar } from './NavBar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path:'/',
    element:<NavBar/>,
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
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
