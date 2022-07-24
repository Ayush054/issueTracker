//import { Card, CardContent } from "@mui/material"
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react"

const Track = () => {

  const url="http://localhost:5000";

  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDataFromBackend = async () => {
    setLoading(true);
    const res = await fetch(url+'/issue/getall');
    const data = await res.json();
    setIssues(data);
    setLoading(false);
    console.log(data);
  }

  useEffect(() => {
    getDataFromBackend();
  }, [])

  const [stat, setstat]=useState('new');

  const updateStat=() => {
    setstat('solved');
  }

const statusFun= (status) => { 
  if(status=== 'solved'){
return <i class="fas fa-check text-success   "></i>
  }else if(status=== 'new')
  {
    return <i class="fas fa-plus  text-danger  "></i>
  }
}

  const displayIssues = () => {
    if(!loading){
      return issues.map(({title,type,assignedBy,createdAt,org,status}) => (


        <div className="card mt-5 ms-5">
          <div className="card-body">
            <h3>{title}</h3>
            <h4>Type : {type}</h4>
            <h4>Assign Name : {assignedBy.name}</h4>
            <h4>Time : {new Date(createdAt).toLocaleDateString()}</h4>
            <h4>Organisation : {org}</h4>
            <h4>Status : {statusFun(status)} </h4>
            <Button type="submit"  color="error" variant="contained" onClick={updateStat}>Close</Button>
          </div>
        </div>
      ))
    }
  }
  
  return (
    <div className="mt-5 ">
    <div className="container">
    
        <h2>All issues</h2>
        {displayIssues()}
      </div>
    </div>
  )
}

export default Track
