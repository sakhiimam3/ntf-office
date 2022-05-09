import React from "react";
import { Container, Row, Tab, Tabs,Col } from "react-bootstrap";
import { FaTh } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import Styles from "../../styles/nestedTabs.module.scss";
// import Sidebar from "./sidebar";

const SingleCradTabs = () => {
  return (
    <div>
      {/* tabs section  */}

      <Tabs
        defaultActiveKey="Item"
        id="uncontrolled-tab-example"
        className={Styles.nested_tab}
      >
        <Tab
          eventKey="Item"
          title={
            <span className={Styles.nested_tab_icon}>
              <FaTh />
              Item
            </span>
          }
        >
            <Container fluid>
              <Row>
                {/* <Col  md={3}>
                  <Sidebar />
                </Col>  */}
                <Col md={12}>
                </Col>

              </Row>
            </Container>

         
        </Tab>

        <Tab
          eventKey="Activity"
          title={
            <span className={Styles.nested_tab_icon}>
              <FiActivity /> Activity
            </span>
          }
        ></Tab>
      </Tabs>
      {/* tab section end   */}
    </div>
  );
};

export default SingleCradTabs;
