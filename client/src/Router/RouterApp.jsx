import { Navigate, Route, Routes } from "react-router-dom"
import OlymphusSite from "../Pages/OlymphusSite"

const AppRouter = () => {


  return (
    <>

        <Routes>

            <Route path="/olymphus/landing" element={<OlymphusSite /> } />
            <Route path="/olymphus/*" element={<OlymphusSite /> } />
            <Route path="/*" element={<OlymphusSite /> } />

        </Routes>

        
    </>
  )
}

export default AppRouter