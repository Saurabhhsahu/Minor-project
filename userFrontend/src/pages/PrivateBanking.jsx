import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivateBankingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Private Cord Blood Banking</h1>
          <p className="text-lg text-gray-600">
            Exclusively preserve your baby's stem cells for your family
          </p>
        </div>

        {/* Steps Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">How Private Banking Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Register & Pay',
                desc: 'Complete registration and pay the banking fee before delivery',
              },
              {
                step: '2',
                title: 'Collection',
                desc: 'Cord blood is collected safely after birth by medical staff',
              },
              {
                step: '3',
                title: 'Storage',
                desc: 'Stem cells are processed and stored exclusively for your family',
              },
            ].map(({ step, title, desc }) => (
              <div className="text-center" key={step}>
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">{step}</span>
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits of Private Banking</h2>
          <ul className="space-y-3">
            {[
              '100% genetic match for your child, 25% chance for siblings',
              'Immediate availability when needed for treatment',
              'No risk of rejection or graft-versus-host disease',
              'Stored for 25+ years with guaranteed viability',
            ].map((benefit, idx) => (
              <li className="flex items-start" key={idx}>
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            onClick={() => navigate('/registration')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Private Banking Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateBankingPage;
