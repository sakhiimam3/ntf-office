import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import {MdSell} from "react-icons/md";
import "../../styles/propertiesacc.css"
const Propertiesaccordian = (props) => {
    const {data} =props
  return (
    <section className='mt-5'>
   <Accordion>
    <Accordion.Item >
    <Accordion.Header as="h2" className='fw-bold'> <MdSell /> &nbsp; Properties</Accordion.Header>
     <Accordion.Body className='bg-light'>
     <Container fluid>
     <Row className=' gap-1'>
        {data.map((item,i)=>{

            return  <Col  key={i}  md={4} className="properties-divs">
                      <div className='text-primary'> <span>{item.status}</span></div>
                    <div className='fw-bold text-capitalize '><span>{item.status_text}</span> </div>
                    <div> <span>{item.percentage}</span> </div>  

                 </Col>
           
        })}
          </Row>
         </Container>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</section>
  )
}

export default Propertiesaccordian