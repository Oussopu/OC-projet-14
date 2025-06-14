import React from "react";

const HomeSelectForm = ({ htmlFor, name, id, label, children }) => {
    return (
        <div>
            <label htmlFor={htmlFor}>{label}</label>
            <select name={name} id={id}>
                {children}
            </select>
        </div>
    );
}

export default HomeSelectForm;
