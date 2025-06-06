import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import BankingOptions from "./pages/BankingOptions";
import DonorForm from "./pages/DonorForm";
import Registration from "./pages/Registration";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/banking-options" element={<BankingOptions />} />
          <Route path="/donor-form" element={<DonorForm />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
export default App;
