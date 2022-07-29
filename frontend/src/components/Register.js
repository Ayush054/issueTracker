import React from 'react';
import "./register.css";
import { Button, TextField } from '@mui/material'
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';


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
  


  return (<div
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
                  >for your Project</span
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
                  
                <Formik initialValues={{
        name:'',
        age:'',
        password: '',
        mobile: '',
        email: ''
      }} onSubmit={userSubmit} validationSchema={SignupSchema}>
{({values, handleChange, handleSubmit, errors}) => (
  <form action="" onSubmit={handleSubmit}>
                 
                    <h1 className="text-center mt-4">REGISTER!!!</h1>
      <hr />


                    <div class="form-outline mb-4">
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


                    <div class="form-outline mb-4">
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


                    <div class="form-outline mb-4">
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

                    <div class="form-outline mb-4">
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

                    <div class="form-outline mb-4">
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
 <p className="mt-3">Already a user? <Link to="/Login" >Login</Link></p>

                
                   
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
 
  </div>

  )
}

export default Register;