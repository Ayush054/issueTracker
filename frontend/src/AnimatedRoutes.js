import React from 'react';
import Home from "./components/Home";
import Issues from "./components/Issues";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
import Track from "./components/Track";
import Authorisor from "./components/Auth";
import Team from "./components/Team";
import CheckTeam from "./components/TeamExist";
import NotCheckTeam from "./components/NotTeamExist";
import AddMember from "./components/AddMember";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';

const AnimatedRoutes = () => {

    const location = useLocation();
  return (
    <AnimatePresence mode="wait">
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
        </AnimatePresence>
  )
}

export default AnimatedRoutes