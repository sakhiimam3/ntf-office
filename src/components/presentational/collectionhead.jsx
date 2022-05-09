import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {IoIosFlash,IoMdToday}  from "react-icons/io"
import {TiPuzzle}  from "react-icons/ti"
import {HiOutlineCollection}  from "react-icons/hi"


import Styles from "../../styles/profile.module.scss"
const Collectionhead = () => {
  return (
   <>
         
          <Navbar   className={Styles.collection_header}>
    <Container>
    <Nav className="d-flex align-items-center flex-wrap">
      <Nav.Link href="#home" className='text-light  text-capitalize'>  <IoIosFlash /> on sale</Nav.Link>
      <Nav.Link href="#features" className='text-light '> <IoMdToday /> owned</Nav.Link>
      <Nav.Link href="#pricing" className='text-light text-capitalize'> <TiPuzzle />created</Nav.Link>
      <Nav.Link href="#pricing" className='text-light text-capitalize'> <HiOutlineCollection />  collection</Nav.Link>

    </Nav>
      <div>
              <form>
                    <select className='bg-dark text-light'> 
                         <option value="1"> Everthing</option>
                         <option value="1">Recent</option>
                         <option value="1">Relevanr</option>
                         <option value="1">Popular</option>



                    </select>
              </form>
      </div>
    </Container>
  </Navbar>
        
    </>
  )
}

export default Collectionhead