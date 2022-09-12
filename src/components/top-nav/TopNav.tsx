import { MdErrorOutline, MdNotificationsNone } from "react-icons/md";

import "./TopNav.css";
import SelectField from "../select-field/SelectField";
import Button from "../button/Button";
import InputField from "../input-field/InputField";

const TopNav = () => {
  return (
    <div className="navtop">
      <img id="menu" src="images/menu.png" alt="" />
      <img
        id="Trellologo"
        src='images/Trello.png'
        alt="This is Trello logo"
      />
      <SelectField
        label=" "
        id="Workspace"
        options={[
          { key: "1", label: "Workspace" },
          { key: "2", label: "option" },
          { key: "3", label: "option" },
          { key: "4", label: "option" },
        ]}
      />
      <SelectField
        label=" "
        id=""
        options={[
          { key: "1", label: "Recent" },
          { key: "2", label: "option" },
          { key: "3", label: "option" },
          { key: "4", label: "option" },
        ]}
      />
      <SelectField
        label=" "
        id="Starred"
        options={[
          { key: "1", label: "Starred" },
          { key: "2", label: "option" },
          { key: "3", label: "option" },
          { key: "4", label: "option" },
        ]}
      />
      <SelectField
        label=" "
        id="Templates"
        options={[
          { key: "1", label: "Templates" },
          { key: "2", label: "option" },
          { key: "3", label: "option" },
          { key: "4", label: "option" },
        ]}
      />
      <Button id="create" label="Create" />
      <div id="search_nav">
        <svg
          id="search_icon"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6z"
          />
        </svg>
        <InputField type="search" id="search" placeholder="Search" />
      </div>
      <div id="error">
        <MdErrorOutline size={20} />
      </div>
      <div id="notification">
        <MdNotificationsNone size={15} />
      </div>
      <p id="dp">
        <img src="/images/bg.jpeg" />
      </p>
    </div>
  );
};
export default TopNav;
