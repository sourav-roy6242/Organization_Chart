import React from 'react';

const UpdateForm = ({ updateFormData, setUpdateFormData, setIsTreeBlurred, fetchTreeData, reportingOptions }) => {
  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:8000/api/users/${updateFormData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: updateFormData.role,
          reportingTo: updateFormData.reportingTo,
        }),
      });

      if (res.ok) {
        setUpdateFormData(null); // Close the form
        setIsTreeBlurred(false); // Remove blur from tree
        fetchTreeData(); // Refresh tree data
      } else {
        console.error("Failed to update node");
      }
    } catch (error) {
      console.error("Error updating node:", error);
    }
  };

  return (
    <div
      style={{
        width: "300px",
        position: "fixed",
        top: "20%",
        left: "50%",
        transform: "translate(-40%, -40%)",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      }}
    >
      <form onSubmit={handleSubmitUpdate}>
        <h3>Update Tree</h3>

        {/* Role Input */}
        <label style={{ display: "block", marginBottom: "10px" }}>
          Role:
          <input
            type="text"
            value={updateFormData.role}
            onChange={(e) =>
              setUpdateFormData({
                ...updateFormData,
                role: e.target.value,
              })
            }
            style={{
              width: "90%",
              margin: "10px 0",
              padding: "10px",
              marginLeft: "3px",
            }}
          />
        </label>

        {/* Reporting To Dropdown */}
        <label style={{ display: "block", marginBottom: "10px" }}>
          Reporting To:
          <select
            value={updateFormData.reportingTo}
            onChange={(e) =>
              setUpdateFormData({
                ...updateFormData,
                reportingTo: e.target.value,
              })
            }
            style={{
              width: "90%",
              margin: "10px 0",
              padding: "10px",
              marginLeft: "3px",
            }}
          >
            {/* Dynamically generate options for Reporting To */}
            <option value="">Select a reporting person</option>
            {reportingOptions && reportingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <br />
        <button
          type="submit"
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "15px",
            marginLeft: "55px",
          }}
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => {
            setUpdateFormData(null);
            setIsTreeBlurred(false);
          }}
          style={{
            padding: "10px 20px",
            backgroundColor: "#E74C3C",
            color: "white",
            border: "none",
            borderRadius: "15px",
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
