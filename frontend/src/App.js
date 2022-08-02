//import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Issues from "./components/Issues";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
import Track from "./components/Track";
import Authorisor from "./components/Auth";
import Team from "./components/Team";
import CheckTeam from "./components/TeamExist";
import NotCheckTeam from "./components/NotTeamExist";
import { UserProvider } from "./useContext";
import { useState } from "react";
import AddMember from "./components/AddMember";

function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  return (
    <div>
      <UserProvider user={currentUser}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Home></Home>} path="/Home" />
          <Route element={<Login></Login>} path="/Login" />
          <Route element={<Register></Register>} path="/Register" />
          <Route
            element={
              <Authorisor>
                <NotCheckTeam>
                <Issues />
                </NotCheckTeam>
              </Authorisor>
            }
            path="/Issues"
          />
          <Route
            element={
              <Authorisor>
                <Track />
              </Authorisor>
            }
            path="/Track"
          />
          <Route
            element={
              <Authorisor>
                <CheckTeam>
                  <Team />
                </CheckTeam>
              </Authorisor>
            }
            path="/Team"
          />
           <Route element={
           <Authorisor>
           <NotCheckTeam>
             <AddMember></AddMember>
          </NotCheckTeam></Authorisor>
           } path="/AddMember" />
          

          <Route element={<Navigate to="/Login" />} path="/" />

          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
