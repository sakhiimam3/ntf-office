import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Styles from "../styles/home.module.scss";
 import img from "../Assets/Images/star.png";
const Home = () => {
   const Navigate=useNavigate()


  const handleCreate=()=>[
          Navigate("/createMetamask")
  ]

  return (
    <>
      <section className={Styles.main_container}>
        <Container className="d-flex align-items-center">
          <Row className="mt-5 pt-5">
            <Col md={6}>
              <div className="">
                <div className="text-box mb-4">
                  <div className={Styles.heading}>
                    <h1>Discover, collect, and sell extraordinary NFTs</h1>
                    <p>
                      OpenSea is the world's first <br /> and largest NFT
                      marketplace
                    </p>
                  </div>
                  <div className="btns mt-5">
                    <button   type="button" class="btn btn-primary btn-lg">
                      Explore
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-lg"
                      onClick={handleCreate}
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className={Styles.star_img_dev}>
              <div>
                <img src={img} alt="start-img" />
              </div>
            </Col>
          </Row>
        </Container>

    
      </section>
    </>
  );
};

export default Home;
