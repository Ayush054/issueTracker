import { Button, Card, CardContent, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";


const Login = () => {
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

  return (
    <div>
      <div className="col-md-4 mx-auto bg-light mt-5">
        <Card>
          <CardContent>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={userSubmit}
            >
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-center">Sign-in Here</h2>
                  <hr />

                  <TextField
                    value={values.email}
                    onChange={handleChange}
                    id="email"
                    sx={{ mt: 3 }}
                    fullWidth
                    label="email"
                    // helperText="Invalid email"
                    error
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
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
