import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";


// getting users from api
export const getUsers = createAsyncThunk(("users/getUsers") , async () => {
  try{
    const response = await axios({
      method:"GET",
      url:"https://jsonplaceholder.typicode.com/users"
    })
    console.log(response.data)
    return response.data
  } catch(err){
    const error = err as AxiosError
    throw error
  }
})

export type user = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
  lat:string,
  lng: string
  }
  },
  phone:string,
  website: string,
  company: {
  name: string,
  catchPhrase:string,
  bs: string
  }
}

type initialStateTypes = {
  users: user[],
  errors: string,
  loading:boolean
}

const initialState : initialStateTypes = {
  users:[],
  errors:"",
  loading:false
}


const userSlice = createSlice({
  name:"users",
  initialState,
  reducers:{
    addUser(state , action){
      state.users = [...state.users , action.payload]
    },
    removeUser(state , action){
      state.users = state.users.filter((user) => user.id !== action.payload.id)
    }
  },
  extraReducers(builder){
    builder.addCase(getUsers.pending , (state) =>{
      state.loading = true
    })
    builder.addCase(getUsers.fulfilled , (state , action) =>{
      state.loading = false
      state.users = action.payload
      state.errors = ""
    })
    builder.addCase(getUsers.rejected , (state , action) =>{
      state.loading = false
      state.errors = action.error.message || "Something Went Wrong With Getting Users"
    })
  }

})
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer