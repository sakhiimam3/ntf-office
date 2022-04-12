import React, { useState } from "react";
import Select from "react-select";
import SelectList from "./selectList";
import Styles from "../../styles/createcollection.module.scss";
import MyVerticallyCenteredModal from "../frequently-used/modals";
const CreateCollection = () => {
  // modal state
  const [modalShow, setModalShow] = useState(false);

  //  states of get input data from models inputs
  const [modelInput, setModelInput] = useState([]);

  //  selectOption state
  const [selectedOption, setSelectedOption] = useState(null);

  //  select input options
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const listItems = [
    {
      id: 1,
      icons: "fa-bars",
      heading: "Properties",
      para: "Textual traits that show up as rectangles",
      add_icon: "fa-plus",
      type: "button",
      value: "+",
      clases: "btn btn-outline-primary",
      setModalShow: setModalShow,
      modelInputValues: modelInput,
    },
    {
      id: 2,
      icons: "fa-star",
      heading: "Levels",
      para: "Numerical traits that show as a progress bar",
      add_icon: "fa-plus",
      type: "button",
      value: "+",
      clases: "btn btn-outline-primary",
      setModalShow: setModalShow,
    },
    {
      id: 3,
      icons: "fa-bar-chart",
      heading: "Stats",
      para: "Numerical traits that just show as numbersr",
      add_icon: "fa-plus",
      type: "button",
      value: "+",
      clases: "btn btn-outline-primary",
      setModalShow: setModalShow,
    },
    {
      id: 4,
      icons: "fa-unlock-alt  text-primary",
      heading: "Unlockable Content ",
      para: "Include unlockable content that can only be revealed by the owner of the item.",
      add_icon: "fa-plus",
      type: "checkbox",
      inputid: "flexSwitchCheckDefault",
      clases: "form-check-input",
    },
    {
      id: 5,
      icons: "fa-exclamation-triangle",
      heading: "Unlockable Content",
      para: "Set this item as explicit and sensitive content",
      add_icon: "fa-plus",
      type: "checkbox",
      inputid: "flexSwitchCheckDefault",
      clases: "form-check-input",
    },
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
      {listItems.map((item, id) => {
        let {
          icons,
          heading,
          para,
          add_icon,
          type,
          inputid,
          value,
          clases,
          setModalShow,
        } = item;

        return (
          <SelectList
            id={id}
            icons={icons}
            heading={heading}
            para={para}
            add_icon={add_icon}
            type={type}
            inputid={inputid}
            value={value}
            clases={clases}
            setModalShow={setModalShow}
          />
        );
      })}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModelInput={setModelInput}
      />

      <div className="container">
        <div className="row">
          {modelInput.map((item) => {
            return (
              <>
                <div className="col-md-2">
                  <div className={Styles.render_model_input}>
                    <span>{item.character}</span> <br />
                    <span>{item.male}</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CreateCollection;
