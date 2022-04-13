import React, { useState } from "react";
import Select from "react-select";
import SelectList from "./selectList";
import Styles from "../../styles/createcollection.module.scss";

const CreateCollection = () => {


  //  selectOption state
  const [selectedOption, setSelectedOption] = useState(null);

  //  select input options
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <section>
      <form className={Styles.form}>
        <div className="mt-3">
          <label className="mb-2">collections</label>{" "}
          <p>
            This is the collection where your item will appear. &nbsp;{" "}
            <i
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Tooltip on top"
              class="fa fa-info-circle fs-5"
              aria-hidden="true"
            ></i>
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

      {/* select input list list  */}

      {/* properties list  */}
      <SelectList />

      {/* render selected input list  */}


    </section>
  );
};

export default CreateCollection;
