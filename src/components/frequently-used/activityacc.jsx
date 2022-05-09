// import React,{useState} from 'react'
import { Accordion } from 'react-bootstrap'
import {RiArrowUpDownLine}  from "react-icons/ri"
import "../../styles/activityacc.css"
// import Datatable2 from '../presentational/datatable2'  
// import TableList from '../presentational/dataTbale'
import { BasicTable } from '../ReactTable/reacttable'
const ActivityAccordian = (props) => {
  //   const {data}=props
  // const [selectarr,setselectArry]=useState([])

  // const [showDelete,setShowDelete]=useState(false)


  // handle select input change 
//   const selectHander=(e)=>{
//         setselectArry([...selectarr,e.target.value])
//   }

// const handleDelete=(id)=>{
//       let deleleteArr=selectarr.filter((e,i)=> i !== id)
//        setselectArry(deleleteArr)
// }
  
  return (
    <section className='mt-2 '>
    <Accordion>
      <Accordion.Item>
        <Accordion.Header as="h2" className='fw-bold'> <RiArrowUpDownLine /> &nbsp; Item Activity</Accordion.Header>
        <Accordion.Body className='bg-light p-0'>
        
            {/* <Datatable2 /> */}
            <BasicTable />

             {/* <TableList  /> */}
             
           
        </Accordion.Body>
          
      </Accordion.Item>
    </Accordion>
    </section>
  )
}

export default ActivityAccordian

