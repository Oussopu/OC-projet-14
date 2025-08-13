import Select, { Option } from "rc-select";
import { useId } from "react";
import arrowDown from "../assets/img/arrow-down.svg";
import HomeInputForm from "./HomeInputForm";
import "rc-select/assets/index.css";
import { states } from "../const/states.jsx";

const DropdownArrow = () => (
  <img src={arrowDown} alt="Arrow Down" width="16" height="16" />
);

const HomeFieldSet = ({
  street,
  setStreet,
  city,
  setCity,
  state,
  setState,
  zipCode,
  setZipCode,
}) => {
  const stateId = useId();

  const currentState = state || states[0].abbreviation;

  const handleStateChange = (selectedValue) => {
    if (setState) {
      setState(selectedValue);
    }
  };

  return (
    <div>
      <fieldset className="address">
        <legend>Address</legend>
        <HomeInputForm
          htmlFor={"street"}
          type={"text"}
          id={"street"}
          label={"Street"}
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <HomeInputForm
          htmlFor={"city"}
          type={"text"}
          id={"city"}
          label={"City"}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <div>
          <label htmlFor={stateId}>State</label>
          <Select
            id={stateId}
            style={{
              width: "95%",
              height: "30px",
              backgroundColor: "#f2f2f2",
              fontSize: "18px",
            }}
            value={currentState}
            onChange={handleStateChange}
            suffixIcon={<DropdownArrow />}
          >
            {states.map((stateOption) => (
              <Option
                key={stateOption.abbreviation}
                value={stateOption.abbreviation}
              >
                {stateOption.name}
              </Option>
            ))}
          </Select>
        </div>
        <HomeInputForm
          htmlFor={"zip-code"}
          type={"number"}
          id={"zip-code"}
          label={"Zip Code"}
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </fieldset>
    </div>
  );
};

export default HomeFieldSet;
