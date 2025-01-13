// import React, { useState } from 'react';
// import { OrganizationChart } from 'primereact/organizationchart';
// import './OrgChart.css'; 

// export default function SelectionDemo() {
//     const [selection, setSelection] = useState([]);
//     const [data] = useState([
//         {
//             expanded: true,
//             type: 'person',
//             data: {
//                 image: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
//                 title: 'CEO'
//             },
//             children: [
//                 {
//                     expanded: true,
//                     type: 'person',
//                     data: {
//                         image: 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png',
//                         title: 'Manager'
//                     },
//                     children: [
//                         {
//                             expanded: true,
//                             type: 'person',
//                             data: {
//                                 image: 'https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png',
//                                 title: 'Head of Department 1'
//                             },
//                             children: [
//                                 {
//                                     label: 'Worker 1'
//                                 },
//                                 {
//                                     label: 'Worker 2'
//                                 }
//                             ]
//                         },
//                         {
//                             expanded: true,
//                             type: 'person',
//                             data: {
//                                 image: 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png',
//                                 title: 'Head of Department 2'
//                             },
//                             children: [
//                                 {
//                                     expanded: true,
//                                     type: 'person',
//                                     data: {
//                                         image: 'https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png',
//                                         title: '    Shift Supervisor'
//                                     },
//                                     children: [
//                                         {
//                                             label: 'Worker 1'
//                                         },
//                                         {
//                                             label: 'Worker 2'
//                                         }
//                                     ]
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]);

    
//     const userTemplate = (user) => {
//         if (user.type === 'person') {
//             return (
//                 <div className="user-container">
//                     <div className="user-content">
//                         <img alt={user.data.title} src={user.data.image} className="user-image" />
//                         <div className="user-details">
//                             <span className="user-title">{user.data.title}</span>
//                         </div>
//                     </div>
//                 </div>
//             );
//         }

//         return <span>{user.label}</span>;
//     };

//     return (
//         <div className="org-chart-card">
//             <OrganizationChart
//                 value={data}
//                 selectionMode="multiple"
//                 selection={selection}
//                 onSelectionChange={(e) => setSelection(e.data)}
//                 nodeTemplate={userTemplate} 
//             />
//         </div>
//     );
// }








// import { useEffect, useState } from "react";
// import axios from "axios";

// function OrgChart() {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
        
//         axios
//             .get("http://localhost:8000/api/users")
//             .then((response) => setUsers(response.data)) 
//             .catch((err) => console.log("Error fetching users:", err));
//     }, []);

//     return (
//         <div>
//             <h1>Org Chart</h1>
//             <ul>
               
//                 {users.map((user) => (
//                     <li key={user._id}>
//                         <strong>Role:</strong> {user.role} <br />
//                         <strong>Reporting To:</strong> {user.reporting || "None"}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default OrgChart;













import React, { useState, useEffect } from "react";
import "./OrgChart.css";

const OrgChart = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await res.json();
        console.log("API Response:", result); 

        if (res.ok) {
          setUsers(result);
        } else {
          window.alert("Failed to fetch users");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        window.alert("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); 


  const buildHierarchy = (employees, parentId = undefined) => {
    return employees
      .filter((employee) => employee.reporting === parentId)
      .map((employee) => ({
        ...employee,
        children: buildHierarchy(employees, employee._id),
      }));
  };

  
  const OrganizationChart = ({ hierarchy }) => {
    return (
      <ul className="org-chart">
        {hierarchy.map((employee) => (
          <li key={employee._id} className="org-chart-item">
            <div className={getRoleClass(employee.role)}>
             
              <strong>{employee.role}</strong>
              <p>Reporting to: {employee.reporting}</p>
            </div>
            {employee.children.length > 0 && (
              <OrganizationChart hierarchy={employee.children} />
            )}
          </li>
        ))}
      </ul>
    );
  };


  const getRoleClass = (role) => {
    switch (role.toLowerCase()) {
      case "ceo":
        return "ceo";
      case "manager":
        return "manager";
      case "hod1":
      case "hod2":
        return "hod";
      case "shift supervisor":
        return "supervisor";
      case "worker1":
      case "worker2":
        return "worker";
      default:
        return "";
    }
  };


  const hierarchy = !loading ? buildHierarchy(users) : [];

  return (
    <div>
      <h1>Org Chart</h1>
      {loading ? (
        <p>Loading...</p> 
      ) : (
        <OrganizationChart hierarchy={hierarchy} />
      )}
    </div>
  );
};

export default OrgChart;

