import React, { ChangeEvent } from "react";

type OptionList = {
  onChangeHandler?: (event: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  values: string[];
};

export default function Dropdown({
  onChangeHandler,
  values,
  className = "dropdown",
}: OptionList) {
  return (
    <select
      className={className}
      name=""
      id=""
      defaultValue={values[0]}
      onChange={onChangeHandler}
    >
      {values.map((value, i) => (
        <option key={i} value={value} disabled={i === 0}>
          {value}
        </option>
      ))}
    </select>
  );
}
