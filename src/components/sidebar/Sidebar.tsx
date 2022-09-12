import { useState } from "react";
import { GoChevronRight, GoChevronLeft, GoPlusSmall } from "react-icons/go";
import {
  MdPersonOutline,
  MdSettings,
  MdStickyNote2,
  MdKeyboardArrowDown,
  MdStarOutline,
  MdMoreHoriz,
} from "react-icons/md";
import { BiTable, BiCalendarAlt } from "react-icons/bi";

import "./Sidebar.css";
import Item from "../item/Item";

const Sidebar = () => {
  const [isShowBody, setIsSHowBody] = useState<boolean>(true);

  const onClickHandler = () => {
    setIsSHowBody((isShowBody) => !isShowBody);
  };

  return (
    <div>
      {!isShowBody && (
        <div id="hide" onClick={onClickHandler}>
          <GoChevronRight />
        </div>
      )}

      {isShowBody && (
        <div id="aside" className="expand">
          <div className="account">
            <p id="K">K</p>
            <div>
              {" "}
              <p id="keyvalue">KeyValue </p>
              <p id="free">Free</p>
            </div>
            <p id="right" onClick={onClickHandler}>
              <GoChevronLeft />
            </p>
          </div>
          <hr />
          <div className="items">
            <Item label="Boards" iconName={<MdStickyNote2 size={14} />} />
            <Item
              label="Members"
              iconName={<MdPersonOutline size={14} />}
              iconName2={<GoPlusSmall />}
              id2="plus"
            />
            <Item
              label="Settings"
              iconName={<MdSettings size={14} />}
              iconName2={<MdKeyboardArrowDown />}
              id2="d_arrow"
            />
            <br />
            <p id="topic">
              <b>Workspace views</b>
            </p>
            <Item label="Table" iconName={<BiTable size={14} />} />
            <Item label="Calendar" iconName={<BiCalendarAlt size={14} />} />
            <br />
            <div id="topic">
              <span>Your Boards</span>{" "}
              <span id="title_icon">
                <GoPlusSmall size={20} />
              </span>
            </div>
            <br />
            <Item
              label="G&T"
              iconName={
                <img id="pic" src={require("../../images/bg.jpeg")} alt="" />
              }
              iconName2={<MdMoreHoriz size={15} />}
              id2="more1"
              iconName3={<MdStarOutline size={14} />}
              id3="important"
            />
            <br />
          </div>
        </div>
      )}
    </div>
  );
}
export default Sidebar;
