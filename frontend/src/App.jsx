import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage'; 
import UserForm from './components/userForm'; 
import OrgChart from './components/Orgchart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/Org-chart" element={<OrgChart />} />
      </Routes>
    </Router>
  );
}

export default App;
