import React from "react";
import { ShieldCheck } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ admin }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage =
    location.pathname === "/" ? "dashboard" : location.pathname.slice(1);

  const navItems = [
    { label: "dashboard", path: "/" },
    { label: "donor requests", path: "/donor-form" },
    { label: "registration", path: "/registration" },
    { label: "banking", path: "/banking-options" },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/admin-dashboard")}
          >
            <ShieldCheck className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">
              Admin Panel
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map(({ label, path }) => (
              <button
                key={label}
                onClick={() => navigate(path)}
                className={`capitalize pb-2 transition-colors font-medium ${
                  currentPage === label
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
          <div className="text-gray-700">
            {admin ? `Welcome, ${admin.name}` : "Admin"}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
