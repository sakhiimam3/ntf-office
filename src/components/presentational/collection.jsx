import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CircleImg from "../../Assets/Images/circle2.png";
import Styles from "../../styles/collection.module.scss";
import SingleCradTabs from "./singleCradTabs";
import BannerSin from "../../Assets/Images/banner-sin.jpg"
import Profile from "./profile";



const Collections = () => {

  return (
    
    //   banner section  start
    <div className={Styles.Collection}>
      <Container fluid>
        <Row>
          <Col className="p-0">
            <img
              className={Styles.banner_single}
              src={BannerSin}
              alt="banner"
            />
          </Col>
        </Row>
        <div className={Styles.banner_circle_img}>
          <img src={CircleImg} alt="circle" />
        </div>
      </Container>
      {/* banner section end  */}

      {/* profile section start */}
      <Profile />
      {/* profile section end */}


      {/* calling single card  */}
      <SingleCradTabs />
    </div>

  );
};

export default Collections;
