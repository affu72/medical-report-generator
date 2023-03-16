import React, { useState } from "react";
import AddMedicineField from "./AddMedicineField";
import Medicine from "./Medicine";

export default function MedicineList() {
  const fieldList: any[] = [];

  const [medicines, setMedicines] = useState(fieldList);

  const deletedMedicineHandler = () => {
    setMedicines((prev) => {
      prev.pop();
      return prev;
    });
  };

  const addMedicineHandler = () => {
    setMedicines((prev) => [
      ...prev,
      <Medicine key={Date.now()} deleteHandler={deletedMedicineHandler} />,
    ]);
  };

  return (
    <div
      className="medicine-container"
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      {medicines}
      <AddMedicineField onClick={addMedicineHandler} />
    </div>
  );
}
