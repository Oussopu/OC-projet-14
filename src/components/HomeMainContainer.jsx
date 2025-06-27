import { useState } from "react";
import HomeForm from "./HomeForm.jsx";
import useEmployeeStore from "../stores/employeeStore";
import Modal from '@oussop/easy-modal/dist';

const HomeMainContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState();
  const [startDate, setStartDate] = useState();
  const [department, setDepartment] = useState();
  const [state, setState] = useState();
  const addEmployee = useEmployeeStore((state) => state.addEmployee);

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

    addEmployee(employee);
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  const modalStyles = {
    modalContent: {
      backgroundColor: '#ffffff',
      padding: '100 400',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
  };

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
        <Modal
            isOpen={showModal}
            onClose={closeModal}
            style={modalStyles}
        >
          <p style={{ textAlign: 'center' }}>Employee Created!</p>
        </Modal>
      </div>
  );
};

export default HomeMainContainer;
