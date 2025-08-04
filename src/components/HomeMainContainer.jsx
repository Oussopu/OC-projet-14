import Modal from "@oussop/easy-modal/dist";
import { useState } from "react";
import useEmployeeStore from "../stores/employeeStore";
import HomeForm from "./HomeForm.jsx";

const HomeMainContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState();
  const [startDate, setStartDate] = useState();
  const [department, setDepartment] = useState("Sales");
  const [state, setState] = useState();
  const [error, setError] = useState("");

  const addEmployee = useEmployeeStore((state) => state.addEmployee);

  function validateForm() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;

    if (
      !firstName ||
      !lastName ||
      !street ||
      !city ||
      !zipCode ||
      !dateOfBirth ||
      !startDate ||
      !department ||
      !state
    ) {
      setError("All fields are required.");
      return false;
    }

    setError("");
    return true;
  }

  function saveEmployee() {
    if (!validateForm()) {
      return;
    }

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;

    const formattedDateOfBirth = dateOfBirth
      ? dateOfBirth.toLocaleDateString()
      : "";
    const formattedStartDate = startDate ? startDate.toLocaleDateString() : "";

    const employee = {
      firstName,
      lastName,
      dateOfBirth: formattedDateOfBirth,
      startDate: formattedStartDate,
      department,
      street,
      city,
      state,
      zipCode,
    };

    addEmployee(employee);
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    modalContent: {
      backgroundColor: "#ffffff",
      padding: "3px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      position: "relative",
      paddingLeft: "30px",
      borderRadius: "15px",
    },
  };

  return (
    <div>
      <div className="container">
        <a href="/list">View Current Employees</a>
        <h2>Create Employee</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <HomeForm
          onDateOfBirthSelect={setDateOfBirth}
          onStartDateSelect={setStartDate}
          onDepartmentChange={setDepartment}
          onStateChange={setState}
        />
        <button type="button" onClick={saveEmployee}>
          Save
        </button>
      </div>
      <Modal isOpen={showModal} onClose={closeModal} style={modalStyles}>
        <button
          onClick={closeModal}
          type="button"
          style={{
            position: "absolute",
            top: "-8px",
            right: "-8px",
            background: "black",
            color: "white",
            border: "none",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          &times;
        </button>
        <p style={{ textAlign: "center" }}>Employee Created!</p>
      </Modal>
    </div>
  );
};

export default HomeMainContainer;
