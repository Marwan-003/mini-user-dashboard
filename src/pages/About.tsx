import { Box, Typography } from "@mui/material"


function About() {
  return (
    <>
      <Box sx={{ width:"max-content",marginInline:'auto' , marginBlock:"2rem" }} className="text-center">
        <Typography variant="h2">About User Dashboard</Typography>
        <Typography sx={{marginBlock:"2rem"}} variant="body1" >User Dashboard is a robust platform designed to simplify user account management for administrators. Our mission is to provide intuitive tools that ensure efficiency, security, and a seamless experience for managing your user base.</Typography>
      </Box>
    </>
  )
}

export default About
