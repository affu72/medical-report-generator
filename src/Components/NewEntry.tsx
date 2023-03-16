import React, { ChangeEvent, useState } from "react";
import "../assets/NewEntry.css";
import Dropdown from "./custom-component/Dropdown";
import CustomFiled from "./CustomFields";
import MedicineList from "./MedicineList";
export default function NewEntry() {
  const optionList: string[] = [
    "Choose Reading Type",
    "Weight",
    "Pulse",
    "Spo2",
    "B.P",
    // "Add custom field",
  ];

  const initialList: string[] = [];

  const [newOptionList, setNewOption] = useState(optionList);
  const [customInputs, setCustomInputs] = useState(initialList);

  const optionHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;

    setNewOption((prev) => {
      return prev.filter((val) => {
        if (val !== selectedOption) return true;
        else if (val === "Add custom field" || val === "Choose Reading Type")
          return true;
        else return false;
      });
    });

    if (selectedOption === "Choose Reading Type") return;

    setCustomInputs((prev) => [...prev, selectedOption]);
  };

  return (
    <form>
      <div className="patient-details">
        <Dropdown values={["Choose title", "Miss", "Mr.", "Mrs."]} />
        <input placeholder="Patient name..." type="text" />
        <input placeholder="Patient age" type="number" />
        <Dropdown values={["Choose Gender", "Male", "Female"]}></Dropdown>
      </div>
      <div className="medical-history">
        <textarea placeholder="Medical history" name="" id="" />
      </div>

      <div className="reading-container">
        {customInputs.map((input) => (
          <CustomFiled label={input}></CustomFiled>
        ))}

        {newOptionList.length === 1 ? null : (
          <Dropdown
            onChangeHandler={optionHandler}
            values={newOptionList}
          ></Dropdown>
        )}
      </div>

      <MedicineList />
    </form>
  );
}
