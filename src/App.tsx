import { useState } from 'react'
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Todo } from './pages/Todo';
import { CreateTodo } from './pages/CreateTodo';
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
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
