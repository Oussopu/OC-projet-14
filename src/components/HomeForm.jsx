import React from "react";
import HomeInputForm from "./HomeInputForm";
import HomeFieldSet from "./HomeFieldSet.jsx";
import HomeSelectForm from "./HomeSelectForm.jsx";
import HomeSelectFormOption from "./HomeSelectFormOption.jsx";

const HomeForm = ()=> {
    return (
        <form action="#" id="create-employee">
            <HomeInputForm htmlFor={"first-name"} type={"text"} id={"first-name"} label={"First Name"} />
            <HomeInputForm htmlFor={"last-name"} type={"text"} id={"last-name"} label={"Last Name"} />
            <HomeInputForm htmlFor={"date-of-birth"} type={"text"} id={"date-of-birth"} label={"Date of Birth"} />
            <HomeInputForm htmlFor={"start-date"} type={"text"} id={"start-date"} label={"Start Date"} />

            <HomeFieldSet/>


            <HomeSelectForm htmlFor={"department"} name={"department"} id={"department"} label={"Department"}>
                <HomeSelectFormOption SelectOption="Sales"/>
                <HomeSelectFormOption SelectOption="Marketing"/>
                <HomeSelectFormOption SelectOption="Engineering"/>
                <HomeSelectFormOption SelectOption="Human Resources"/>
                <HomeSelectFormOption SelectOption="Legal"/>
            </HomeSelectForm>
        </form>
    )
}

export default HomeForm;
