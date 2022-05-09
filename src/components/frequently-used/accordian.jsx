import React from 'react'
import { Accordion } from 'react-bootstrap'
import {HiMenuAlt2}  from "react-icons/hi"
import "../../styles/accordian.css"
const Accordian = (props) => {
    const {description,creater}=props
  return (
    <>
<section className='mt-5'>
<Accordion  alwaysOpen>
  <Accordion.Item >
    <Accordion.Header as="h2" className='fw-bold'> <HiMenuAlt2 /> &nbsp; Description</Accordion.Header>
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

export default Accordian