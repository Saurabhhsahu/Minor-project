import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-red-500 mr-2" />
              <span className="text-xl font-bold">StemCell Bank</span>
            </div>
            <p className="text-gray-400">
              Preserving life-saving stem cells for a healthier future.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => navigate('private-banking')} className="hover:text-white">Private Banking</button></li>
              <li><button onClick={() => navigate('public-banking')} className="hover:text-white">Public Banking</button></li>
              <li><button onClick={() => navigate('services')} className="hover:text-white">All Services</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => navigate('about')} className="hover:text-white">About Us</button></li>
              <li><button onClick={() => navigate('contact')} className="hover:text-white">Contact</button></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <div>1-800-STEMCELL</div>
              <div>info@stemcellbank.com</div>
              <div>24/7 Emergency Support</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 StemCell Bank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
