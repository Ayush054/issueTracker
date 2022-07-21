import { Button, Card, CardContent, TextField } from '@mui/material'
import { Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
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


  return (
    <div className="col-md-4 mt-4 mx-auto">
    <Card>
      <CardContent>
      <h1 className="text-center">REGISTER!!!</h1>
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
 <TextField  value={values.email} onChange={handleChange} id="email"sx={{mt:3}} fullWidth label="email" helperText="Invalid email" error></TextField>
 <TextField value={values.password} onChange={handleChange} id="password" sx={{mt:3}} fullWidth label=" password" type="password"></TextField>
 <Button type="submit" color="error" variant="contained"  sx={{mt:5}}>Login</Button>
 </form>
)}
      </Formik>
       
      </CardContent>
    
    </Card>
  </div> 
  )
}

export default Register;