import React from "react";
import { Card, Placeholder } from "react-bootstrap";
import Styles from "../../styles/loader.module.scss";
const Loader = () => {
  return (
    <Card className={Styles.loader_card}>
      <Card.Img variant="top" src="" />
      <Card.Body className="cardBody">
        <Placeholder
          className="d-inline-block mt-3 "
          as={Card.Title}
          animation="glow"
        />

        <Placeholder as={Card.Text} animation="glow" />
        <div className="mt-5"></div>
      </Card.Body>
    </Card>
  );
};

export default Loader;
