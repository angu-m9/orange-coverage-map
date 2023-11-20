import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import SendData from "../components/pages/SendData/SendData";
import LoginAdmin from "../components/pages/LoginAdmin/LoginAdmin";
import MapCoverage from "../components/pages/Map/MapCoverage";
import DataList from "../components/pages/DataList/DataList";
import Condicions from "../components/pages/Condicions/Condicions";
import { services } from "../services/services";




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
                path: '/register',
                element: <Register />
            },
            {
                path: '/send-data',
                element: <SendData />
            },
            {
                path: '/terms-conditions',
                element: <Condicions />
            },
            {
                path: '/login-admin',
                element: <LoginAdmin />,
            },
            {
                path: '/map-coverage',
                element: <MapCoverage />
            },
            {
                path: '/data-list',
                element: <DataList />,
                loader: services.getDataList
            }
        ],
    },
]) 