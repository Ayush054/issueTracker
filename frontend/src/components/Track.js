//import { Card, CardContent } from "@mui/material"
import { Button } from "@mui/material"
import React, { useEffect, useState } from "react"

const Track = () => {
  const url = "http://localhost:5000"

  const [issues, setIssues] = useState([])
  const [loading, setLoading] = useState(false)

  const getDataFromBackend = async () => {
    setLoading(true)
    const res = await fetch(url + "/issue/getall")
    const data = await res.json()
    setIssues(data)
    setLoading(false)
    console.log(data)
  }

  useEffect(() => {
    getDataFromBackend()
  }, [])

  const updateStatus = async (issueid) => {
    const res = fetch(url + "/issue/update/" + issueid, {
      method: "PUT",
      body: JSON.stringify({ status: "solved" }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (res.status === 200) {
      console.log("updated")
      getDataFromBackend()
    }
  }

  const statusFun = (status) => {
    if (status === "solved") {
      return <i class="fas fa-check text-success   "></i>
    } else if (status === "new") {
      return <i class="fas fa-plus  text-danger  "></i>
    }
  }

  const displayIssues = () => {
    if (!loading) {
      return issues.map(({ _id, title, type, assignedBy, createdAt, org, status, team }) => (
        <div className="card mt-5 ms-5">
          <div className="card-body">
            <div class="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target={"#" + _id}
                    aria-expanded="true"
                    aria-controls={_id}>
                    {title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {new Date(createdAt).toLocaleDateString()}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="float-end">{statusFun(status)}</span>
                  </button>
                </h2>
                <div id={_id} class="accordion-collapse collapse show" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
                  <div class="accordion-body">
                    <h4>Type : {type}</h4>
                    <h4>Team : {team}</h4>

                    <h4>Assign Name : {assignedBy.name}</h4>
                    <h4>Time : {new Date(createdAt).toLocaleDateString()}</h4>
                    <h4>Organisation : {org}</h4>
                    <h4>Status : {statusFun(status)} </h4>
                    <Button color="error" variant="contained" onClick={(e) => updateStatus(_id)}>
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
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
