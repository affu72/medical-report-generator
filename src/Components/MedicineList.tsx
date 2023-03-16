import React, { useState } from "react";
import AddMedicineField from "./AddMedicineField";
import Medicine from "./Medicine";

export default function MedicineList() {
  const fieldList: { id: string; ele: React.ReactNode }[] = [];

  const [medicines, setMedicines] = useState(fieldList);

  const deletedMedicineHandler = (id: string) => {
    setMedicines((prev) => {
      return prev.filter((ele) => ele.id !== id);
    });
  };

  const addMedicineHandler = () => {
    setMedicines((prev) => {
      const idOfElement = Date.now().toString();

      return [
        ...prev,
        {
          id: idOfElement,
          ele: (
            <Medicine
              deleteHandler={deletedMedicineHandler}
              key={idOfElement}
              id={idOfElement}
            ></Medicine>
          ),
        },
      ];
    });
  };

  return (
    <div
      className="medicine-container"
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      {medicines.length === 0 || medicines.map((med) => med.ele)}
      <AddMedicineField onClick={addMedicineHandler} />
    </div>
  );
}
