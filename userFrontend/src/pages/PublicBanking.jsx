import React, { use } from 'react';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PublicBankingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Public Cord Blood Banking</h1>
          <p className="text-lg text-gray-600">Donate to save lives and advance medical research</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">How Public Banking Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Register to Donate</h3>
              <p className="text-gray-600">Sign up for free public donation program</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Collection</h3>
              <p className="text-gray-600">Cord blood is collected and donated to public registry</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Help Others</h3>
              <p className="text-gray-600">Your donation could save a life worldwide</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits of Public Banking</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>Completely free - no registration or storage fees</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>Help patients worldwide find life-saving matches</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>Contribute to medical research and advancement</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>Tax-deductible charitable donation</span>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Note</h3>
          <p className="text-yellow-700">
            Once donated to the public bank, the cord blood becomes available to any patient worldwide who needs it. 
            Your family will not have priority access to the donated stem cells.
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/public-banking/register')}
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Register for Public Banking
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicBankingPage;
