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
//import Register1 from './components/Register1';
//import Login1 from './components/Login1';
import Team from "./components/Team";
import CheckTeam from "./components/TeamExist";
// import Issues1 from './components/Issues1';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Home></Home>} path="/Home" />
          <Route element={<Login></Login>} path="/Login" />
          {/* <Route element={<Login1></Login1>} path="/Login1"/> */}
          <Route element={<Register></Register>} path="/Register" />
          {/* <Route element={<Register1></Register1>} path="/Register1" /> */}
          <Route
            element={
              <Authorisor>
                {" "}
                <Issues />{" "}
              </Authorisor>
            }
            path="/Issues"
          />
          {/* <Route element={<Authorisor> <Issues1/> </Authorisor>} path="/Issues1" /> */}
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

          <Route element={<Navigate to="/Login" />} path="/" />

          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
