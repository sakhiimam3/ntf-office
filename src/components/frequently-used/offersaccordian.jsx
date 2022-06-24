import React from 'react'
import { Accordion, Table } from 'react-bootstrap'
import {MdMenu}  from "react-icons/md"



const OffersAccordian = (props) => {
  const {data}=props
  return (
    
          <>
<section className='mt-3'>
<Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header className='accordian_header-text_and_icon'> <MdMenu /> &nbsp; Offers</Accordion.Header>
    <Accordion.Body className='bg-light'>
    <Table   borderless responsive  hover  style={{fontSize:"14px"}} >
  <thead>
    <tr>
    
      <th>Price</th>
      <th>USD Price</th>
       <th>Floor Differnce</th>
      <th>Expiration</th>
      <th>From</th>
    </tr>
  </thead>
    {data.map((item,i)=>{
          return <React.Fragment key={i}>
          <tbody>
    <tr>
      <td>  <img width="30px" height="20px" src="	https://openseauserdata.com/files/accae6b6fb3888cbff27a013729c22dc.svg" alt="" />  {item.price} WETH</td>
      <td >{item.price_dollar}</td>
        <td>{item.fllor_difference}</td>
      <td>{item.expiration}</td>
      <td>{item.from}</td>
    </tr>
  </tbody>
          </React.Fragment>
    })}
  
</Table>
       
    </Accordion.Body>
      
  </Accordion.Item>
</Accordion>
</section>
</>
  )
}

export default OffersAccordian
