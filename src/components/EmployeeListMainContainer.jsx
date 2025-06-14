import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-dt';
import '../assets/style/dataTables.css';


const EmployeeListMainContainer = () => {
    useEffect(() => {
        let table;

        const initializeDataTable = () => {
            const employees = JSON.parse(localStorage.getItem('employees'));

            if ($.fn.DataTable.isDataTable('#employee-table')) {
                table = $('#employee-table').DataTable();
            } else {
                table = $('#employee-table').DataTable({
                    data: employees,
                    columns: [
                        { title: 'First Name', data: 'firstName' },
                        { title: 'Last Name', data: 'lastName' },
                        { title: 'Start Date', data: 'startDate' },
                        { title: 'Department', data: 'department' },
                        { title: 'Date of Birth', data: 'dateOfBirth' },
                        { title: 'Street', data: 'street' },
                        { title: 'City', data: 'city' },
                        { title: 'State', data: 'state' },
                        { title: 'Zip Code', data: 'zipCode' },
                    ]
                });
            }
        };

        initializeDataTable();

        return () => {
            if (table) {
                table.destroy();
            }
        };
    }, []);

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <a href="/">Home</a>
        </div>
    );
}

export default EmployeeListMainContainer;
