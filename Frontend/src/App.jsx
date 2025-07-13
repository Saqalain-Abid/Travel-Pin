import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ErrorPage from "./Pages/ErrorPage"
import MainLayout from "./MainLayout"
import Login from "./Components/Main Components/Registration/Login"
import Register from "./Components/Main Components/Registration/Register"


export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="*" element={<ErrorPage />} /> {/* Fallback route */}
        </Route>
      </Routes>
    </>
  )
}