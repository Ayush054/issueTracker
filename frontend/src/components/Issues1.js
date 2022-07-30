import { Button, Card, CardContent, TextField } from "@mui/material"
import { Formik } from "formik"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Issues1 = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))

  const userSubmit = async (formdata) => {
    console.log(formdata)

    const response = await fetch("http://localhost:5000/issue/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.status === 200) {
      console.log("success")

      //navigate("/login")
    } else {
      console.log("error occured")
    }
  }


  const mystyle = {
    padding: "20px",
    background: "rgb(255 255 255 / 60%)",
    boxSizing: "border-box",
    borderRadius: "5px",
    boxShadow: "2px 4px 0px 2px rgba(0, 0, 0, 0.219)",
    backdropFilter: "blur(10px)"
  };

  return (
    <div style={{
      background: " url(https://wallpaperaccess.com/full/51363.jpg)  ", height: "100vh"
    }} >

      <div className="col-md-4 mx-auto">
        <Card style={mystyle} >
          <CardContent>
            <h1 className="text-center mt-4">Add Issues!!!</h1>
            <hr />
            <Formik
              initialValues={{
                title: "",
                type: "",
                assignedBy: currentUser._id,
                assignedTo: "",
                org: "",
                createdAt: new Date(),
              }}
              onSubmit={userSubmit}>
              {/* validationSchema={SignupSchema} */}
              {({ values, handleChange, handleSubmit, errors }) => (
                <form action="" onSubmit={handleSubmit}>
                  <TextField value={values.title} onChange={handleChange} id="title" sx={{ mt: 3 }} fullWidth label="Title"></TextField>
                  <TextField value={values.type} onChange={handleChange} id="type" sx={{ mt: 5 }} fullWidth label="Type"></TextField>
                  <TextField value={values.team} onChange={handleChange} id="team" sx={{ mt: 5 }} fullWidth label="Team"></TextField>

                  <TextField
                    value={values.assignedTo}
                    onChange={handleChange}
                    id="assignedTo"
                    sx={{ mt: 3 }}
                    fullWidth
                    label="Assigned To"></TextField>

                  <TextField value={values.org} onChange={handleChange} id="org" sx={{ mt: 3 }} fullWidth label=" Organisation"></TextField>
                  <Button type="submit" color="error" variant="contained" sx={{ mt: 5 }}>
                    Submit
                  </Button>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>




  )
}

export default Issues1
