import React from "react";
import axios from "axios";
import styled from "styled-components"
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TripsPage from "../pages/TripsPage";
import AdminPage from "../pages/AdminPage";
import ApplicationPage from "../pages/ApplicationPage";
import CreateTripPage from "../pages/CreateTripPage";
import TripsDetailsPage from "../pages/TripDetailsPage";
import LoginPage from '../pages/LoginPage'




export function Router() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/tripspage" element={<TripsPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/tripsdetailspage/:id" element={<TripsDetailsPage />} />
          <Route path="/createtrippage" element={<CreateTripPage />} />
          <Route path="/applicationpage" element={<ApplicationPage />} />
          <Route path="/adminpage" element={<AdminPage />} />


        </Routes>

      </BrowserRouter>


    </>
  );
}