
import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";

const OrgChart = () => {
  const [treeData, setTreeData] = useState(null);

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
      const normalizedRole = item.role.toLowerCase().replace(/\s+/g, "");
      const normalizedReporting = item.reporting
        .toLowerCase()
        .replace(/\s+/g, "");//sanity check

      if (normalizedReporting === "head1") {
        nodes.head1.children.push({
          name: item.role,
          children: [],
        });
      }

      if (normalizedReporting === "shiftsupervisor") {
        nodes.shiftsupervisor.children.push({
          name: item.role,
          children: [],
        });
      }
    });

    return nodes.ceo;
  };

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, []);

  const nodeColors = {
    CEO: "#E6E6FA",
    Manager: "#E3F2FD",
    "HOD 1": "#E8F5E9",
    "HOD 2": "#E8F5E9",
    "Shift Manager": "#FFE0B2",
    default: "#FFF9C4",
  };

  const renderForeignObjectNode = ({ nodeDatum, foreignObjectProps }) => (
    <g>
      <foreignObject {...foreignObjectProps}>
        <div
          style={{
            backgroundColor: nodeColors[nodeDatum.name] || nodeColors.default,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            textAlign: "center",
            fontSize: "12px",
            width: "120px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <span>{nodeDatum.name}</span>
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
          nodeSize={{ x: 200, y: 100 }}
          separation={{ siblings: 1.5, nonSiblings: 2 }}
          renderCustomNodeElement={(rd3tProps) =>
            renderForeignObjectNode({
              ...rd3tProps,
              foreignObjectProps: {
                width: 120,
                height: 40,
                x: -60,
                y: -20,
              },
            })
          }
          orientation="vertical"
        />
      </div>
    </div>
  );
};

export default OrgChart;