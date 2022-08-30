import React from 'react';
import "./register.css";
import { Button, TextField } from '@mui/material'
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import {motion} from 'framer-motion';

const Register = () => {

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
  


  return (<motion.div
    initial={{ scale: 0.8, opacity: 0, x: '-100%' }}
  animate={{ scale: 1, opacity: 1, x: 0 }}
  exit={{ scale: 0.8, opacity: 0, x: '100%' }}
    transition={{ type: "tween" }}  
      >
   
     <section
      draggable="false"
      class="overflow-hidden pt-0"
      data-v-271253ee=""
    >
      <section class=" background-radial-gradient overflow-hidden">
       
        <div
          class="container px-2 py-4 px-md-3 text-center text-lg-start"
        >
          <div class="row gx-lg-2 align-items-center mb-1">
            <div class="col-lg-6 mb-3 mb-lg-0" style={{zIndex: "10"}}>
              <h1
                className="my-3 display-4 fw-bold ls-tight"
                style={{color:" hsl(218, 81%, 95%)"}}
              >
                <span>Not A</span> <br />
                <span style={{color:"hsl(218, 81%, 75%)"}}
                  >Member?</span
                >
              </h1>
              <p
                class="mb-1 opacity-70 lead"
                style={{color:" hsl(218, 81%, 85%)"}}
              >Join for the best offer for your Project.
              </p>
            </div>
            <div class="col-lg-6 mb-1 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                class="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                class="position-absolute shadow-5-strong"
              ></div>
              <div class="card bg-glass">
                <div class="card-body px-4 py-4 px-md-5">
                  
                <Formik initialValues={{
        name:'',
        age:'',
        password: '',
        mobile: '',
        email: ''
      }} onSubmit={userSubmit} validationSchema={SignupSchema}>
{({values, handleChange, handleSubmit, errors}) => (
  <form action="" onSubmit={handleSubmit}>
                 
                    <h1 className="text-center ">REGISTER!!!</h1>
      <hr />


                    <div class="form-outline mb-2">
                    <TextField value={values.name} onChange={handleChange} id="name" sx={{mt:2}} fullWidth label="name"  helperText={errors.name} error={errors.name ? true:false}></TextField>
 
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


                    <div class="form-outline mb-2">
                    <TextField value={values.mobile } onChange={handleChange} id="mobile" sx={{mt:1}} fullWidth label="Mobile number" ></TextField>
 
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


                    <div class="form-outline mb-2">
                    <TextField value={values.age} onChange={handleChange} id="age" sx={{mt:1}} fullWidth label="age"></TextField>
 
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

                    <div class="form-outline mb-2">
                    <TextField  value={values.email} onChange={handleChange} id="email"sx={{mt:1}} fullWidth label="email"></TextField>
    
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

                    <div class="form-outline mb-2">
                    <TextField value={values.password} onChange={handleChange} id="password" sx={{mt:1}} fullWidth label=" password" type="password"></TextField>
 
                     
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
                   
                     
                 
                  
<Button type="submit" color="primary" variant="contained" className='btn-block mb-4' sx={{mt:2}}>Register</Button>
 <p className="mt-2">Already a user? <Link to="/Login" >Login</Link></p>

                
                   
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

  )
}

export default Register;