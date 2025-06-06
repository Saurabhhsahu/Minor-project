import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Dummy notification counts for demonstration
  const donorNotifications = 3;
  const registrationNotifications = 0;

  const features = [
    {
      title: "Banking Options",
      description: "Add or remove banking options for users.",
      route: "/banking-options",
      notifications: 0,
      image: "https://cdn-icons-png.flaticon.com/512/1995/1995468.png", // banking image
    },
    {
      title: "Donor Form Approvals",
      description: "Approve or disapprove donor requests.",
      route: "/donor-form",
      notifications: donorNotifications,
      image: "https://cdn-icons-png.flaticon.com/512/3209/3209020.png", // approval image
    },
    {
      title: "Registration Status",
      description: "Update registration status for donors.",
      route: "/registration",
      notifications: registrationNotifications,
      image: "https://cdn-icons-png.flaticon.com/512/2807/2807925.png", // registration image
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              onClick={() => navigate(feature.route)}
              className="relative cursor-pointer group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 p-6 flex flex-col justify-between"
            >
              {/* Notification badge */}
              {feature.notifications > 0 && (
                <div className="absolute top-4 right-4 bg-red-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center">
                  {feature.notifications}
                </div>
              )}

              <div className="mb-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-24 h-24 mx-auto"
                />
              </div>

              <h2 className="text-xl font-semibold text-blue-700 mb-2 text-center">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
