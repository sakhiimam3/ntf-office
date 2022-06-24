import React, { useState } from "react";
import Select from "react-select";
import Styles from "../../styles/createcollection.module.scss";

const CreateCollection = (props) => {
  

  //  const title=props.title.map((item)=> item.title)
  
  //  select input options
  const options = [
    { value: "Abc", label:"abc" },
  
  ];
  //  selectOption state
  const [selectedOption, setSelectedOption] = useState(options);


  

  // send data to create form 
 props.getCreateCollection(selectedOption)

  return (
    <section>
      <form className={Styles.form}>
        <div className="mt-3">
          <label className="mb-2">collections</label>{" "}
          <p>
            This is the collection where your item will appear.
          </p>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder="Select collection"
            className={Styles.select_input}
          />
        </div>
      </form>


    </section>
  );
};

export default CreateCollection;
