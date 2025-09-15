
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from './layout/Home';
import Users from "./pages/Users";

import About from "./pages/About";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<Home />}>
      <Route index element={<Users />} />
      <Route path="/users" element={<Users />} />
      <Route path="/about" element={<About />} />
    </Route>
    </>
  ))

  return (
    <>
     
     <RouterProvider router={router} />
     
    
    </>
  )
}

export default App
