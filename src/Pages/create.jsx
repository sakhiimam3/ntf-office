import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdCloudUpload } from "react-icons/md";
import CreateForm from "../components/presentational/createForm";
import Styles from "../styles/create.module.scss";
const Create = () => {
  return (
    <>
      <section className={Styles.create_section}>
        <Container>
          <Row className="mt-5 pt-5 d-flex justify-content-center">
            <Col sm={10} md={9}>
              {/* create new item  */}
              <div className="create_content">
                <div className="create_text">
                  <h1 className="text-capitalize fw-bold mb-3">
                    create new item
                  </h1>
                  <p style={{fontSize:"13px"}} className="text-capitalize fs-small">
                    <span className="text-primary">*</span>  required fields
                  </p>

                  <span className="fs-small text-capitalize">
                    image,video,audio,or 3D model {" "}
                    <span className="text-danger"> *</span>
                  </span>
                </div>
                <div className={Styles.file_size_text}>
                  <span>
                    File types supported : JPG, PNG, GIF, SVG, MP4, WEBM, MP3,
                    WAV, OGG, GLB, GLTF. Max size: 100 MB
                  </span>
                </div>

                <div class={Styles.Upload_img}>
                  <div className={Styles.overlay}>
                    {/* <img /> */}
                    <MdCloudUpload />
                  </div>
                </div>
              </div>

              {/* form section component */}
                <CreateForm />
               {/* form section   component */}
              
            
                
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
