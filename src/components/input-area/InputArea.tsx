// import { DragEvent, useRef } from "react";
import "./InputArea.css";

type InputAreaProps = {
  id?: string;
  placeholder?: string;
};

const InputArea: React.FC<InputAreaProps> = ({ id, placeholder }) => {
  return (
    <div>
        <>
      <p
        className="textarea"
        id={id}
        placeholder={placeholder}
        contentEditable
        data-autogrow
        draggable="true"
      ></p></>
    </div>
  );
};
export default InputArea;
