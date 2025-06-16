import React, { useState } from "react";
import HomeForm from "./HomeForm.jsx";

const HomeMainContainer = () => {
    const [showModal, setShowModal] = useState(false);

    function saveEmployee() {
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const dateOfBirth = document.getElementById('date-of-birth');
        const startDate = document.getElementById('start-date');
        const department = document.getElementById('department');
        const street = document.getElementById('street');
        const city = document.getElementById('city');
        const state = document.getElementById('state');
        const zipCode = document.getElementById('zip-code');

        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        const employee = {
            firstName: firstName.value,
            lastName: lastName.value,
            dateOfBirth: dateOfBirth.value,
            startDate: startDate.value,
            department: department.value,
            street: street.value,
            city: city.value,
            state: state.value,
            zipCode: zipCode.value
        };
        employees.push(employee);
        localStorage.setItem('employees', JSON.stringify(employees));

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
                <HomeForm />
                <button onClick={saveEmployee}>Save</button>
            </div>

            {showModal && (
                <div className="modal" style={{ display: 'flex' }}>
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>Employee Created!</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomeMainContainer;
