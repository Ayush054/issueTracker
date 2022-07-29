import { Button, Card, CardContent, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from 'yup';


const Login1 = () => {

  const navigate = useNavigate();

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
      navigate('/Issues');
      //navigate("/login")
    } else {
      console.log("Login error ");
      Swal.fire({
        icon: "error",
        title: "Try Again!!😒",
        text: "Check your email and password!!",
      });
    }
  };

  const mystyle = {
    padding:"20px",
    background: "#ffffffad",
    boxSizing: "border-box",
    borderRadius: "5px",
    boxShadow: "2px 4px 0px 2px rgba(0, 0, 0, 0.219)",
    backdropFilter: "blur(10px)"
  };
  
  const SignupSchema = Yup.object().shape({
    password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

  return (
    <div style={{
      background: " url(https://wallpaperaccess.com/full/51363.jpg)  ",height:"100vh"
    }} >
      <div className="col-md-4 mx-auto bg-ght " >
        <Card style={mystyle} className="" >
          <CardContent>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={userSubmit}
            >
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit} validationSchema={SignupSchema}>
                  <h2 className="text-center mt-5">Sign-in!!</h2>
                  <hr />

                  <TextField
                    value={values.email}
                    onChange={handleChange}
                    id="email"
                    sx={{ mt: 3 }}
                    fullWidth
                    label="email"
                    // helperText="Invalid email"
                    //error
                  ></TextField>
                  <TextField
                    value={values.password}
                    onChange={handleChange}
                    id="password"
                    sx={{ mt: 3 }}
                    fullWidth
                    label=" password"
                    type="password"
                  ></TextField>
                  <Button
                    type="submit"
                    color="error"
                    variant="contained"
                    sx={{ mt: 5 }}
                  >
                    Login
                  </Button>
                  <p className="mt-3">Need an account? <Link to="/Register" >Register</Link></p>

                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login1;
