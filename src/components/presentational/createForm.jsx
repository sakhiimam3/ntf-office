import React,{useState} from "react";
import Select from 'react-select';

import ethimg from "../../Assets/Images/ethereium.png"
import polyImage  from "../../Assets/Images/polygon.png"
import Styles from "../../styles/createform.module.scss";
import CreateCollection from "./createCollection";

const CreateForm = () => {

  // blockChain select states
  const [selectedOption, setSelectedOption] = useState(null);
 
  // createbtn states
  const [disable, setDisable] =useState(true);

  

// input states ..................//
const [input,setinput]=useState({
     name:'',
     external:'',
     description:''
})

const [submit,setSubmit]=useState()
  
 //  select input options 
 const options = [
  { value: "polygon", label: `polygon` ,icon:<img src={polyImage}  /> },
  { value: "Ethereium", label: `Ethereium` ,icon:<img src={ethimg}  /> },

];
 


  // custom selct styling 
  const customStyles = {
    control: base => ({
      ...base,
      height: 50,
      minHeight: 35,
      background:"white"
    
    })
  };

  // input handler function ............//

  const handleInputChange = (e) => {
    //const name = e.target.name 
    //const value = e.target.value 
    const { name, value } = e.target;
    

    setinput({
      ...input,
      [name]: value,
    });
  };
 
  const handleSubmit=()=>{
     

  }

    


  return (
    <>
      <form className={Styles.form}>
        <div className="mt-5">
          <label className="mb-3">
            name <span className="text-danger">*</span>
          </label>{" "}
          <br />
          <input
            style={{ width: "100%" }}
            type="text"
            placeholder="Name"
            name="name"
            value={input.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mt-5">
          <label className="mb-2">external link</label>{" "}
          <p>
            OpenSea will include a link to this URL on this item's detail page,
            so that users can click to learn more about it. You are welcome to
            link to your own webpage with more details.
          </p>
          <input
            name="external"
            style={{ width: "100%" }}
            type="text"
            placeholder="https://yoursite.io/item/123"
            value={input.external}
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="mt-5">
          <label className="mb-2"> description</label>
          <p>
            The description will be included on the item's detail page
            underneath its image. Markdown syntax is supported.
          </p>
          <textarea
            className={Styles.text_area}
            type="text"
            placeholder="Provide a detailed description of your item"
            name="description"
            row="4"
            value={input.description}
            onChange={handleInputChange}
          />
        </div>
      </form>

      {/* create collection list  */}
      <CreateCollection />
      

      {/* supply   items*/}
      <div className="supply">
        <form className={Styles.form}>
          <div className="mt-5">
            <label className="mb-3">supply</label> <br />
            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="Name"
              name="name"
              value={1}
              disabled
            />
          </div>
        </form>

        {/* supply   items end*/}

        {/* block chain  select field */}
        <section  className="mt-5">
        <Select
        onChange={setSelectedOption}
        options={options}
        placeholder="select block chain"
        styles={customStyles}
        getOptionLabel={e => (
          <div style={{ display: 'flex', alignItems: 'center', }} className={Styles.select_options}>
            {e.icon}
            <span style={{ marginLeft: 5 }}>{e.value}</span>
          </div>
        )}
      />
        </section>

        {/* freez meta data section  */}
        <section>
          <div className="mt-4">
            <div className={ ` mt-2 ${Styles.free_data_text_box}`}>
              <h4>Freeze metadata</h4>
              <p>
                Freezing your metadata will allow you to permanently lock and
                store all of this item's content in decentralized file storage.
              </p>

                   <div className={Styles.freez_note}>
                       <h6>To freeze your metadata, you must create your item first.</h6>
                   </div>
            </div>
          </div>
        </section>
         <hr />
           
              <div className="mt-5">
                  <button disabled={disable}  onClick={handleSubmit} className="btn btn-primary text-capitalize  btn-lg " >create</button>
              </div>
      </div>
    </>
  );
};

export default CreateForm;
