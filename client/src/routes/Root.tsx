import { Outlet } from "react-router-dom"
import Footer from "../components/templates/Footer/Footer"
import Header from "../components/templates/Header/Header"

const Root = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Root