import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "../components/pages/Login/Login";
import Home from "../components/pages/Home/Home";
import Register from "../components/pages/Register/Register";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
]) 