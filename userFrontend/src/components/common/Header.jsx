import React, { useState } from 'react';
import { Heart, User, LogOut, UserCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Header = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.slice(1);
  const [showDropdown, setShowDropdown] = useState(false);

  const { token,setToken } = useContext(UserContext); // Assuming logout function exists in context

  const handleLogout = () => {
    setToken(null); // Clear token on logout
    navigate('/'); // Navigate to home after logout
    setShowDropdown(false);
  };

  const handleProfileClick = () => {
    navigate('/my-profile');
    setShowDropdown(false);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <Heart className="h-8 w-8 text-red-500 mr-2" />
            <span className="text-2xl font-bold text-gray-900">StemCell Bank</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {[
              { label: 'home', path: '/' },
              { label: 'services', path: '/services' },
              { label: 'my registration', path: '/my-registration' },
              { label: 'about', path: '/about' },
              { label: 'contact', path: '/contact' },
            ].map(({ label, path }) => (
              <button
                key={label}
                onClick={() => navigate(path)}
                className={`capitalize pb-2 transition-colors cursor-pointer ${(currentPage === label || currentPage == "my-registration" && label === 'my registration')
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                  }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {token ? (
              <div 
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <div className="flex items-center cursor-pointer">
                  <UserCircle className="h-8 w-8 text-gray-600 hover:text-blue-600 transition-colors" />
                  {user && (
                    <span className="ml-2 text-gray-700 hidden sm:block">
                      {user.name}
                    </span>
                  )}
                </div>
                
                {showDropdown && (
                  <div 
                    className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    <button
                      onClick={handleProfileClick}
                      className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <User className="h-4 w-4 mr-2" />
                      My Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate('/auth')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;