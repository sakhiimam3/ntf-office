import React,{useState} from "react";
import Profile from "./profile";
import RenderInnerList from "../stateful/singleCardList";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

import Collectionhead from "./collectionhead";
import "../../styles/profile.css"
import img from "../../Assets/Images/nft7.png";

const Collections = (props) => {




  const features = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];

  return (
    <>
       <div style={{backgroundColor:"black", minHeight:'100%'}}>
      {/* profile section start */}
      <Profile data={props.data} />
      {/* profile section end */}

      {/* calling single card  */}
      <Container>
        <Row className="">
          <Col md={9}>
            <Collectionhead />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <RenderInnerList  nestedData={props.nestedData}  />

          </Col>
   
        </Row>
      </Container>
      </div>
    </>
  );
};

export default Collections;
