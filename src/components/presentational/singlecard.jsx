import React,{useState}  from "react";
import { Card } from "react-bootstrap";
import { useNavigate} from "react-router";

import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import Ethimg from "../../Assets/Images/ethereium.png";
import Singlecardmodal from "../frequently-used/singlecardmodal";
import "../../styles/nestedcard.css"

const Singlecard = (props) => {

  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleModal = () => {
    setShow(true);
  };

  return (
    <React.Fragment key={props.id}>
      <Card className="card">
        <div
          className="card_header"
          onClick={() => navigate(`/listing/${props.id}`)}
        >
          <div className="detail">
            <div className="author_image">
              <img
                src={props.imgsrc}
                className="img-fluid"
                alt="Cinque Terre"
              />
            </div>
           
            <div className="single_author_name">
              <span>{props.owner}</span>
            </div>
          </div>
          <div>
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="card_image">
          <img className="img-fluid" src={props.imgsrc} alt="card_image" />
        </div>
        {/* card body  */}

        <div>
          {/* sale and title div */}
          <div className="mt-4 p-2 d-flex flex-column align-items-end">
            <div>
              <span>{props.title}</span>
            </div>
            <div>
              <span className="text-secondary">{props.sale_time}</span>
            </div>
          </div>
          {/* price and day left div  */}
          <div className="d-flex justify-content-between px-2 align-items-end">
            <div>
              {" "}
              <span>
                price <br />
                <FaEthereum /> {props.price} <br />
                <span>#{props.token_id}</span>
              </span>{" "}
            </div>
            <div>
              <span> {props.days_left} Days left</span>
            </div>
          </div>
          <div className="card_bottom_div">
            <div className="account_eth">
              <img src={Ethimg} alt="ethimg" />
            </div>
            <div className="badge">
              <span className="badge badge-primary">
                {" "}
                <AiFillHeart /> {props.likes} k
              </span>
            </div>
            <div className="placebid_btn">
              <button  onClick={handleModal}>Buy Now</button>
            </div>
          </div>
        </div>
      </Card>
      <Singlecardmodal   id={props.id}  data={props.data} show={show} setShow={setShow} />
    </React.Fragment>
  );
};

export default Singlecard;
