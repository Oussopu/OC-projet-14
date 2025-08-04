import { useId } from "react";
import DatePickerInput from "./DatePickerInput";
import HomeFieldSet from "./HomeFieldSet.jsx";
import HomeInputForm from "./HomeInputForm";
import HomeSelectForm from "./HomeSelectForm.jsx";
import HomeSelectFormOption from "./HomeSelectFormOption.jsx";

const HomeForm = ({
  onDateOfBirthSelect,
  onStartDateSelect,
  onDepartmentChange,
  onStateChange,
}) => {
  const formId = useId();
  return (
    <form action="#" id={formId}>
      <HomeInputForm
        htmlFor={"first-name"}
        type={"text"}
        id={"first-name"}
        label={"First Name"}
      />
      <HomeInputForm
        htmlFor={"last-name"}
        type={"text"}
        id={"last-name"}
        label={"Last Name"}
      />

      <DatePickerInput
        label={"Date of Birth"}
        id={"date-of-birth"}
        onDateSelect={onDateOfBirthSelect}
      />
      <DatePickerInput
        label={"Start Date"}
        id={"start-date"}
        onDateSelect={onStartDateSelect}
      />

      <HomeFieldSet onStateChange={onStateChange} />

      <HomeSelectForm
        htmlFor={"department"}
        id={"department"}
        label={"Department"}
        onChange={onDepartmentChange}
      >
        <HomeSelectFormOption SelectOption="Sales" />
        <HomeSelectFormOption SelectOption="Marketing" />
        <HomeSelectFormOption SelectOption="Engineering" />
        <HomeSelectFormOption SelectOption="Human Resources" />
        <HomeSelectFormOption SelectOption="Legal" />
      </HomeSelectForm>
    </form>
  );
};

export default HomeForm;
