import {Card, Placeholder } from 'react-bootstrap'
import React from 'react'
import { useNavigate } from 'react-router'
import Styles from '../../styles/card.module.scss'
import circle from "../../Assets/Images/circle2.jpg"
const Cards = (props) => {
    const navigate=useNavigate()
  return (
    <React.Fragment key={props.id}>
      
   <Card className={Styles.card}  onClick={()=>navigate(`/${props.id}`)}> 
     <Card.Img variant="top" className={Styles.card_img} src={props.imgsrc} />
     <div  className={Styles.circle_img} >
               <img src={circle}  alt="circlr" />
        </div>
     <Card.Body className={Styles.cardBody}>
    
       <Placeholder className=" mt-3 text-center  " as={Card.Title} animation="glow">
                    <div className=''>
                           <span>ape Drops 01: Snoop...</span> <br />
                           <span className='mt-1 '>by <a href="#">opendrops.eth</a></span>

                    </div>
                    <div className='mt-3'>
                        <p>Lorem ipsum dolor sit </p>
                    </div>
                     
       </Placeholder>
      
       
      
     </Card.Body>
   </Card> 
    </React.Fragment>
  )


  
}

export default Cards

