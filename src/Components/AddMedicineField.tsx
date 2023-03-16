import React from "react";

type AddmedicineType = {
  onClick: () => void;
};

export default function AddMedicineField(props: AddmedicineType) {
  return (
    <div className="add" onClick={props.onClick}>
      <span className="add-label">Add</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="plus"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.3"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </div>
  );
}
