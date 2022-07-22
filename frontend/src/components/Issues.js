import { Button, Card, CardContent, TextField } from '@mui/material'
import { Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';


const Issues = () => {

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


}


  return (
    <div className="col-md-4 mt-4 mx-auto">
    <Card>
      <CardContent>
      <h1 className="text-center">Add Issues!!!</h1>
      <hr />
      <Formik initialValues={{
        title:'',
        type:'',
        assignedBy: '',
        assignedTo: '',
        org: '',
        status:'',
        createdAt:new Date()
      }} onSubmit={userSubmit} >
        {/* validationSchema={SignupSchema} */}
{({values, handleChange, handleSubmit, errors}) => (
 <form action="" onSubmit={handleSubmit}>


 <TextField value={values.title} onChange={handleChange} id="title" sx={{mt:3}} fullWidth label="Title" ></TextField>
 <TextField value={values.type} onChange={handleChange} id="type" sx={{mt:5}} fullWidth label="Type" ></TextField>
 <TextField value={values.assignedBy} onChange={handleChange} id="assignedBy" sx={{mt:3}} fullWidth label="Assigned By"></TextField>
 <TextField value={values.assignedTo} onChange={handleChange} id="assignedTo"sx={{mt:3}} fullWidth label="Assigned To" ></TextField>
 <label className='m-3'>
    Created At  
    <input value={values.date} onChange={handleChange} className='' type="date" name="createdAt"/>
  </label>
 <TextField value={values.org} onChange={handleChange} id="org" sx={{mt:3}} fullWidth label=" Organisation" ></TextField>
 <TextField value={values.status} onChange={handleChange} id="status" sx={{mt:3}} fullWidth label="Status" ></TextField>
 <Button type="submit" color="error" variant="contained"  sx={{mt:5}}>Submit</Button>
 </form>
)}
</Formik>
             
      </CardContent>
    
    </Card>
    </div>
  )
}

export default Issues;