import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/create-employee.jsx';
import EmployeeList from './pages/employee-list.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CreateEmployee />} />
                <Route path="/list" element={<EmployeeList />} />
            </Routes>
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

