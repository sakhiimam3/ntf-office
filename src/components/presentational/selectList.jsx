import React from "react"
// import { AiOutlineMenuFold } from "react-icons/ai";
// import { GrFormAdd } from "react-icons/gr";
import Styles from "../../styles/selecInput.module.scss"
const SelectList = ({id,icons,heading,para,add_icon}) => {
  return (
    <React.Fragment key={id}> 
    
    <div className={Styles.SelectList}>
        <ul class="list-group list-group-flush ">
          <li class="list-group-item  pt-3 ">
               <div className={Styles.list_content}>
                       <div className="container-fluid">
                           <div className="row">
                               <div className={`col-md-1 d-flex justify-content-start ${Styles.icon}`}>
                               <i className={`fa ${icons}`} aria-hidden="true"></i>
                                 </div>
                          
                           <div className={`col-md-10  ${Styles.select_list_text}`}>
                                  <h6>{heading}</h6>
                                  <p>{para}</p>
                           </div>
                             <div className={`col-md-1 d-flex justify-content-end ${Styles.select_list_btn}`}>
                             <button type="button" class="btn btn-outline-primary"> <i className={ `fa ${add_icon}` } aria-hidden="true"></i></button>
                             </div>
                             </div>
                       </div>
                           
               </div>
          </li>

         </ul>
         </div>
      
    </React.Fragment>
  )
}

export default SelectList