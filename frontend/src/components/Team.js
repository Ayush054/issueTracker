import { Button, Card, CardContent, TextField } from '@mui/material'
import { Formik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const Team = () => {
  
    const userSubmit = async (formdata)=>{
        console.log(formdata);
        
        const response = await fetch('http://localhost:5000/team/add',{
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
        //   name: Yup.string()
        //     .min(2, 'Too Short!')
        //     .max(10, 'Too Long!')
        //     .required('Required'),
         // email: Yup.string().email('Invalid email').required('Required'),
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
            <Card style={mystyle}>
              <CardContent>
              <h1 className="text-center mt-4">ADD Team!!!</h1>
              <hr />
              <Formik initialValues={{
                title:'',
                description:'',
                createdAt: '',
                member: ''
              }} onSubmit={userSubmit} validationSchema={SignupSchema}>
        {({values, handleChange, handleSubmit, errors}) => (
          <form action="" onSubmit={handleSubmit}>
        
         <TextField value={values.title} onChange={handleChange} id="title" sx={{mt:5}} fullWidth label="tile"  helperText={errors.name} error={errors.name ? true:false}></TextField>
         <TextField value={values.description } onChange={handleChange} id="description" sx={{mt:3}} fullWidth label="description" ></TextField>
         <TextField value={values.createdAt} onChange={handleChange} id="createdAt" sx={{mt:3}} fullWidth label="CreatedAt"></TextField>
         <TextField  value={values.member} onChange={handleChange} id="member"sx={{mt:3}} fullWidth label="member"></TextField>
         <Button type="submit" color="error" variant="contained"  sx={{mt:5}}>ADD</Button>
         </form>
)}
      </Formik>
       
      </CardContent>
    
    </Card>
  </div> 
</div>      
  )
}

export default Team;