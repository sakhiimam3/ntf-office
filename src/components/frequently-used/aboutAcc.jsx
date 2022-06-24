import React from 'react'
import { Accordion,Container,Row} from 'react-bootstrap'
import {MdVerticalSplit}  from 'react-icons/md'
import { Link } from 'react-router-dom'
import {BsGlobe,BsTwitter,BsThreeDotsVertical}  from "react-icons/bs"
import {FaEthereum}  from "react-icons/fa"
import "../../styles/aboutacc.css"

const AboutAccordian = (props) => {
     const {data}=props
  return (
    <Accordion >  
    <Accordion.Item  eventKey="0" >
    <Accordion.Header  className='accordian_header accordian_header-text_and_icon '> <MdVerticalSplit /> &nbsp; About </Accordion.Header>
     <Accordion.Body className='bg-light'>
     <Container fluid>
     <Row>
        {data.map((item,index)=>{
               
            return  <React.Fragment key={index}>
             <div className='about-div '>
                      <div className="img-box ">
                          <img className='img-fluid' src={item.img} alt="about_top_image" />
                      </div>
                      <div className='text  pl-2'>
                          <p>{item.text}</p>
                      </div>
            </div>  
            </React.Fragment>
           
        })}
            
              <div className="btn-group">
                 <button><Link to={{ pathname: "https://www.google.com/" }} target="_blank" ><BsGlobe /> </Link></button>
                  <button ><BsTwitter /></button>
                     <button><FaEthereum/></button>
                     <button><BsThreeDotsVertical /></button>

</div>
          </Row>
         </Container>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
  )
}

export default AboutAccordian