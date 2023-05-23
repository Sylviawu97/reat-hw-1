import React from 'react';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import DataContextProvider from './components/DataContextProvider';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          { <DataContextProvider /> }
            <Route path="/employees" element={<EmployeeList/>} />
            <Route path="/employees/:id" element={<EmployeeDetails/>} />
          { <DataContextProvider /> }
      
       
      </Routes>
    </div>
  );
}

export default App;