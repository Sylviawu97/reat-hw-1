import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from './DataContextProvider';

function EmployeeDetails() {
  const { id } = useParams();
  const { employees } = useContext(DataContext);
  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return <div>Employee not found!</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      <p>Year of Work: {employee.yearOfWork}</p>
    </div>
  );
}

export default EmployeeDetails;