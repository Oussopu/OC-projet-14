import { useCallback, useId, useState } from "react";
import { states } from "../const/states.jsx";
import { useEmployee } from "../context/EmployeeContext";
import DatePickerInput from "./DatePickerInput";
import HomeFieldSet from "./HomeFieldSet.jsx";
import HomeInputForm from "./HomeInputForm";
import HomeSelectForm from "./HomeSelectForm.jsx";
import HomeSelectFormOption from "./HomeSelectFormOption.jsx";

const HomeForm = ({ onEmployeeCreated }) => {
  const formId = useId();
  const { addEmployee } = useEmployee();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    startDate: null,
    department: states[0].abbreviation,
    state: states[0].abbreviation,
    street: "",
    city: "",
    zipCode: "",
  });

  const [errorMessageVisible, setErrorMessageVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      department,
      state,
      street,
      city,
      zipCode,
    } = formData;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !dateOfBirth ||
      !startDate ||
      !department.trim() ||
      !state.trim() ||
      !street.trim() ||
      !city.trim() ||
      !zipCode.toString().trim()
    ) {
      setErrorMessageVisible(true);
      return;
    }

    setErrorMessageVisible(false);

    addEmployee(formData);

    if (onEmployeeCreated) {
      onEmployeeCreated();
    }

    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: null,
      startDate: null,
      department: states[0].abbreviation,
      state: states[0].abbreviation,
      street: "",
      city: "",
      zipCode: "",
    });
  };

  const handleDepartmentChange = useCallback((dept) => {
    setFormData((prev) => ({ ...prev, department: dept }));
  }, []);

  return (
    <form action="#" id={formId} onSubmit={handleSubmit}>
      {errorMessageVisible && (
        <div
          style={{
            color: "red",
            marginBottom: "10px",
            fontWeight: "bold",
            textAlign: "center",
          }}
          role="alert"
        >
          All fields are required.
        </div>
      )}
      <HomeInputForm
        htmlFor={"first-name"}
        type={"text"}
        id={"first-name"}
        label={"First Name"}
        value={formData.firstName}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, firstName: e.target.value }))
        }
      />
      <HomeInputForm
        htmlFor={"last-name"}
        type={"text"}
        id={"last-name"}
        label={"Last Name"}
        value={formData.lastName}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, lastName: e.target.value }))
        }
      />
      <DatePickerInput
        label={"Date of Birth"}
        id={"date-of-birth"}
        onDateSelect={(date) =>
          setFormData((prev) => ({ ...prev, dateOfBirth: date }))
        }
      />
      <DatePickerInput
        label={"Start Date"}
        id={"start-date"}
        onDateSelect={(date) =>
          setFormData((prev) => ({ ...prev, startDate: date }))
        }
      />
      <HomeFieldSet
        street={formData.street}
        setStreet={(value) =>
          setFormData((prev) => ({ ...prev, street: value }))
        }
        city={formData.city}
        setCity={(value) => setFormData((prev) => ({ ...prev, city: value }))}
        state={formData.state}
        setState={(value) => setFormData((prev) => ({ ...prev, state: value }))}
        zipCode={formData.zipCode}
        setZipCode={(value) =>
          setFormData((prev) => ({ ...prev, zipCode: value }))
        }
      />
      <HomeSelectForm
        htmlFor={"department"}
        id={"department"}
        label={"Department"}
        onChange={handleDepartmentChange}
      >
        <HomeSelectFormOption SelectOption="Sales" />
        <HomeSelectFormOption SelectOption="Marketing" />
        <HomeSelectFormOption SelectOption="Engineering" />
        <HomeSelectFormOption SelectOption="Human Resources" />
        <HomeSelectFormOption SelectOption="Legal" />
      </HomeSelectForm>
      <button type="submit" style={{ margin: "20px" }}>
        Save
      </button>
    </form>
  );
};

export default HomeForm;
