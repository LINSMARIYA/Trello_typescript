import { GoPlus } from "react-icons/go";

import "./MainSection.css";
import Card from "../card/Card";
import TopSection from "../top-section/TopSection";

const MainSection = () => {
  return (
    <div>
      <TopSection />
      <div id="TodoSection">
        <div className="card" id="todo">
          <Card label="To Do" id="Todo1" />
        </div>

        <div className="card" id="doing">
          <Card label="Doing" id="Doing1" />
        </div>

        <div className="card" id="done">
          <Card label="Done" id="Done1" />
        </div>

        <div id="add_list">
          <GoPlus /> Add another list
        </div>
      </div>
    </div>
  );
};
export default MainSection;
