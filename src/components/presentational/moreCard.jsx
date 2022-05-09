import React from 'react'
import { Col } from 'react-bootstrap'
import "../../styles/morecard.css"
const MoreCard = (props) => {
    const {img,title,owner,sale_time,item_key}=props
    
 
  return (
      <React.Fragment>
          <Col md={3} xs={12} key={item_key}> 
    <div  className="cards style-1">
    <div className="col">
      <div className="card"> <img className="card-image" src={img}/>
        <div className="card-title ">{title}</div>
        <div className="card-description">
              <div>
                     Owner : {owner}
              </div>
              <div>
                     {sale_time}
              </div>
        </div>
      </div>
    </div>
  </div>
  </Col>
  </React.Fragment>
  )
}

export default MoreCard