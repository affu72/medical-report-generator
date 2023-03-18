import React, { useState } from "react";
import "../assets/NewMedicineList.css";

export interface IMedicine {
  name: string;
  dose: string;
  type: string;
}

type propType = {
  getData: (medicine: IMedicine[]) => void;
};

const NewMedicineList: React.FC<propType> = ({ getData }) => {
  const [medicines, setMedicines] = useState<IMedicine[]>([
    { name: "", dose: "", type: "" },
  ]);

  const addMedicine = () => {
    setMedicines([...medicines, { name: "", dose: "", type: "" }]);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const list = [...medicines];
    list[index][name as keyof IMedicine] = value;
    setMedicines(list);
  };

  const handleRemoveClick = (index: number) => {
    const list = [...medicines];
    list.splice(index, 1);
    setMedicines(list);
  };

  const handleClearClick = () => {
    setMedicines([{ name: "", dose: "", type: "" }]);
  };

  const handleSaveClick = () => {
    getData(medicines);
  };

  return (
    <div>
      {medicines.map((medicine, index) => (
        <div key={index} className="medicines">
          <input
            type="text"
            placeholder="Medicine name"
            name="name"
            value={medicine.name}
            onChange={(e) => handleInputChange(e, index)}
          />
          <input
            type="text"
            placeholder="Dose"
            name="dose"
            value={medicine.dose}
            onChange={(e) => handleInputChange(e, index)}
          />
          <select
            name="type"
            value={medicine.type}
            onChange={(e) => handleInputChange(e, index)}
          >
            <option value="">Select type</option>
            <option value="tablet">Tablet</option>
            <option value="injection">Injection</option>
            <option value="syrup">Syrup</option>
          </select>
          {medicines.length !== 1 && (
            <button
              className="remove-button button"
              onClick={() => handleRemoveClick(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <div className="action-button">
        <button onClick={addMedicine} className="add-button button">
          Add medicine
        </button>
        <button onClick={handleClearClick} className="clear-button button">
          Clear all
        </button>
        <button className="button" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NewMedicineList;
