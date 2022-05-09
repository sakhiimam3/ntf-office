import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import {  Col, Container, Row } from "react-bootstrap";
import { MdCloudUpload } from "react-icons/md";
import { AiOutlineCopy } from "react-icons/ai";
import Profilebar from "./profilebar";
import { BsStar } from "react-icons/bs";
import {BiMessageCheck} from 'react-icons/bi'
import Styles from "../../styles/profile.module.scss";


const Profile = (props) => {
  // profile image get from json 
  const {data}=props

  const {id} = useParams()
    let render =data.filter((e)=> e.id === id)
    console.log(render)
  // image upload states
  const [image, setImage] = useState();
  const [preview, setPreview] = useState("");
  const fileUploadRef = useRef();


  // copy adress to clipboard  state
  const [text, setText] = useState('3s3ww432w32ww3qwefqwedqweqweqwed');
  // show to save clipboard 
  const [showsave,setShowSave]=useState(false)

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      render.map((e)=> setPreview(e.smallImage))
     
    }
  }, [image]);

  const getFileHandler = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5)) {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  const uploadHandler = () => {
    fileUploadRef.current.click();
  };

  // copyclipboard functionality 
  
  const copyHandler = event => {
    setText(event.target.value);
  }
  const copy = async () => {
    await navigator.clipboard.writeText(text);
      setShowSave(true)
      setTimeout(()=> setShowSave(false),2000)
   
  }


    // const default iamge set on upload 
  


  return (
    <>
      <section className={Styles.profile_section}>
        
                        {/* profile_banner  */}
                          <div className={Styles.profile_banner}>
                              {render.map((e,id)=>{
                                  return <div key={e.id}>
                                  <img  src={e.largeImage} alt="img" />
                                  </div>

                              })}
                               
                          </div>
             
        <Container className={Styles.profile_container}>
           
          <Row>
            <Col md={3}>
              <div className={Styles.profile_content}>
                <div className={Styles.image_upload} onClick={uploadHandler}>
                  {preview ? (
                    <img
                      src={preview}
                      alt="upload"
                      onClick={() => setImage(null)}
                    />
                  ) : (
                    <MdCloudUpload />
                  )}

                  <input
                    type="file"
                    ref={fileUploadRef}
                    onChange={getFileHandler}
                    accept="image/*"
                  />
                </div>
              </div>
            </Col>
            {render.map((item,id)=>{
                                  return<>
                                     <Col md={9} className={`${Styles.profile_detail}`}>
              <div className={Styles.profile_name}>
                <span>{item.name}</span> <br />
                <span>{item.email}</span>
              </div>
              <div className={Styles.recive_address}>
                <input type="text" value={text} onChange={copyHandler} />
                 
                <div className={Styles.icon}>
                  <AiOutlineCopy onClick={copy} />
            {showsave ?  <span class="badge badge-dark text-secondary">copied</span> : null}   

                </div>
              </div>
              <div className={Styles.follow}>
                <div className={Styles.icon}>
                  <BsStar />
                </div>
                <span>follow</span>
              </div>

              <div className={Styles.message}>
                <div className={Styles.icon}>
                  <BiMessageCheck />
                </div>
                <span>message</span>
              </div>
            </Col>
                                  </>
                              })}
                               
         
          </Row>
        </Container>
        <Profilebar />
      </section>

    </>
  );
};

export default Profile;
