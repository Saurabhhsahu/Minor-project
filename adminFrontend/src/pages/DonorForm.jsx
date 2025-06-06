import React, { useState } from "react";

const DonorForm = () => {
  const [donorForms, setDonorForms] = useState([
    {
      id: 1,
      donorName: "John Doe",
      birthDate: "2022-03-10",
      bloodType: "O+",
      hlaType: "HLA-A*01:01",
      price: 15000,
      contactEmail: "john@example.com",
      message: "Stored in excellent conditions",
    },
    {
      id: 2,
      donorName: "Jane Smith",
      birthDate: "2021-12-21",
      bloodType: "A-",
      hlaType: "",
      price: 20000,
      contactEmail: "jane@example.com",
      message: "",
    },
  ]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this donor form?"
    );
    if (confirmDelete) {
      setDonorForms((prev) => prev.filter((form) => form.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Manage Donor Forms
      </h2>

      {donorForms.length === 0 ? (
        <p className="text-gray-600 text-lg">No donor forms available.</p>
      ) : (
        <div className="grid gap-6">
          {donorForms.map((form) => (
            <div
              key={form.id}
              className="border border-gray-200 rounded-xl p-6 shadow hover:shadow-md bg-white"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600">
                    {form.donorName}
                  </h3>
                  <p className="text-gray-500 text-sm">DOB: {form.birthDate}</p>
                  <p className="text-gray-700 mt-2">
                    Blood Type:{" "}
                    <span className="font-medium">{form.bloodType}</span>
                  </p>
                  {form.hlaType && (
                    <p className="text-gray-700">
                      HLA Type:{" "}
                      <span className="font-medium">{form.hlaType}</span>
                    </p>
                  )}
                  <p className="text-gray-700">
                    Email:{" "}
                    <span className="font-medium">{form.contactEmail}</span>
                  </p>
                  <p className="text-gray-700">Price: ₹{form.price}</p>
                  {form.message && (
                    <p className="text-gray-600 mt-2">Note: {form.message}</p>
                  )}
                </div>
                <button
                  onClick={() => handleDelete(form.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DonorForm;
