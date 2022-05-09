import React from 'react'
import { Accordion, Table } from 'react-bootstrap'
import {MdSell}  from "react-icons/md"
const ListingAccordian = (props) => {
  const {data}=props
  return (
    
          <>
<section className='mt-5'>
<Accordion  >
  <Accordion.Item >
    <Accordion.Header as="h2" className='fw-bold'> <MdSell /> &nbsp; Listing</Accordion.Header>
    <Accordion.Body className='bg-light'>
    <Table striped bordered hover  style={{fontSize:"14px"}}>
  <thead>
    <tr>
    
      <th>Price</th>
      <th>USD Price</th>
      <th>Expiration</th>
      <th>From</th>
    </tr>
  </thead>
    {data.map((item,i)=>{
          return <React.Fragment key={i}>
          <tbody>
    <tr>
      <td>  <img width="30px" height="20px" src="	https://openseauserdata.com/files/accae6b6fb3888cbff27a013729c22dc.svg" alt="" />  {item.price} WETH</td>
      <td>{item.price_dollar}</td>
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

export default ListingAccordian
