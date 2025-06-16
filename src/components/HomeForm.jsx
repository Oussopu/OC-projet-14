import React from "react";
import HomeInputForm from "./HomeInputForm";
import HomeFieldSet from "./HomeFieldSet.jsx";
import HomeSelectForm from "./HomeSelectForm.jsx";
import HomeSelectFormOption from "./HomeSelectFormOption.jsx";
import DatePickerInput from "./DatePickerInput";

const HomeForm = ({ onDateOfBirthSelect, onStartDateSelect }) => {
    return (
        <form action="#" id="create-employee">
            <HomeInputForm htmlFor={"first-name"} type={"text"} id={"first-name"} label={"First Name"} />
            <HomeInputForm htmlFor={"last-name"} type={"text"} id={"last-name"} label={"Last Name"} />

            <DatePickerInput label={"Date of Birth"} id={"date-of-birth"} onDateSelect={onDateOfBirthSelect} />
            <DatePickerInput label={"Start Date"} id={"start-date"} onDateSelect={onStartDateSelect} />

            <HomeFieldSet />

            <HomeSelectForm htmlFor={"department"} name={"department"} id={"department"} label={"Department"}>
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
