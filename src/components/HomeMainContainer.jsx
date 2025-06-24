import { useState } from "react";
import HomeForm from "./HomeForm.jsx";

const HomeMainContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState();
  const [startDate, setStartDate] = useState();
  const [department, setDepartment] = useState();
  const [state, setState] = useState();

  function saveEmployee() {
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

    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));

    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div>
      <div className="container">
        <a href="/list">View Current Employees</a>
        <h2>Create Employee</h2>
        <HomeForm
          onDateOfBirthSelect={setDateOfBirth}
          onStartDateSelect={setStartDate}
          onDepartmentChange={setDepartment}
          onStateChange={setState}
        />
        <button onClick={saveEmployee}>Save</button>
      </div>

      {showModal && (
        <div
          className="modal"
          style={{
            display: "block",
            position: "fixed",
            zIndex: 1000,
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#fff",
              margin: "15% auto",
              padding: "20px",
              border: "1px solid #888",
              width: "80%",
              textAlign: "center",
            }}
          >
            <span
              className="close"
              onClick={closeModal}
              style={{
                color: "#aaa",
                float: "right",
                fontSize: "28px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              &times;
            </span>
            <p>Employee Created!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeMainContainer;
