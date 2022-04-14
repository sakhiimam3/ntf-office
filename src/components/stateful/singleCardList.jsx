import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import SingleCardHeader from "../presentational/singleCardHead";
import NestedCard from "../presentational/singlecard";
import img from "../../Assets/Images/nft7.png";

// Api for single card list
const SingleCardList = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const SingleCard = () => {
    return (
      <>
        <Container>
          <Row>
            {data.map((item,index) => {
            
              return (
                <>
                  <Col className="mt-5" md={3}>
                    <NestedCard
                      imgsrc={img}
                      title={item.title.slice(0, 10)}
                      body={item.body[5]}
                      id={item.id}
                      num={index}
                          />
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </>
    );
  };

  return (
    <>
      <SingleCardHeader length={data.length} />
      {SingleCard()}
    </>
  );
};

export default SingleCardList;
