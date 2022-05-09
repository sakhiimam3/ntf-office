import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { MdViewColumn } from "react-icons/md";
import MoreCard from "../presentational/moreCard";

const Morecollectionaccordian = (props) => {
  const { data } = props;
  return (
    <section className="mt-5">
      <Accordion>
        <Accordion.Item>
          <Accordion.Header as="h2" className="fw-bold">
            {" "}
            <MdViewColumn /> &nbsp; More from this collection
          </Accordion.Header>
          <Accordion.Body className="bg-light">
            <Container>
              <Row>
                {data.map((item, i) => {
                  return (
                    <>
                      <MoreCard
                        img={item.img2}
                        title={item.title}
                        owner={item.owner}
                        sale_time={item.sale_time}
                        item_key={i + 1}
                      />
                    </>
                  );
                })}
              </Row>
            </Container>

            <MoreCard />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default Morecollectionaccordian;
