import React,{useState} from "react";
import { Button, Modal, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaEthereum } from "react-icons/fa";
import "../../styles/singlecardmodal.css";


const Singlecardmodal = (props) => {

  const data=props.data.filter((e)=> e.id === props.id)
  console.log(data)


    // checkbox states 
   const [disabale,setDisable]=useState(true)



  //  check box handle functionality 
   const handlecheck =(e)=>{
     e.target.checked ? setDisable(false) : setDisable(true)
   }
   
  const handleClose = () => props.setShow(false);
  return (
    <>
      <Modal size="lg" show={props.show} onHide={handleClose} className="modal" >
        <Modal.Header closeButton>
          <Modal.Title as="h3">
            Complete checkout
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroup.Item as="h6">Items</ListGroup.Item>
            {data.map((item)=>{
              return <>
                    <ListGroup.Item>
              <div className="list_items">
                <div className="list_right_items">
                  <div className="img_box">
                    <img src={item.img} alt="ntf" />
                  </div>

                  <div className="owner">
                    <span>{item.title}</span>
                    <span>{item.owner} #{item.token_id}</span>
                    <span>creater fee : {item.creater_fee}</span>
                  </div>
                </div>
                <div>
                  <span className="fs-5"> <FaEthereum /> {item.price} </span> <br />
             
                    <span className="d-flex justify-content-end">${item.price_dollar}</span>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroupItem >
              <div className="list_second_div">
                <h4>Total</h4>
               
                <div>
                <span  className="d-flex justify-content-end   text-secondary">
                  <FaEthereum />
                  {item.price}
                   <br />
                  ${item.price_dollar}
                </span>
                </div>
             
                      </div>
                {/* check box  */}
                 <style>
                 {
                     `
                     input[type="checkbox" i]{
                
                      border: 2px solid rgb(229, 232, 235);
                      cursor: pointer;
                      height: 24px;
                      min-width: 24px;
                      max-width: 24px;
                      border-radius: 10px;
                      background-color: rgb(255, 255, 255);
                      transition: box-shadow 0.2s ease 0s;
                      outline: none;

                                          }
                     `
                 }
                   </style>
            <div className="checkbox"> 
                <input type="checkbox"  onChange={handlecheck} />  &nbsp;
                <div>
                <span>By checking this box, I agree to NFT Terms of Service</span>
                </div> 
            </div>
            </ListGroupItem>

                  </>
            })}
            
         
          </ListGroup>
        </Modal.Body>
        <Modal.Footer className="modal_footer">
          <Button variant="primary" disabled={disabale} onClick={handleClose}>
              confirm checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Singlecardmodal;
