import {  Box, Button,  Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { useEffect } from "react";
import { getUsers  , removeUser, type user} from "../features/users/userSlice";



function UserTable() {

  let users =useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()
  // it bring the users once since we can't post to api 
  useEffect(() => {
   dispatch(getUsers())
   console.log(users)
  },[""])

function handleDeleteUser(user: user){
  dispatch(removeUser(user))
}

  return (
    <>
       <Table>
        <TableHead>
          <TableRow>
            <TableCell className=" text-success fw-bold">User</TableCell>
            <TableCell className="text-primary-emphasis fw-bold">City</TableCell>
            <TableCell className="text-warning fw-bold">Phone</TableCell>
            <TableCell className="text-danger-emphasis fw-bold">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {users.users.length > 0 ?  users.users.map((user) => (<TableRow  key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>
              <Box>
                <Box className="py-2"> {user.name}</Box>
                <Box> {user.email}</Box>
              </Box>
             

            </TableCell>
            <TableCell>{user.address.city}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell><Button variant="contained" color="error" onClick={() => handleDeleteUser(user)}>Delete</Button></TableCell>
          </TableRow>)) :  <TableRow>
        <TableCell colSpan={4} align="center">
          There are no available users
        </TableCell>
      </TableRow>
}
        </TableBody>
      </Table>
    </>
  )
}

export default UserTable
