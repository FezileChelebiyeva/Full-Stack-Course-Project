import React from 'react'
import AddCourse from '../pages/add-page';
import HomePage from '../pages/home';
import { Route, Routes } from "react-router-dom";
import DetailsPage from '../pages/details-page';
import Wishlist from '../pages/wihslist';
const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailsPage />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
}

export default Routing
