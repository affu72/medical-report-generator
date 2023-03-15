import React, { useState } from "react";

import "./Inputs.css";
import Dropdown from "./Dropdown";
export default function Inputs() {
  const [customeField, setCustomeField] = useState<string | null>(null);
  return (
    <form>
      <div className="patient-details">
        <Dropdown values={["Choose title", "Miss", "Mr.", "Mrs."]} />
        <Dropdown values={["Choose Gender", "Male", "Female"]}></Dropdown>
        <input placeholder="Patient name..." type="text" />
        <input placeholder="Patient age" type="number" />
      </div>
      <div className="medical-history">
        <textarea placeholder="Medical history" name="" id=""></textarea>
      </div>

      <Dropdown
        // onChangeHandler={}
        values={[
          "Choose Reading Type",
          "Weight",
          "Pulse",
          "Spo2",
          "Add custom field",
        ]}
      ></Dropdown>
    </form>
  );
}
