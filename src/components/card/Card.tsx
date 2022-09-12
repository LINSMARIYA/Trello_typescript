import React, { useState, createRef, useRef } from "react";
import { MdMoreHoriz, MdDeveloperBoard } from "react-icons/md";

import "./Card.css";
import InputArea from "../input-area/InputArea";

const Card = (props: { id: string; label: string }) => {
  const { label, id } = props;
  let dragged: Element | null = null;

  const [cardCount, addCard] = useState([<InputArea />]);
  const onClickAddCard = () => {
    addCard((prevArray) => [...prevArray, <InputArea />]);
  };

  document.addEventListener("dragstart", (event) => {
    // store a ref. on the dragged elem
    dragged = event.target as Element;
  });
  document.addEventListener("dragover", (event) => {
    // prevent default to allow drop
    event.preventDefault();
  });
  document.addEventListener("drop", (event) => {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged element to the selected drop target
    if ((event.target as Element).className === "dropzone") {
      dragged?.parentNode?.removeChild(dragged);
      if (dragged != null) (event.target as Element).appendChild(dragged);
    }
  });

  // const dragOverItem = useRef();
  // const dragItem = useRef();

  // const dragstart = (e : DragEvent) => {
  //     e.preventDefault();
  //     console.log(e.target);
  //   };

  //   const dragOver = (e: { target: { innerHTML: any; }; }) => {
  //     console.log(e.target.innerHTML);
  //   };
  //   const dragEnter = (e: { target: { innerHTML: any; }; }) => {

  //     console.log(e.target.innerHTML);
  //   };

  return (
    <>
      <p id="head">
        <span>{label}</span>
        <span id="more">{<MdMoreHoriz />}</span>
      </p>
      <div id={id} className="dropzone">
        <p id="list-todo">{cardCount}</p>
      </div>
      <p id="footer">
        <span id="addCard" onClick={() => onClickAddCard()}>
          + Add a card
        </span>
        <span>{<MdDeveloperBoard />}</span>
      </p>
    </>
  );
};
export default Card;
