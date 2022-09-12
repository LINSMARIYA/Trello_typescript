import "./TopSection.css";
import ButtonSelect from "../button-select/ButtonSelect";

const TopSection = () => {
  return (
    <div id="TopSection">
      <ButtonSelect
        label=" "
        id="board"
        options={[
          { key: "", label: "Board" },
          { key: "", label: "option" },
          { key: "", label: "option" },
          { key: "", label: "option" },
        ]}
      />
    </div>
  );
};
export default TopSection;
