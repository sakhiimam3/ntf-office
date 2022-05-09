import React  from "react";
import { Col, Container, Row } from "react-bootstrap";
// import SingleCardHeader from "../presentational/singleCardHead";
import NestedCard from "../presentational/singlecard";

// Api for single card list
const SingleCardList = (props) => {
  const {nestedData}=props

  const SingleCard = () => {
    return (
      <>
        <Container>
          <Row>
            {nestedData.map((item,index) => {
            
              return (
                <>
                  <Col className="mt-5" md={4}>
                    <NestedCard
                       data={nestedData}
                      imgsrc={item.img}
                      title={item.title}
                      owner={item.owner}
                      id={item.id}
                      likes={item.likes}
                      sale_time={item.sale_time}
                      price={item.price}
                      days_left={item.days_left}
                      token_id={item.token_id}
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
      {SingleCard()}
    </>
  );
};

export default SingleCardList;
