import React from "react";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./userform.css";

function UserForm() {
    const navigate = useNavigate(); 
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const reportingOptions = [
        { value: "ceo", label: "CEO" },
        { value: "manager", label: "Manager" },
        { value: "head1", label: "Head of the Department 1" },
        { value: "worker1", label: "Worker 1 (Under Head 1)" },
        { value: "worker2", label: "Worker 2 (Under Head 1)" },
        { value: "head2", label: "Head of the Department 2" },
        { value: "shiftSupervisor", label: "Shift Supervisor (Under Head 2)" },
        { value: "worker3", label: "Worker 1 (Under Shift Supervisor)" },
        { value: "worker4", label: "Worker 2 (Under Shift Supervisor)" },
    ];

    
    const onSubmit = async (data) => {
        try {
            const res = await fetch("http://localhost:8000/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.status === 400 || !result) {
                window.alert("Invalid data entry");
                console.log("Invalid data entry");
            } else {
                window.alert("Data added successfully");
                console.log("Data added successfully");
                reset();
                navigate("/Org-chart"); 
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            window.alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="container">
            <h1 className="title">USER FORM</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="form-group">
                    <label className="label">Role:</label>
                    <input
                        className="input"
                        {...register("role", { required: true })}
                    />
                    {errors.role && <p className="error-text">Role is required.</p>}
                </div>
                <div className="form-group">
                    <label className="label">Reporting:</label>
                    <select
                        className="input"
                        {...register("reporting", { required: true })}
                    >
                        <option value="">Select reporting person</option>
                        {reportingOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    {errors.reporting && (
                        <p className="error-text">Reporting field is required.</p>
                    )}
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting" : "Submit"}
                </button>
            </form>
        </div>
    );
}

export default UserForm;

