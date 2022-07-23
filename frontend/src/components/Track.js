import { Card, CardContent } from "@mui/material"
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

  const displayIssues = () => {
    if(!loading){
      return issues.map(({title}) => (
        <div className="card mt-5">
          <div className="card-body">
            <h3>{title}</h3>
          </div>
        </div>
      ))
    }
  }
  
  return (
    <div className="mt-5 w-50">
      
        <h2>All issues</h2>
        {displayIssues()}
      
    </div>
  )
}

export default Track
