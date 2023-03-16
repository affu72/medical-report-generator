import React, { ChangeEvent, useState } from "react";

type CustomeFieldType = {
  label: string;
};

export default function CustomFiled(props: CustomeFieldType) {
  const [inputValue, setInputValue] = useState("");

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    // <div className="reading">
    <input
      onChange={changeInputHandler}
      type="text"
      autoFocus={true}
      placeholder={props.label}
      value={inputValue}
    />
    // </div>
  );
}
