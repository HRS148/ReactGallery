import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Gallery from '../components/Gallery/Gallery'
import ImageDetails from '../components/ImageDetails/ImageDetails'

const CustomRoutes = () => {
  return (
    <Routes>
        <Route path = "/" element={<Gallery/>}/>
        <Route path="/image/:id" element={<ImageDetails/>} />
        {/* <Route path="/ImageDetails" element={<ImageDetails />} /> */}
    </Routes>
  )
}

export default CustomRoutes