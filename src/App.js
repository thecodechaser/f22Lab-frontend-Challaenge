import { Routes, Route } from 'react-router-dom';
import React from "react";
import LandingPage from "./pages/LandingPage";
import Signup from './pages/Signup';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route 
        path="/"
        element={(<LandingPage />)}
        />
        <Route 
        path="/signup"
        element={(<Signup />)}
        />
        <Route 
        path="/home"
        element={(<Home />)}
        />
      
      {/*  

        # TASK

        Points: 4

        Create 2 new routes
          1. Landing route will be / which renders LandingPage component (pages/LandingPage)
          2. /signup route will render Signup component (pages/Signup)
          3. /home route will render Home component (pages/Home)

      */}
      </Routes>
    </div>
  );
};

export default App;
