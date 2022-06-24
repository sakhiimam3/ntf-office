import React from "react";
import {
  Col,
  Container,
  OverlayTrigger,
  Row,
  Tooltip,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { GrRefresh } from "react-icons/gr";
import { useParams } from "react-router";
import { BsFillShareFill, BsThreeDotsVertical } from "react-icons/bs";
import { MdLocalOffer } from "react-icons/md";
import "../../styles/listing.css";
import Accordian from "../frequently-used/accordian";
import Pricehisaccordian from "../frequently-used/pricehisaccordian";
import ListingAccordian from "../frequently-used/listingaccodian";
import OffersAccordian from "../frequently-used/offersaccordian";
import PropertiesAccordian from "../frequently-used/propertiesacc";
import AboutAccordian from "../frequently-used/aboutAcc";
import Deatailaccordian from "../frequently-used/deatailacc";
import ActivityAccordian from "../frequently-used/activityacc";
import Morecollectionaccordian from "../frequently-used/morecollectionacc";
import { IoEyeSharp } from "react-icons/io5";

// import { useParams } from 'react-router'
const Listing = (props) => {
  const { id } = useParams();

  // data destructured  for child components
  const {
    nestedData,
    propertiesData,
    aboutdata,
    listaccordian,
    offerdata,
    activityData,
  } = props;

  const data = nestedData.filter((e) => e.id === id);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Rinked blockchain
    </Tooltip>
  );

  return (
    <>
      <section className="main_container">
        {data.map((item, i) => {
          return (
            <React.Fragment key={item.id}>
              <Container fluid className="px-5">
                {/* left side  container  */}
                <Row>
                  <Col md={5}>
                    <div className="top_img">
                      <img src={item.img} className="img-fluid" alt="imag" />
                      <div className="img_top_bar">
                        <div className="blockchain_rinked">
                          <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                          >
                            <Button variant="light">
                              <FaEthereum />
                            </Button>
                          </OverlayTrigger>
                        </div>
                        <div className="favorite d-flex align-items-center">
                          <div>
                            <span>0</span> &nbsp;
                            <AiOutlineHeart />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* description properties etc accordion  */}
                    <Accordian
                      description={item.description}
                      creater={item.created_by}
                    />
                    {/* properties accordian  */}
                    <PropertiesAccordian data={propertiesData} />
                    {/* {About accordian } */}
                    <AboutAccordian data={aboutdata} />
                    {/* deatail accordian  */}
                    <Deatailaccordian data={data} />
                  </Col>

                  {/* right side  container  */}

                  <Col md={7}>
                    <div className="right_top_bar">
                      <div className="eth_token">
                        <span className="text-primary fs-5">
                          {item.token_standard}
                        </span>{" "}
                        <br /> <br />
                        <span className="owner text-capitalize fw-bold">
                          {item.owner}
                        </span>{" "}
                        <br /> <br />
                        <span className="owend-by  text-primary">
                          {" "}
                          Owned by {item.owner}
                        </span>{" "}
                        &nbsp;
                        <span className="views fw-light">
                          {" "}
                          <IoEyeSharp className="fs-4 text-secondary" />
                          &nbsp; 6 views
                        </span>
                      </div>
                      <div>
                        <ButtonGroup size="lg" className="mb-4 top_grpup_icons">
                          <button>
                            {" "}
                            <GrRefresh />
                          </button>
                          <button>
                            {" "}
                            <BsFillShareFill />
                          </button>
                          <button>
                            {" "}
                            <BsThreeDotsVertical />
                          </button>
                        </ButtonGroup>
                      </div>
                    </div>
                    <Row>
                      {/* make offer  */}
                      <div className="make_offer_div mt-4">
                        {/* <div>
                          <span>current price</span> <br />
                          <div className="d-flex align-items-center gap-1">
                            <span>  <FaEthereum /> </span>  <span className="fs-3">{item.price}</span>  <span>(${item.price_dollar})</span>
                          </div>
                        </div> */}

                        <div className="btn_div">
                          {/* <button>
                         
                            <MdLocalOffer /> buy now
                          </button> */}
                          <button>
                            <MdLocalOffer /> &nbsp; make offer
                          </button>
                        </div>
                      </div>
                    </Row>
                    {/* price history accordian  */}
                    <Pricehisaccordian />
                    {/* {list accordian} */}
                    <ListingAccordian data={listaccordian} />
                    {/* 0ffer accordian  */}
                    <OffersAccordian data={offerdata} />
                  </Col>
                </Row>
              </Container>

              <Container fluid>
                {/* items activity accordian  */}

                <ActivityAccordian data={activityData} />
                {/* more activity accordian  */}
                <Morecollectionaccordian data={nestedData} />
              </Container>
            </React.Fragment>
          );
        })}
      </section>
    </>
  );
};

export default Listing;
