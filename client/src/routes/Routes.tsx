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




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Blocking />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />,
                loader: async () => {
                    try {
                        const data = await services.getData("http://localhost:5000/companies");
                        return { companies: data.response};
                    } catch (error) {
                        console.error('Error cargando compañías:', error);
                        return { companies: [] };
                    }
                },
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
                loader: async () => {
                    const response = await services.getData(
                      "http://localhost:3000/admins"
                    );
                    return response},
            },
            {
                path: '/map-coverage',
                element: <MapCoverage />
            },
            {
                path: '/data-list',
                element: <DataList />,
                loader: services.getDataList
            },
            {
                path:'/permission',
                element: <Permission />
            }
        ],
    },
]) 