import Select, { Option } from "rc-select";
import { useId, useState } from "react";
import arrowDown from "../assets/img/arrow-down.svg";
import HomeInputForm from "./HomeInputForm";
import "rc-select/assets/index.css";
import { states } from "../const/states.jsx";

const DropdownArrow = () => (
  <img src={arrowDown} alt="Arrow Down" width="16" height="16" />
);

const HomeFieldSet = ({ onStateChange }) => {
  const [stateValue, setStateValue] = useState(states[0].abbreviation);

  const handleStateChange = (selectedValue) => {
    setStateValue(selectedValue);
    if (onStateChange) {
      onStateChange(selectedValue);
    }
  };

  const stateId = useId();

  return (
    <div>
      <fieldset className="address">
        <legend>Address</legend>
        <HomeInputForm
          htmlFor={"street"}
          type={"text"}
          id={"street"}
          label={"Street"}
        />
        <HomeInputForm
          htmlFor={"city"}
          type={"text"}
          id={"city"}
          label={"City"}
        />
        <div>
          <label htmlFor="state">State</label>
          <Select
            id={stateId}
            style={{
              width: "95%",
              height: "30px",
              backgroundColor: "#f2f2f2",
              fontSize: "18px",
            }}
            value={stateValue}
            onChange={handleStateChange}
            suffixIcon={<DropdownArrow />}
          >
            {states.map((state) => (
              <Option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </Option>
            ))}
          </Select>
        </div>
        <HomeInputForm
          htmlFor={"zip-code"}
          type={"number"}
          id={"zip-code"}
          label={"Zip Code"}
        />
      </fieldset>
    </div>
  );
};

export default HomeFieldSet;
