import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import { NavLink ,useNavigate} from "react-router-dom"
import Styles from "../../styles/header.module.scss"

const Header = () => {
  const Navigate =useNavigate()
  
  return (
    <div>
      <Navbar className={`${Styles.header} fixed-top  `} expand="lg">
        <Container fluid>
          <div>
            <Navbar.Brand onClick={()=>Navigate("/")} ><img className={Styles.logo} src="https://opensea.io/static/images/logos/opensea.svg" alt="logo" />
              <span  className={Styles.logo_side_head}> NFT</span></Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className={Styles.search_field}>
            <i className="fa fa-search" id={Styles.search_icon} aria-hidden="true"></i>
            < input className={Styles.menu_search_field} type="text" placeholder='Search items,collections,and accounts' />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={Styles.menu_links}>
             <NavLink to="/explore" >Explore</NavLink>
             <NavLink to="/stats"> stats </NavLink>
             <NavLink to="/resourses"> resourses </NavLink>
             <NavLink to="/create"> create </NavLink>
             <NavLink to="/signup"> singup </NavLink>
             <NavLink to="/login"> login </NavLink>


            </Nav>
            <div className={Styles.header_end_icons}>
              <i className="fa fa-user-circle-o" aria-hidden="true"></i>
              <i className="fa fa-credit-card" aria-hidden="true"></i>
            </div>
          </Navbar.Collapse>
        </Container>


      </Navbar>

    </div>
  )
}

export default Header
