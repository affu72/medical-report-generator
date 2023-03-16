import React from "react";
import Dropdown from "./custom-component/Dropdown";
import "./assets/Medicine.css";

type MedicineType = {
  deleteHandler: () => void;
};

export default function Medicine(props: MedicineType) {
  const deleteClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    props.deleteHandler();
  };

  return (
    <div className="medicine">
      <Dropdown values={["Tablet", "Syrup", "Injec."]}></Dropdown>
      <input placeholder="Medicine name" type="text" />
      <input placeholder="Dose" type="text" />
      <button onClick={deleteClickHandler}>X</button>
    </div>
  );
}
