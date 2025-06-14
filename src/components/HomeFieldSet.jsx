import React from "react";
import HomeInputForm from "../components/HomeInputForm";
import HomeSelectForm from "./HomeSelectForm.jsx";

const HomeFieldSet = () => {
    return (
        <div>
            <fieldset className="address">
                <legend>Address</legend>
                <HomeInputForm htmlForxe={"text"} id={"street"} label={"Street"} />
                <HomeInputForm htmlFor={"city"} type={"text"} id={"city"} label={"City"} />
                <HomeSelectForm htmlFor={"state"} name={"state"} id={"state"} label={"State"} />
                <HomeInputForm htmlFor={"zip-code"} type={"number"} id={"zip-code"} label={"Zip Code"} />
            </fieldset>
        </div>
    )
}

export default HomeFieldSet;
