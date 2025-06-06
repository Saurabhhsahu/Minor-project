import React, { useState } from "react";

const Registration = () => {
  const [registrations, setRegistrations] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "9876543210",
      bankingType: "public",
      dueDate: "2025-07-10",
      hospital: "City Hospital",
      status: "Pending",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      phone: "9876541230",
      bankingType: "private",
      dueDate: "2025-08-20",
      hospital: "HealthCare Center",
      status: "Processing",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setRegistrations((prev) =>
      prev.map((reg) => (reg.id === id ? { ...reg, status: newStatus } : reg))
    );
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Manage Registrations
      </h2>

      {registrations.length === 0 ? (
        <p className="text-gray-600 text-lg">No registrations found.</p>
      ) : (
        <div className="grid gap-6">
          {registrations.map((reg) => (
            <div
              key={reg.id}
              className="p-6 bg-white rounded-xl border border-gray-200 shadow hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600">
                    {reg.firstName} {reg.lastName}
                  </h3>
                  <div className="text-gray-700 mt-2 space-y-1 text-sm">
                    <div>
                      <strong>Email:</strong> {reg.email}
                    </div>
                    <div>
                      <strong>Phone:</strong> {reg.phone}
                    </div>
                    <div>
                      <strong>Banking Type:</strong> {reg.bankingType}
                    </div>
                    <div>
                      <strong>Due Date:</strong> {reg.dueDate}
                    </div>
                    <div>
                      <strong>Hospital:</strong> {reg.hospital}
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    value={reg.status}
                    onChange={(e) => handleStatusChange(reg.id, e.target.value)}
                    className="w-full md:w-48 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Registration;
