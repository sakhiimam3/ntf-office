import React,{useState} from "react";
import Profile from "./profile";
import RenderInnerList from "../stateful/singleCardList";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

import Collectionhead from "./collectionhead";
import Styles from "../../styles/profile.module.scss";
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
       <div style={{backgroundColor:"black"}}>
      {/* profile section start */}
      <Profile data={props.data} />
      {/* profile section end */}

      {/* calling single card  */}
      <Container>
        <Row>
          <Col md={9}>
            <Collectionhead />
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <RenderInnerList  nestedData={props.nestedData}  />

          </Col>
          <Col md={3}>
            <div className={Styles.side_menu}>
              <Card className={Styles.side_menu_card}>
                <Card.Title className={Styles.heading}>
                  <h3>Search Nft</h3>
                </Card.Title>
                <Card.Body>
                  <div className={Styles.search_field}>
                    <h6>Search from best Rarest NFT collections</h6>
                    <input type="text" placeholder="Search NFT" />
                    <BsSearch />
                  </div>
                </Card.Body>
              </Card>
         

            {/* featured nft  */}
            <Card className={Styles.featured_card}>
              <Container>
                <Row>
                    <h4>Featured NFT</h4>
                  {features.map((item, index) => {
                    return (
                      <Col key={index} md={3} className={Styles.features_img}>
                        
                        <img src={img} className="img-fluid" alt="img" />
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </Card>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
};

export default Collections;
