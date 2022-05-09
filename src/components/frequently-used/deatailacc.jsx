import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { BiDetail } from "react-icons/bi";

const Deatailaccordian = (props) => {
  const { data } = props;
  return (
    <section className="mt-5">
      <Accordion>
        <Accordion.Item>
          <Accordion.Header as="h2" className="fw-bold">
            {" "}
            <BiDetail /> &nbsp; Detail
          </Accordion.Header>
          <Accordion.Body className="bg-light">
            <Container>
              <Row>
                {data.map((item) => {
                  return (
                    <React.Fragment key={item.id}>
                      <Col md={6}>
                        <p>Contract address</p>
                        <p>Token ID</p>
                        <p>Token Standard</p>
                        <p>Block Chain</p>
                      </Col>
                      <Col md={6} className="text-end">
                        <p className="text-primary">{item.contract_address}</p>
                        <p className="text-primary">{item.token_id}</p>
                        <p>{item.token_standard}</p>
                        <p>{item.Blockchain}</p>
                      </Col>
                    </React.Fragment>
                  );
                })}
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default Deatailaccordian;
