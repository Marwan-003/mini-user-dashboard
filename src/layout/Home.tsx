import {  NavLink, Outlet } from "react-router-dom"
import {Box} from '@mui/material'
import style from './Home.module.scss'
function Home() {
  return (
    <>
      <Box className="py-4 shadow-md ">
        <Box className="container text-center ">
          <NavLink className={({isActive}) => (isActive ? style.activeLink: style.link)} to={"/users"}>Users</NavLink>
          <NavLink className={({isActive}) => (isActive ? style.activeLink: style.link)} to={"/about"}>About</NavLink>
        </Box>
      </Box>
      <Box>
      <Outlet/>
      </Box>
    </>
  )
}

export default Home
