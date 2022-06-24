import React from 'react'
import { Col } from 'react-bootstrap'
import "../../styles/morecard.css"
const MoreCard = (props) => {
    const {img,title,owner,sale_time}=props
    
 
  return (
      <React.Fragment >
          <Col md={3} xs={12} > 
    <div>
    <div className="col">
      <div className="moreCards"> <img  className="card-image img-fluid" src={img}/>
        <div className="card-title ">{title}</div>
        <div className="card-description">
              <div>
                      {owner}
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