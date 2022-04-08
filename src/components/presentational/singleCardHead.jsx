import React from "react";
import Styles from '../../styles/nestedHeader.module.scss';
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { BsFillGrid3X3GapFill, BsFillGridFill } from "react-icons/bs";


const SingleCardHeader = (props) => {

  
  


  return (
    <>
      <Container>
        <Row className="mt-2">
          <Col md={6}>
            <div className={Styles.search_input}>
              <i class="fa fa-search search_icon" aria-hidden="true"></i>
              <input    type="text" placeholder="Search" />
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-end">
              <Form.Select className={Styles.select_input} size="sm">
                <option>Single item</option>
                <option>Single item</option>
                <option>Single item</option>
              </Form.Select>
              &nbsp;
              <Form.Select className={Styles.select_input} size="sm">
                <option>Single item</option>
                <option>Single item</option>
                <option>Single item</option>
              </Form.Select>
              <Button className={Styles.btn_Small_nseted_header} variant="light">
                <BsFillGridFill />
              </Button>
              &nbsp;
              <Button className={Styles.btn_Small_nseted_header} variant="light">
                <BsFillGrid3X3GapFill />
              </Button>
            </div>
          </Col>
        </Row>
        <Row>

        </Row>
        {/* cards lenth div  */}
        <div className={Styles.render_items_length_dev}>
          <span className="text-capitalize fw-bold">{props.length} items</span>
        </div>
        {/* cards lenth div  */}
      </Container>
    </>
  );
};

export default SingleCardHeader;
