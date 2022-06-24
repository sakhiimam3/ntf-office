import React from 'react'
import { Button } from 'react-bootstrap'
import ErrorImage from "../Assets/Images/notfound.gif"
import { useNavigate } from 'react-router'
const Error = () => {
  const Navigate =useNavigate()
  return (
    <div style={{height:'500px',width:"500px",margin:'auto'}}>
           <img className='img-fluid' src={ErrorImage} alt="error" />
           <div className='text-center'>
           <Button  onClick={()=>Navigate("/")} variant="success">Go to Home</Button>
           </div>
             
    </div>
      
  )
}

export default Error
