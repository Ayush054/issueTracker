import { Button, Card, CardContent, TextField } from '@mui/material'
import { Formik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import "./register.css"

const Register1 = () => {

  const navigate= useNavigate();
  
  const userSubmit = async (formdata)=>{
console.log(formdata);

const response = await fetch('http://localhost:5000/user/add',{
  method:'POST',
  body: JSON.stringify(formdata),
  headers:{
    'Content-Type' : 'application/json'
  }
})
if(response.status === 200){
  console.log('success');
  Swal.fire({
    icon:"success",
    title: "Well Done!!👌",
    text: "Wonderful JOB!!"
  })
  navigate("/login")
}else{
  console.log('error occured');
  Swal.fire({
    icon:"error",
    title: "Try Again!!😒",
    text: "search for error!!"
  });

}

}

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  // mobile:Yup.string().max(11, 'check number').required('Required'),
  // password: Yup.string().required('No password provided.') 
  // .min(8, 'Password is too short - should be 8 chars minimum.')
  // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});

const mystyle = {
  padding:"20px",
  background: "rgb(255 255 255 / 60%)",
  boxSizing: "border-box",
  borderRadius: "5px",
  boxShadow: "2px 4px 0px 2px rgba(0, 0, 0, 0.219)",
  backdropFilter: "blur(10px)"
};

  return (
    <div style={{
       background: " url(https://wallpaperaccess.com/full/51363.jpg)  ",height:"100vh"
    }}>

    <div className="col-md-4 mx-auto"  >
    {/* <Card style={mystyle}> */}
      {/* <CardContent> */}
      <h1 className="text-center mt-4">REGISTER!!!</h1>
      <hr />
      <Formik initialValues={{
        name:'',
        age:'',
        password: '',
        mobile: '',
        email: ''
      }} onSubmit={userSubmit} validationSchema={SignupSchema}>
{({values, handleChange, handleSubmit, errors}) => (
  <form action="" onSubmit={handleSubmit}>

 <TextField value={values.name} onChange={handleChange} id="name" sx={{mt:5}} fullWidth label="name"  helperText={errors.name} error={errors.name ? true:false}></TextField>
 <TextField value={values.mobile } onChange={handleChange} id="mobile" sx={{mt:3}} fullWidth label="Mobile number" ></TextField>
 <TextField value={values.age} onChange={handleChange} id="age" sx={{mt:3}} fullWidth label="age"></TextField>
 <TextField  value={values.email} onChange={handleChange} id="email"sx={{mt:3}} fullWidth label="email"></TextField>
 <TextField value={values.password} onChange={handleChange} id="password" sx={{mt:3}} fullWidth label=" password" type="password"></TextField>
 <Button type="submit" color="error" variant="contained"  sx={{mt:5}}>Register</Button>
 <p className="mt-3">Already a user? <Link to="/Login" >Login</Link></p>

 <div
          data-draggable="true"
          style={{position: "relative"}}
          draggable="false"
          class=""
        >
         
           <section
            draggable="false"
            class="overflow-hidden pt-0"
            data-v-271253ee=""
          >
            <section class="mb-10 background-radial-gradient overflow-hidden">
              {/* <style>
                .background-radial-gradient {
                  backgroundColor: "hsl(218, 41%, 15%)";
                  background-image: radial-gradient(
                      650px circle at 0% 0%,
                      hsl(218, 41%, 35%) 15%,
                      hsl(218, 41%, 30%) 35%,
                      hsl(218, 41%, 20%) 75%,
                      hsl(218, 41%, 19%) 80%,
                      transparent 100%
                    ),
                    radial-gradient(
                      1250px circle at 100% 100%,
                      hsl(218, 41%, 45%) 15%,
                      hsl(218, 41%, 30%) 35%,
                      hsl(218, 41%, 20%) 75%,
                      hsl(218, 41%, 19%) 80%,
                      transparent 100%
                    );
                }
                #radius-shape-1 {
                  height: 220px;
                  width: 220px;
                  top: -60px;
                  left: -130px;
                  background: radial-gradient(#44006b, #ad1fff);
                  overflow: hidden;
                }
                #radius-shape-2 {
                  border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
                  bottom: -60px;
                  right: -110px;
                  width: 300px;
                  height: 300px;
                  background: radial-gradient(#44006b, #ad1fff);
                  overflow: hidden;
                }
                .bg-glass {
                  background-color: hsla(0, 0%, 100%, 0.9) !important;
                  backdrop-filter: saturate(200%) blur(25px);
                }
              </style> */}
              <div
                class="container px-4 py-5 px-md-5 text-center text-lg-start"
              >
                <div class="row gx-lg-5 align-items-center mb-5">
                  <div class="col-lg-6 mb-5 mb-lg-0" style={{zIndex: "10"}}>
                    <h1
                      className="my-5 display-3 fw-bold ls-tight"
                      style={{color:" hsl(218, 81%, 95%)"}}
                    >
                      <span>The best offer</span> <br />
                      <span style={{color:"hsl(218, 81%, 75%)"}}
                        >for your business</span
                      >
                    </h1>
                    <p
                      class="mb-4 opacity-70"
                      style={{color:" hsl(218, 81%, 85%)"}}
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Temporibus, expedita iusto veniam atque, magni tempora
                      mollitia dolorum consequatur nulla, neque debitis eos
                      reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
                    </p>
                  </div>
                  <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
                    <div
                      id="radius-shape-1"
                      class="position-absolute rounded-circle shadow-5-strong"
                    ></div>
                    <div
                      id="radius-shape-2"
                      class="position-absolute shadow-5-strong"
                    ></div>
                    <div class="card bg-glass">
                      <div class="card-body px-4 py-5 px-md-5">
                        <form>
                         
                          <div class="row">
                            <div class="col-md-6 mb-4">
                              <div class="form-outline">
                                <input
                                  type="text"
                                  id="form3Example1"
                                  class="form-control"
                                />
                                <label
                                  class="form-label"
                                  for="form3Example1"
                                  style={{marginLeft: "0px"}}
                                  >First name</label
                                >
                                <div class="form-notch">
                                  <div
                                    class="form-notch-leading"
                                    style={{width: "9px"}}
                                  ></div>
                                  <div
                                    class="form-notch-middle"
                                    style={{width: "68.8px"}}
                                  ></div>
                                  <div class="form-notch-trailing"></div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 mb-4">
                              <div class="form-outline">
                                <input
                                  type="text"
                                  id="form3Example2"
                                  class="form-control"
                                />
                                <label
                                  class="form-label"
                                  for="form3Example2"
                                  style={{marginLeft: "0px"}}
                                  >Last name</label
                                >
                                <div class="form-notch">
                                  <div
                                    class="form-notch-leading"
                                    style={{width: "9px"}}
                                  ></div>
                                  <div
                                    class="form-notch-middle"
                                    style={{width: "68px"}}
                                  ></div>
                                  <div class="form-notch-trailing"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                         
                          <div class="form-outline mb-4">
                            <input
                              type="email"
                              id="form3Example3"
                              class="form-control"
                            />
                            <label
                              class="form-label"
                              for="form3Example3"
                              style={{marginLeft: "0px"}}
                              >Email address</label
                            >
                            <div class="form-notch">
                              <div
                                class="form-notch-leading"
                                style={{width: "9px"}}
                              ></div>
                              <div
                                class="form-notch-middle"
                                style={{width: "88.8px"}}
                              ></div>
                              <div class="form-notch-trailing"></div>
                            </div>
                          </div>
                        
                          <div class="form-outline mb-4">
                            <input
                              type="password"
                              id="form3Example4"
                              class="form-control"
                            />
                            <label
                              class="form-label"
                              for="form3Example4"
                              style={{marginLeft: "0px"}}
                              >Password</label
                            >
                            <div class="form-notch">
                              <div
                                class="form-notch-leading"
                                style={{width: "9px"}}
                              ></div>
                              <div
                                class="form-notch-middle"
                                style={{width: "72.8px"}}
                              ></div>
                              <div class="form-notch-trailing"></div>
                            </div>
                          </div>
                         
                           <div
                            class="form-check d-flex justify-content-center mb-4"
                          >
                            <input
                              class="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example33"
                              checked=""
                            />
                            <label class="form-check-label" for="form2Example33"
                              >Subscribe to our newsletter</label
                            >
                          </div>
                       
                           <button
                            type="submit"
                            class="btn btn-primary btn-block mb-4"
                            aria-controls="#picker-editor"
                          
                          >
                            Sign up
                          </button>
                      
                          <div class="text-center">
                            <p>or sign up with:</p>
                            <button
                              type="button"
                              class="btn btn-link btn-floating mx-1"
                            >
                              <i
                                class="fab fa-facebook-f"
                                aria-controls="#picker-editor"
                              ></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-link btn-floating mx-1"
                            >
                              <i
                                class="fab fa-google"
                                aria-controls="#picker-editor"
                              ></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-link btn-floating mx-1"
                            >
                              <i
                                class="fab fa-twitter"
                                aria-controls="#picker-editor"
                              ></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-link btn-floating mx-1"
                            >
                              <i
                                class="fab fa-github"
                                aria-controls="#picker-editor"
                              ></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
       
        </div>


 </form>
)}
      </Formik>
       
      {/* </CardContent> */}
    
    {/* </Card> */}
  </div> 
</div>
  )
}

export default Register1;