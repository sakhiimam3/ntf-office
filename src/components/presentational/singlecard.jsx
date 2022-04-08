import React from 'react'
import { Card } from 'react-bootstrap'
import Styles from "../../styles/nestedCard.module.scss"


const Singlecard = (props) => {
  return (
    <Card className={Styles.nestedCard}>
    <Card.Img  className={Styles.nested_card_img}  id="nested-card-img" variant="top" src={props.imgsrc} />
    <Card.Body  className={Styles.nested_card_body}>
     
      <Card.Text  className={Styles.cardbodyDiv}>
            <div>
                 <span >ape drops:snoo</span> <br />
                  <span className="name">foolin Yaself</span>
            </div>
            <div className='d-flex flex-column align-items-end'> 
                <span>price</span> 
                <span>$0.09</span> 
                <span className='leftdays'>7 days left</span>

            </div>
      </Card.Text>
          
    </Card.Body>
    <div className={Styles.cardBottonShadow}></div>
  </Card>
  )
}

export default Singlecard