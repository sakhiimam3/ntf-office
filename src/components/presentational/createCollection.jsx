import Styles from "../../styles/createcollection.module.scss";
import SelectList from "./selectList";
const CreateCollection = () => {
  const listItems = [
    {
      id: 1,
      icons: "fa-bars",
      heading: "Properties",
      para: "Textual traits that show up as rectangles",
      add_icon:"fa-plus"
    },
    {
      id: 2,
      icons: "fa-star",
      heading: "Levels",
      para: "Numerical traits that show as a progress bar",
      add_icon:"fa-plus"
    },
    {
      id: 3,
      icons: "fa-bar-chart",
      heading: "Stats",
      para: "Numerical traits that just show as numbersr",
      add_icon:"fa-plus"
    },
    {
      id: 4,
      icons: "fa-unlock-alt  text-primary",
      heading: "Unlockable Content ",
      para: "Include unlockable content that can only be revealed by the owner of the item.",
      add_icon:"fa-plus"
    },
    {
      id: 5 ,
      icons: "fa-exclamation-triangle",
      heading: "Unlockable Content",
      para: "Set this item as explicit and sensitive content",
      add_icon:"fa-plus"
    },

  ];

  return (
    <section>
      <form className={Styles.form}>
        <div className="mt-3">
          <label className="mb-2">collections</label>{" "}
          <p>This is the collection where your item will appear.  &nbsp; <i data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" class="fa fa-info-circle fs-5" aria-hidden="true"></i></p>
          <div class="input-group  pb-3 mt-2">
            <select
              class={` form-select form-select-lg  ${Styles.select_input} `}
              aria-label=".form-select-lg example"
              autoFocus="none"
            >
              <option selected>Select collection</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </form>

      {/* select input list list  */}
         {listItems.map((item,id)=>{
             let {icons,heading,para,add_icon}=item
             return   <SelectList   id={id}  icons={icons}  heading={heading} para={para} add_icon={add_icon} />

                 
             
             
         })}

         
    </section>

        
  );
};

export default CreateCollection;
