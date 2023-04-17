import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Login } from './Login';
import { Dashboard } from './Dashboard';
import { Todo } from './Todo';
import { CreateTodo } from './CreateTodo';
import { NavBar } from './NavBar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element:<NavBar/>,
    children:[
      {
        path: "/",
        element: <App/>,
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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
