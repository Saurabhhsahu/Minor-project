import React, { useState } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import PrivateBankingPage from './pages/PrivateBanking';
import PublicBankingPage from './pages/PublicBanking';
import RegistrationPage from './pages/Registration';
import ContactPage from './pages/Contact';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/private-banking" element={<PrivateBankingPage />} />
          <Route path="/public-banking" element={<PublicBankingPage />} />
          <Route path="/registration" element={<RegistrationPage setUser={setUser} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
