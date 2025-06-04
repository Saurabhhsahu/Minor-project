import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.slice(1);

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
              { label: 'my registration', path: '/my-registration' },
              { label: 'about', path: '/about' },
              { label: 'services', path: '/services' },
              { label: 'contact', path: '/contact' },
            ].map(({ label, path }) => (
              <button
                key={label}
                onClick={() => navigate(path)}
                className={`capitalize pb-2 transition-colors cursor-pointer ${currentPage === label
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                  }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <span className="text-gray-700">Welcome, {user.name}</span>
            ) : (
              <button
                onClick={() => navigate('/registration')}
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
