import React from 'react'
import { useNavigate } from 'react-router'
import Styles from '../../styles/card.module.scss'
// import circle from "../../Assets/Images/circle2.jpg"
const Cards = (props) => {
    const navigate=useNavigate()
  return (
    
    <React.Fragment key={props.num}>
      
      <div   className={Styles.card} onClick={()=>navigate(`/${props.id}`)}>
        <img src={props.imgsrc} alt="card_img" />
        <div className={Styles.card_body}>
          <h2>{props.title}</h2>
          <p>
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

