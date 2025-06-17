import React, { useState } from 'react';
import Select, { Option } from 'rc-select';
import 'rc-select/assets/index.css';

const HomeSelectForm = ({ label, id, children, onChange }) => {
    const [value, setValue] = useState();

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
                style={{ width: '84%' }}
                value={value}
                onChange={handleChange}
            >
                {React.Children.map(children, child => (
                    <Option key={child.props.SelectOption} value={child.props.SelectOption}>
                        {child.props.SelectOption}
                    </Option>
                ))}
            </Select>
        </div>
    );
};

export default HomeSelectForm;
