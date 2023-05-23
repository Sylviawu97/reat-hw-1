import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
 
    axios('https://api.example.com/employees')
      .then((response) => setEmployees(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/employees/${employee.id}`}>{employee.name}</Link> - {employee.yearOfWork}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;

 
