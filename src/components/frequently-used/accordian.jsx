import React from 'react'
import { Accordion } from 'react-bootstrap'
import {HiMenuAlt2}  from "react-icons/hi"
import "../../styles/accordian.css"
const Description = (props) => {
    const {description,creater}=props
  return (
    <>
<section className='mt-5'>
<Accordion >
  <Accordion.Item  eventKey="0" > 
    <Accordion.Header  className='accordian_header-text_and_icon '> <HiMenuAlt2 /> &nbsp; Description</Accordion.Header>
    <Accordion.Body className='bg-light'>
        <div className='mt-4'>
          <p>created by : <span className='text-primary'>{creater}</span></p>
            <p> {description}</p>
        </div>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</section>
    </>
  )
}

export default Description