import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Styles from "../../styles/cmetamask.module.scss";
import img from "../../Assets/Images/metamaskLogo.png";



const CreateMetamask = () => {

  const Navigate = useNavigate()


  // states of connecWallet
  const [error, setError] = useState(false);
  const [created, setCreated] = useState(false)


  //  function of connect wallet to metamask
  const connectWalletHandler = async () => {
    if (window.ethereum) {
      try {
         await window.ethereum.request({
          method: "eth_requestAccounts",

        });
        setCreated(true)

      } catch (error) {
        console.log("error")

      }
    }
    else {
      setError(true)
    }

  };

  //   navigate to create page 
  if (created) {
    Navigate("/create")
  }


  return (
    <>

      <section className={Styles.metamask_section}>

        <Container>
          <Row md={8}>
            {error ?
              <div class="alert alert-danger d-flex justify-content-center " role="alert">
                <h6 >Insall metamask extension !</h6>
              </div>
              : null}
          </Row>
          <Row className="mt-5 d-flex justify-content-center ">
            <Col md={7}>
              <ul class="list-group">
                <li class="list-group-item">




                  <div className={Styles.list_img}>
                    <button onClick={connectWalletHandler}>
                      <img src={img} alt="img" /> <span>metamask</span>
                    </button>
                  </div>
                  <div>
                    <span class="badge bg-primary">popular</span>
                  </div>










                </li>
              </ul>
            </Col>
          </Row>

        </Container>


      </section>
    </>
  );
};

export default CreateMetamask;
