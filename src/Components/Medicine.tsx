import React from "react";
import Dropdown from "./custom-component/Dropdown";

export default function Medicine() {
  return (
    <div className="medicine">
      <Dropdown values={["Tabblet", "Syrup", "Injec."]}></Dropdown>
      <input type="text" />
      <input type="text" />
    </div>
  );
}
