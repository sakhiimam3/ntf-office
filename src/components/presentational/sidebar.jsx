import React,{useState,useRef} from 'react'
import Styles from "../../styles/sidebar.module.scss"
import {FaArrowLeft,FaArrowRight} from "react-icons/fa"
const Sidebar = () => {
  

    const [showside,setShowside]=useState(false)
    const openToggle=useRef(null)
    const closeToggle=useRef(null) 

   console.log(openToggle,"<<<<<openToggle")
   console.log(closeToggle,"<<<<<closeToggle")

    const toggleClose=()=>{
        setShowside(true)
        openToggle.current.style.display="block";
        closeToggle.current.style.display="none"
        
    }

    const toggleOpen=()=>{
        setShowside(false)
        openToggle.current.style.display="none";
        closeToggle.current.style.display="block"
         
    }




  return (
      <>
         <div className={`${showside ? Styles.isactive : Styles.side_bar}`}>
              <div ref={closeToggle} className={Styles.toggle_close_btn}>
              <FaArrowLeft onClick={toggleClose} />
              </div>
              <div ref={openToggle} className={Styles.toggle_close_btn}>
              <FaArrowRight id={Styles.Open_Toggle} onClick={toggleOpen} />
              </div>

         </div>
         
      </>

    )
}

export default Sidebar