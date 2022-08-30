//import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import { UserProvider } from "./useContext";
import { useState } from "react";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  return (
    <div>
      <UserProvider user={currentUser}>
      <BrowserRouter>
        <NavBar />
        <AnimatedRoutes />
      </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
