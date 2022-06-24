import React from 'react'
import { useNavigate } from 'react-router'
import  '../../styles/cards.css'
// import circle from "../../Assets/Images/circle2.jpg"
const Cards = (props) => {
    const navigate=useNavigate()
  return (
    
    <React.Fragment key={props.num}>
      
      <div   className="card " onClick={()=>navigate(`/${props.id}`)}>
        <img src={props.imgsrc} alt="card_img" />
        <div className="card_body">
          <h2 className='text-center fw-bold'>{props.title}</h2>
          <p className='text-secondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
       
        </div>
      </div> 
    </React.Fragment>
  )


  
}

export default Cards

