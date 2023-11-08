import { Outlet } from "react-router";
import HeaderAdmin from "../components/templates/HeaderAdmin/HeaderAdmin";

const RootAdmin = () => {
  return (
    <>
    <HeaderAdmin />
    <Outlet />
    </>
  )
}

export default RootAdmin;