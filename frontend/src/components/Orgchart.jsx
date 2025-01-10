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








import { useEffect, useState } from "react";
import axios from "axios";

function OrgChart() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        
        axios
            .get("http://localhost:8000/api/users")
            .then((response) => setUsers(response.data)) 
            .catch((err) => console.log("Error fetching users:", err));
    }, []);

    return (
        <div>
            <h1>Org Chart</h1>
            <ul>
               
                {users.map((user) => (
                    <li key={user._id}>
                        <strong>Role:</strong> {user.role} <br />
                        <strong>Reporting To:</strong> {user.reporting || "None"}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OrgChart;


