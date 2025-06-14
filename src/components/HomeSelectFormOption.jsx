import React from "react";

const HomeSelectFormOption = ({ SelectOption }) => {
    return (
        <option value={SelectOption.toLowerCase()}>{SelectOption}</option>
    );
}

export default HomeSelectFormOption;
