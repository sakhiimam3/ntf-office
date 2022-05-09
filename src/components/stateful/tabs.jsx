import React, { useState, useEffect } from 'react'
// import axios from "axios";
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import Styles from "../../styles/tabs.module.scss";
import Loader from '../frequently-used/loader';
import Cards from "../presentational/card";


//  calling api for  card
const CardTabs = (props) => {
 const {data}=props
 
    const [isloading, setIsloading] = useState(false)


    const RenderCard = () => {
        return (
            <>

                <Container fluid>
                    <Row>
                        {data.map((item, index) => {

                            return (
                                <>
                                    <Col md={4}>
                                        <Cards
                                            imgsrc={item.smallImage}
                                            title={item.title}
                                            id={index + 1}
                                            num={index}
                                        />



                                    </Col>

                                </>
                            )


                        })}

                    </Row>

                </Container>

            </>

        );
    };


    return (
        <>
            <Container fluid className={Styles.Tab_container}>
                <Tabs defaultActiveKey="trending" id="uncontrolled-tab-example" className={`mb-3 d-flex justify-content-around  ${Styles.nav_tabs} `}>
                    <Tab eventKey="trending" title="Trending">
                        {isloading ?
                            <Container fluid>
                                <Row>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                </Row>
                            </Container> :

                            <RenderCard />

                        }
                    </Tab>
                    <Tab eventKey="top" title="Top">
                        {isloading ?
                            <Container fluid>
                                <Row>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                </Row>
                            </Container> :

                            <RenderCard />

                        }
                    </Tab>
                    <Tab eventKey="art" title="Art">
                        {isloading ?
                            <Container fluid>
                                <Row>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                </Row>
                            </Container> :

                            <RenderCard />

                        }
                    </Tab>
                    <Tab eventKey="collectibles" title="Collectibles">
                        {isloading ?
                            <Container fluid>
                                <Row>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                </Row>
                            </Container> :

                            <RenderCard />

                        }
                    </Tab>
                    <Tab eventKey="domain names" title="Domain Names">
                        {isloading ?
                            <Container fluid>
                                <Row>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                </Row>
                            </Container> :

                            <RenderCard />

                        }
                    </Tab>
                    <Tab eventKey="photography" title="Photography">
                        <Container fluid>
                            <Row>
                                <RenderCard />
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="sports" title="Sports">
                        {isloading ?
                            <Container fluid>
                                <Row>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                </Row>
                            </Container> :

                            <RenderCard />

                        }
                    </Tab>
                    <Tab eventKey="tranding cards" title="Tranding Cards">
                        {isloading ?
                            <Container fluid>
                                <Row>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                </Row>
                            </Container> :

                            <RenderCard />

                        }
                    </Tab>
                    <Tab eventKey="utility" title="Utility">
                        {isloading ?
                            <Container fluid>
                                <Row>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                </Row>
                            </Container> :

                            <RenderCard />

                        }
                    </Tab>
                    <Tab eventKey="virtual world" title="virtual World">
                        {isloading ?
                            <Container >
                                <Row>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                    <Col md={4}>
                                        <Loader />
                                    </Col>
                                </Row>
                            </Container> :

                            <RenderCard />

                        }
                    </Tab>
                </Tabs>

            </Container>
        </>
    )
}

export default CardTabs