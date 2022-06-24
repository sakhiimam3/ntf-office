import React, { useRef, useState, useEffect } from "react";
import Styles from "../../styles/create.module.scss"
import { MdCloudUpload } from "react-icons/md";

const ImageUploader = () => {
    const [image, setImage] = useState();
    const [preview, setPreview] = useState("");
  
    const fileUploadRef = useRef();
  
    useEffect(() => {
      if (image) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(image);
      } else {
        setPreview(null);
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
  return (
    <div className={Styles.Upload_img}>
    <div className={Styles.overlay} onClick={uploadHandler}>
      {/* <img /> */}

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
  )
}

export default ImageUploader