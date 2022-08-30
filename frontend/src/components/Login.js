import React, { useContext } from "react";
import "./login.css";
import { Button } from "@mui/material";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { UserContext } from "../useContext";
import {motion} from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();

  const { setLoggedIn, setCurrentUser } = useContext(UserContext);

  const userSubmit = async (formdata) => {
    console.log(formdata);

    const res = await fetch("http://localhost:5000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      console.log("success");
      Swal.fire({
        icon: "success",
        title: "Wellcome!!👌",
        text: "Enter a new World!!",
      });
      const data = await res.json();
      sessionStorage.setItem("user", JSON.stringify(data));
      setCurrentUser(data);
      setLoggedIn(true);
      navigate("/Track");
    } else {
      console.log("Login error ");
      Swal.fire({
        icon: "error",
        title: "Try Again!!😒",
        text: "Check your email and password!!",
      });
    }
  };

  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <motion.div
  initial={{ scale: 0.8, opacity: 0, x: '100%' }}
  animate={{ scale: 1, opacity: 1, x : 0,  }}
  exit={{ scale: 0.8, opacity: 0, x: '100%', transition: {duration : 1} }}
  transition={{ type: "tween" }}  
    >
    <section draggable="false" class="overflow-hidden pt-0 " data-v-271253ee="">
      <section
        class=" background-radial-gradient overflow-hidden"
        style={{ height: "91vh" }}
      >
        <div class="container px-4 py-5 px-md-5 text-center text-lg-start">
          <div class="row gx-lg-5 align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <h1
                class="my-4 display-3 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                <span>Welcome</span> <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>Back!</span>
              </h1>
              <p
                class="mb-4 opacity-70 lead"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                An elegant way to keep track of your IT projects issues and bugs
              </p>
            </div>
            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="card bg-glass">
                <div class="card-body py-5 px-md-5">
                  <div class="mb-5 text-center">
                    <h2 class="fw-bold mb-3">Login</h2>
                    <hr />
                  </div>
                  <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={userSubmit}
                  >
                    {({ values, handleChange, handleSubmit }) => (
                      <form
                        onSubmit={handleSubmit}
                        validationSchema={SignupSchema}
                      >
                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            id="email"
                            class="form-control"
                          />
                          <label
                            class="form-label"
                            for="form5Example2"
                            style={{ marginLeft: "0px" }}
                          >
                            Email address
                          </label>
                          <div class="form-notch">
                            <div
                              class="form-notch-leading"
                              style={{ width: "9px" }}
                            ></div>
                            <div
                              class="form-notch-middle"
                              style={{ width: "88.8px" }}
                            ></div>
                            <div class="form-notch-trailing"></div>
                          </div>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            id="password"
                            class="form-control"
                          />
                          <label
                            class="form-label"
                            for="form5Example1"
                            style={{ marginLeft: "0px" }}
                          >
                            Password
                          </label>
                          <div class="form-notch">
                            <div
                              class="form-notch-leading"
                              style={{ width: "9px" }}
                            ></div>
                            <div
                              class="form-notch-middle"
                              style={{ width: "42.4px" }}
                            ></div>
                            <div class="form-notch-trailing"></div>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          color="secondary"
                          variant="contained"
                          className="btn-block mb-md-4"
                          sx={{ mt: 1 }}
                        >
                          Login
                        </Button>
                        <p className="mt-0">
                          Need an account? <Link to="/Register">Register</Link>
                        </p>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    </motion.div>
  );
};

export default Login;
