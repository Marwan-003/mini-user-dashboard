import { Box, Container } from "@mui/material";

import UserTable from "../components/userTable";
import AddUserBtn from "../components/addUserBtn";




function Users() {



  return (
    <>
    <Container>
      <Box sx={{marginBlock:'1rem' , textAlign:"right"}}> <AddUserBtn/> </Box>
      <Box className="border-gray-200 border-1 mb-5 mt-3 py-1" sx={{borderRadius:"1rem"}}>
        <UserTable />
      </Box>
      
    </Container>
     
    </>
  )
}

export default Users
