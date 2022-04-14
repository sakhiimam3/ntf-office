import React, { useRef } from "react";
import { GrFormAdd } from "react-icons/gr";
import { AiFillWallet } from "react-icons/ai";
import { Container, Row, Button, Col } from "react-bootstrap";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import Styles from "../../styles/profile.module.scss";
const Profile = () => {



  const readMoreBtn = useRef(null);
  const ref = useRef(null);
  const readLessBtn = useRef(null);



  //   read more functionality 
  const readMore = () => {
    ref.current.style.display = "block";
    readLessBtn.current.style.display = "inline";
    readMoreBtn.current.style.display = "none";
  };
  //   read more functionality  end 



  //   read less functionality 
  const readLess = () => {
    ref.current.style.display = "none";
    readMoreBtn.current.style.display = "inline";
    readLessBtn.current.style.display = "none";
  };
  //   read less functionality  end 



  return (
    <>
      <Container fluid>
        <Row className="d-flex justify-content-end mt-4">
          <Col
            md={4}
            className="d-flex justify-content-center  align-items-center "
          >
            <Button
              variant="light"
              className={`p-2 m-2 ${Styles.watchlistbtn} d-flex align-items-center justify-content-between`}
              size="lg"
            >
              <GrFormAdd /> add to watchlist
            </Button>

            <Button className={Styles.indivisual_side_icon} variant="light">
              <AiFillWallet />
            </Button>
            <Button className={Styles.indivisual_side_icon} variant="light">
              <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            </Button>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className={Styles.profile_section}>
          <Col md={6} className="text-center">
            <h1>Cyber Snails Official</h1>
            <span className={Styles.created_by_owner}>
              created by <a href="#"> cybersnails-developer</a>
            </span>
            <br />
            <Button>
              <i className="fa fa-twitter" aria-hidden="true"></i> CyberSnailsNFT{" "}
              <a href="#">Linked</a>
            </Button>
            <div className={Styles.small_card}>
                <div className={Styles.card_text}>
                   <h6>3.3k</h6>
                  <span>item</span>
             </div>
                 <div className={Styles.card_text}>
                     <h6>3.3k</h6>
                      <span>item</span>
              </div>
              <div className={Styles.card_text}>
                <h6>3.3k</h6>
                <span>item</span>
              </div>
              <div className={Styles.card_text}>
                <h6>3.3k</h6>
                <span>item</span>
              </div>
            </div>
          </Col>
          <p className={Styles.readmore_text}>
            The upload has succeeded, 3333 Cyber Snails made it through. Join
            the discord to access <br /> the alpha section with your Cyber
            Snail.
          </p>
          <p className={Styles.readmore_text}>
            The upload has succeeded, 3333 Cyber Snails made it through. Join
            the discord to access <br /> the alpha section with your Cyber
            Snail.
          </p>
          <div className={Styles.readmore_text} id={Styles.more_text} ref={ref}>
            <p>
              The upload has succeeded, 3333 Cyber Snails made it through. Join
              the discord to access <br /> the alpha section with your Cyber
              Snail.
            </p>
          </div>

          <button
            ref={readMoreBtn}
            className={Styles.readmoreButton}
            onClick={readMore}
            size="lg"
          >
            <BsChevronDown />
          </button>

          <button
            ref={readLessBtn}
            id={Styles.readless}
            onClick={readLess}
            size="lg"


          >
            <BsChevronUp />
          </button>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
