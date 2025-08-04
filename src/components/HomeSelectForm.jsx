import Select, { Option } from "rc-select";
import React, { useState } from "react";
import "rc-select/assets/index.css";
import arrowDown from "../assets/img/arrow-down.svg";

const DropdownArrow = () => (
  <img src={arrowDown} alt="Arrow Down" width="16" height="16" />
);

const HomeSelectForm = ({ label, id, children, onChange }) => {
  const childrenArray = React.Children.toArray(children);
  const firstChildValue =
    childrenArray.length > 0 ? childrenArray[0].props.SelectOption : null;

  const [value, setValue] = useState(firstChildValue);

  const handleChange = (selectedValue) => {
    setValue(selectedValue);
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Select
        id={id}
        style={{
          width: "150%",
          height: "30px",
          backgroundColor: "#f2f2f2",
          fontSize: "18px",
        }}
        value={value}
        onChange={handleChange}
        suffixIcon={<DropdownArrow />}
      >
        {React.Children.map(children, (child) => (
          <Option
            key={child.props.SelectOption}
            value={child.props.SelectOption}
          >
            {child.props.SelectOption}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default HomeSelectForm;
