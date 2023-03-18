import React, { ChangeEvent, useState } from "react";
import "../assets/NewEntry.css";
import Dropdown from "./custom-component/Dropdown";
import CustomFiled from "./CustomFields";
import NewMedicineList from "./NewMedicinList";
import { IMedicine } from "./NewMedicinList";

export default function NewEntry() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [age, setAge] = useState("");
  const [history, setHistory] = useState("");

  const optionList: string[] = [
    "Choose Reading Type",
    "Weight",
    "Pulse",
    "Spo2",
    "B.P",
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

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(title, name, age, history);
  };

  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setAge(event.target.value);

  const titleHandler = (event: ChangeEvent<HTMLSelectElement>) =>
    setTitle(event.target.value);

  const historyChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(event.target.name);
    setHistory(event.target.value);
  };

  const getDataHandler = (medicines: IMedicine[]) => {
    console.log(medicines);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="form-Handler">
        <div className="patient-details">
          <Dropdown
            values={["Choose title", "Miss", "Mr.", "Mrs."]}
            onChangeHandler={titleHandler}
          />
          <input
            placeholder="Patient name..."
            type="text"
            onChange={nameChangeHandler}
          />
          <input
            placeholder="Patient age"
            type="number"
            onChange={ageChangeHandler}
          />
          <Dropdown values={["Choose Gender", "Male", "Female"]}></Dropdown>
        </div>
        <div className="medical-history">
          <textarea
            placeholder="Medical history"
            name="textarea"
            id=""
            onChange={historyChangeHandler}
          />
        </div>

        <div className="reading-container">
          {customInputs.map((input, i) => (
            <CustomFiled label={input} key={i + input}></CustomFiled>
          ))}

          {newOptionList.length === 1 ? null : (
            <Dropdown
              onChangeHandler={optionHandler}
              values={newOptionList}
            ></Dropdown>
          )}
        </div>

        <NewMedicineList getData={getDataHandler} />
      </div>
      <button className="pdf-button" type="submit">
        Generate PDF
      </button>
    </form>
  );
}
