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
          <Accordion.Header  className="accordian_header-text_and_icon">
            {" "}
            <MdViewColumn /> &nbsp; More from this collection
          </Accordion.Header>
          <Accordion.Body className="bg-light">
            <Container>
              <Row>
              
                {data.slice(1).map((item, i) => {

                  return (
                    <React.Fragment key={i}>
                      <MoreCard
                        img={item.img2}
                        title={item.title}
                        owner={item.owner}
                        sale_time={item.sale_time}
                      />
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

export default Morecollectionaccordian;
