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
import Permission from "../components/pages/Permission/Permission";
import Blocking from "../components/pages/Blocking/Blocking";
import PrivateRoute from "../components/privateRoute/privateRoute";
import Error404 from "../components/pages/Error404/Error404";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error404 />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />,
                loader: services.getCompanies
                loader: services.getCompanies
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
                element: <LoginAdmin />
            },
            {
                path: '/map-coverage',
                element: 
                <PrivateRoute >
                    <MapCoverage />
                </PrivateRoute>
                
            },
            {
                path: '/data-list',
                element: 
                <PrivateRoute >
                    <DataList />
                </PrivateRoute >,
                loader: services.getDataList
            },
            {
                path:'/permission',
                element: <Permission />
            }
        ],
    },
]) 
