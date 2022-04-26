import React from "react";
import axios from "axios";
import styled from "styled-components"
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TripsPage from "./pages/TripsPage";
import AdminPage from "./pages/AdminPage";
import ApplicationPage from "./pages/ApplicationPage";
import CreateTripPage from "./pages/CreateTripPage";
import TripsDetailsPage from "./pages/TripDetailsPage";
import LoginPage from "./pages/LoginPage";
import { Router } from "./routes/Router";



function App() {
  return (
    <>
    <Router />
  </>
  )
}

export default App;
