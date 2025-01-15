// import React, { useEffect, useState } from "react";
// import Tree from "react-d3-tree";

// const OrgChart = () => {
//   const [treeData, setTreeData] = useState(null);

//    const transformData = (apiData) => {
//      const nodes = {};
//      nodes.ceo = {
//        name: "CEO",
//        children: [],
//      };
//      nodes.manager = {
//        name: "Manager",
//        children: [],
//      };
//      nodes.ceo.children.push(nodes.manager);
//      nodes.head1 = {
//        name: "HOD 1",
//        children: [],
//      };
//      nodes.hod2 = {
//        name: "HOD 2",
//        children: [],
//      };
//      nodes.manager.children.push(nodes.head1, nodes.hod2);
//      nodes.shiftsupervisor = {
//        name: "Shift Manager",
//        children: [],
//      };
//      nodes.hod2.children.push(nodes.shiftsupervisor);

//      apiData.forEach((item) => {
//        const normalizedRole = item.role.toLowerCase().replace(/\s+/g, "");
//        const normalizedReporting = item.reporting
//          .toLowerCase()
//          .replace(/\s+/g, "");

//        if (normalizedReporting === "head1") {
//          nodes.head1.children.push({
//            name: item.role,
//            children: [],
//          });
//        }

//        if (normalizedReporting === "shiftsupervisor") {
//          nodes.shiftsupervisor.children.push({
//            name: item.role,
//            children: [],
//          });
//        }
//      });

//      return nodes.ceo;
//    };


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("http://localhost:8000/api/users", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         const result = await res.json();
//         console.log("API Response:", result);

//         const transformedData = transformData(result);
//         setTreeData(transformedData);
//       } catch (error) {
//         console.error("Error fetching API data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const nodeColors = {
//     CEO: "#E6E6FA",
//     Manager: "#E3F2FD",
//     "HOD 1": "#E8F5E9",
//     "HOD 2": "#E8F5E9",
//     "Shift Manager": "#FFE0B2",
//     default: "#FFF9C4",
//   };

//   const renderForeignObjectNode = ({ nodeDatum,toggleNode, foreignObjectProps }) => (
//     <g>
//       <foreignObject {...foreignObjectProps}>
//         <div
//          onClick={()=>toggleNode()}
//           style={{
//             backgroundColor: nodeColors[nodeDatum.name] || nodeColors.default,
//             padding: "10px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//             textAlign: "center",
//             fontSize: "22px",
//             width: "120px",
//             height: "50px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//           }}
//         >
//           <span>{nodeDatum.name}</span>
//         </div>
//       </foreignObject>
//     </g>
//   );

//   if (!treeData) return <div>Loading...</div>;

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",
//         backgroundColor: "#fafafa",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div style={{ width: "90%", height: "90%" }}>
//         <Tree
//           data={treeData}
//           collapsible={true}
//           nodeSize={{ x: 200, y: 100 }}
//           separation={{ siblings: 1.5, nonSiblings: 2 }}
//           renderCustomNodeElement={(rd3tProps) =>
//             renderForeignObjectNode({
//               ...rd3tProps,
//               foreignObjectProps: {
//                 width: 150,
//                 height: 100,
//                 x: -60,
//                 y: -20,
//               },
//             })
//           }
//           orientation="vertical"
//         />
//       </div>
//     </div>
//   );
// };

// export default OrgChart;


// import React, { useEffect, useState } from "react";
// import Tree from "react-d3-tree";

// const OrgChart = () => {
//   const [treeData, setTreeData] = useState(null);
//   const [activeNode, setActiveNode] = useState(null); // Track the active node for the toggle menu

//   const transformData = (apiData) => {
//     const nodes = {};
//     nodes.ceo = {
//       name: "CEO",
//       children: [],
//     };
//     nodes.manager = {
//       name: "Manager",
//       children: [],
//     };
//     nodes.ceo.children.push(nodes.manager);
//     nodes.head1 = {
//       name: "HOD 1",
//       children: [],
//     };
//     nodes.hod2 = {
//       name: "HOD 2",
//       children: [],
//     };
//     nodes.manager.children.push(nodes.head1, nodes.hod2);
//     nodes.shiftsupervisor = {
//       name: "Shift Manager",
//       children: [],
//     };
//     nodes.hod2.children.push(nodes.shiftsupervisor);

//     apiData.forEach((item) => {
//       const normalizedRole = item.role.toLowerCase().replace(/\s+/g, "");
//       const normalizedReporting = item.reporting
//         .toLowerCase()
//         .replace(/\s+/g, "");

//       if (normalizedReporting === "head1") {
//         nodes.head1.children.push({
//           name: item.role,
//           children: [],
//         });
//       }

//       if (normalizedReporting === "shiftsupervisor") {
//         nodes.shiftsupervisor.children.push({
//           name: item.role,
//           children: [],
//         });
//       }
//     });

//     return nodes.ceo;
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("http://localhost:8000/api/users", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         const result = await res.json();
//         console.log("API Response:", result);

//         const transformedData = transformData(result);
//         setTreeData(transformedData);
//       } catch (error) {
//         console.error("Error fetching API data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const nodeColors = {
//     CEO: "#E6E6FA",
//     Manager: "#E3F2FD",
//     "HOD 1": "#E8F5E9",
//     "HOD 2": "#E8F5E9",
//     "Shift Manager": "#FFE0B2",
//     default: "#FFF9C4",
//   };

//   const renderForeignObjectNode = ({
//     nodeDatum,
//     toggleNode,
//     foreignObjectProps,
//   }) => (
//     <g>
//       <foreignObject {...foreignObjectProps}>
//         <div
//          onClick={()=>toggleNode()}
//           style={{
//             position: "relative",
//             backgroundColor: nodeColors[nodeDatum.name] || nodeColors.default,
//             padding: "10px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//             textAlign: "center",
//             fontSize: "22px",
//             width: "120px",
//             height: "50px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//           }}
//         >
//           <span>{nodeDatum.name}</span>
//           {/* Toggle Button */}
//           <div
//             style={{
//               position: "absolute",
//               top: "5px",
//               right: "5px",
//               cursor: "pointer",
//             }}
//             onClick={(e) => {
//               e.stopPropagation();
//               setActiveNode(activeNode === nodeDatum ? null : nodeDatum);
//             }}
//           >
//             ⋮
//           </div>
//           {/* Dropdown Menu */}
//           {activeNode === nodeDatum && (
//             <div
//               style={{
//                 position: "absolute",
//                 top: "15%",
//                 right: "5px",
//                 background: "white",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//                 boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//                 zIndex: 1,
//               }}
//             >
//               <button
//                 style={{
//                   padding: "5px 10px",
//                   cursor: "pointer",
//                   borderBottom: "1px solid #eee",
//                 }}
//                 onClick={() => {
//                   console.log("Update clicked for:", nodeDatum);
//                   setActiveNode(null);
//                 }}
//               >
//                 Update
//               </button>
//               <button
//                 style={{
//                   padding: "5px 10px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => {
//                   console.log("Delete clicked for:", nodeDatum);
//                   setActiveNode(null);
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           )}
//         </div>
//       </foreignObject>
//     </g>
//   );

