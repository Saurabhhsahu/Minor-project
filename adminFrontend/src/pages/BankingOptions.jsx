import React, { useState } from "react";
import BankingOptionCard from "../components/banking/BankingOptions"; // Adjust the import path

const AdminBankingOptions = () => {
  const [options, setOptions] = useState([
    {
      title: "Basic Plan",
      description: "Basic banking option for users",
      features: ["Feature 1", "Feature 2"],
      price: "$10",
    },
    // initial sample data (optional)
  ]);

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState([""]);
  const [price, setPrice] = useState("");

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const addFeatureInput = () => {
    setFeatures([...features, ""]);
  };

  const removeFeatureInput = (index) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const handleAddOption = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !price.trim()) return;

    // Remove empty features
    const filteredFeatures = features.filter((f) => f.trim() !== "");

    const newOption = {
      title,
      description,
      features: filteredFeatures,
      price,
    };

    setOptions((prev) => [...prev, newOption]);

    // Reset form
    setTitle("");
    setDescription("");
    setFeatures([""]);
    setPrice("");
  };

  const handleDelete = (index) => {
    setOptions((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Banking Options</h1>

      {/* Add New Option Form */}
      <form
        onSubmit={handleAddOption}
        className="mb-12 bg-white p-6 rounded-xl shadow-md"
      >
        <div className="mb-4">
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter option title"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Enter option description"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Features</label>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                className="flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={feature}
                onChange={(e) => handleFeatureChange(index, e.target.value)}
                placeholder={`Feature ${index + 1}`}
              />
              {features.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeFeatureInput(index)}
                  className="ml-2 text-red-500 font-bold text-xl leading-none"
                  aria-label="Remove feature"
                >
                  &times;
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addFeatureInput}
            className="mt-2 text-blue-600 hover:underline"
          >
            + Add another feature
          </button>
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-1">Price</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            placeholder="Enter price (e.g. $20)"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Banking Option
        </button>
      </form>

      {/* List Existing Options */}
      <div className="grid md:grid-cols-2 gap-6">
        {options.length === 0 && (
          <p className="text-gray-500 col-span-full">
            No banking options found.
          </p>
        )}
        {options.map((option, idx) => (
          <div key={idx} className="relative group">
            <BankingOptionCard
              title={option.title}
              description={option.description}
              features={option.features}
              price={option.price}
            />
            <button
              onClick={() => handleDelete(idx)}
              className="absolute top-3 right-3 bg-red-600 text-white rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
              aria-label={`Delete ${option.title}`}
              title="Delete option"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBankingOptions;