//   if (!treeData) return <div>Loading...</div>;

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",
//         backgroundColor: "#fafafa",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div style={{ width: "90%", height: "90%" }}>
//         <Tree
//           data={treeData}
//           collapsible={true}
//           nodeSize={{ x: 200, y: 100 }}
//           separation={{ siblings: 1.5, nonSiblings: 2 }}
//           renderCustomNodeElement={(rd3tProps) =>
//             renderForeignObjectNode({
//               ...rd3tProps,
//               foreignObjectProps: {
//                 width: 150,
//                 height: 100,
//                 x: -60,
//                 y: -20,
//               },
//             })
//           }
//           orientation="vertical"
//         />
//       </div>
//     </div>
//   );
// };

// export default OrgChart;



import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";

const OrgChart = () => {
  const [treeData, setTreeData] = useState(null);
  const [activeNode, setActiveNode] = useState(null);
  const [updateFormData, setUpdateFormData] = useState(null); // Track form data for updates

  const transformData = (apiData) => {
    const nodes = {};
    nodes.ceo = {
      name: "CEO",
      children: [],
    };
    nodes.manager = {
      name: "Manager",
      children: [],
    };
    nodes.ceo.children.push(nodes.manager);
    nodes.head1 = {
      name: "HOD 1",
      children: [],
    };
    nodes.hod2 = {
      name: "HOD 2",
      children: [],
    };
    nodes.manager.children.push(nodes.head1, nodes.hod2);
    nodes.shiftsupervisor = {
      name: "Shift Manager",
      children: [],
    };
    nodes.hod2.children.push(nodes.shiftsupervisor);

    apiData.forEach((item) => {
      const normalizedReporting = item.reporting
        .toLowerCase()
        .replace(/\s+/g, "");

      if (normalizedReporting === "head1") {
        nodes.head1.children.push({
          name: item.role,
          id: item._id,
          children: [],
        });
      }

      if (normalizedReporting === "shiftsupervisor") {
        nodes.shiftsupervisor.children.push({
          name: item.role,
          id: item._id,
          children: [],
        });
      }
    });

    return nodes.ceo;
  };

  const fetchTreeData = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await res.json();
      console.log("API Response:", result);

      const transformedData = transformData(result);
      setTreeData(transformedData);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };

  useEffect(() => {
    fetchTreeData();
  }, []);

  const handleDeleteNode = async (nodeId) => {
    try {
      // Delete the node from the database
      const res = await fetch(`http://localhost:8000/api/users/${nodeId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        console.log(`Node with ID ${nodeId} deleted`);
        // Refresh the tree after deletion
        fetchTreeData();
      } else {
        console.error("Failed to delete node");
      }
    } catch (error) {
      console.error("Error deleting node:", error);
    }
  };

  const handleUpdateNode = (nodeDatum) => {
    // Open the form for updating the node
    setUpdateFormData({
      id: nodeDatum.id,
      name: nodeDatum.name,
    });
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:8000/api/users/${updateFormData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            role: updateFormData.name,
          }),
        }
      );

      if (res.ok) {
        console.log("Node updated successfully");
        setUpdateFormData(null); // Close the form
        fetchTreeData(); // Refresh the tree
      } else {
        console.error("Failed to update node");
      }
    } catch (error) {
      console.error("Error updating node:", error);
    }
  };

  const nodeColors = {
    CEO: "#E6E6FA",
    Manager: "#E3F2FD",
    "HOD 1": "#E8F5E9",
    "HOD 2": "#E8F5E9",
    "Shift Manager": "#FFE0B2",
    default: "#FFF9C4",
  };

  const renderForeignObjectNode = ({
    nodeDatum,
    toggleNode,
    foreignObjectProps,
  }) => (
    <g>
      <foreignObject {...foreignObjectProps}>
        <div
          onClick={() => toggleNode()}
          style={{
            position: "relative",
            backgroundColor: nodeColors[nodeDatum.name] || nodeColors.default,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            textAlign: "center",
            fontSize: "22px",
            width: "120px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <span>{nodeDatum.name}</span>
          {/* Toggle Button */}
          <div
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setActiveNode(activeNode === nodeDatum ? null : nodeDatum);
            }}
          >
            ⋮
          </div>
         
          {/* Dropdown Menu */}
          {activeNode === nodeDatum && (
            <div
              style={{
                position: "absolute",
                top: "15%",
                right: "5px",
                background: "white",
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                zIndex: 1,
                overflow: "hidden",
              }}
            >
              <button
                style={{
                  display: "block",
                  width: "100%",
                  padding: "10px",
                  background: "linear-gradient(135deg, #4A90E2, #357ABD)",
                  color: "white",
                  fontWeight: "bold",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "transform 0.2s, background 0.3s",
                  borderBottom: "1px solid #eee",
                }}
                onMouseOver={(e) => (e.target.style.background = "#357ABD")}
                onMouseOut={(e) =>
                  (e.target.style.background =
                    "linear-gradient(135deg, #4A90E2, #357ABD)")
                }
                onClick={(e) => {
                  e.stopPropagation();
                  handleUpdateNode(nodeDatum);
                  setActiveNode(null);
                }}
              >
                Update
              </button>
              <button
                style={{
                  display: "block",
                  width: "100%",
                  padding: "10px",
                  background: "linear-gradient(135deg, #E74C3C, #C0392B)",
                  color: "white",
                  fontWeight: "bold",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "transform 0.2s, background 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#C0392B")}
                onMouseOut={(e) =>
                  (e.target.style.background =
                    "linear-gradient(135deg, #E74C3C, #C0392B)")
                }
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteNode(nodeDatum.id);
                  setActiveNode(null);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </foreignObject>
    </g>
  );

  if (!treeData) return <div>Loading...</div>;

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#fafafa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "90%", height: "90%" }}>
        <Tree
          data={treeData}
          collapsible={true}
          nodeSize={{ x: 200, y: 100 }}
          separation={{ siblings: 1.5, nonSiblings: 2 }}
          renderCustomNodeElement={(rd3tProps) =>
            renderForeignObjectNode({
              ...rd3tProps,
              foreignObjectProps: {
                width: 150,
                height: 100,
                x: -60,
                y: -20,
              },
            })
          }
          orientation="vertical"
        />
        {/* Update Form */}
        {updateFormData && (
          <div
            style={{
              position: "fixed",
              top: "20%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
          >
            <form onSubmit={handleSubmitUpdate}>
              <h3>Update Node</h3>
              <label>
                Role Name:
                <input
                  type="text"
                  value={updateFormData.name}
                  onChange={(e) =>
                    setUpdateFormData({
                      ...updateFormData,
                      name: e.target.value,
                    })
                  }
                />
              </label>
              <br />
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setUpdateFormData(null)}>
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrgChart;




