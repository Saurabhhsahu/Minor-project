import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import FeatureCard from '../components/home/Features';
import BankingOptionCard from '../components/banking/BankingOptions';

import { Shield, Users, Clock } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('private'); // default highlight

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Secure Your Family's Future
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Preserve life-saving stem cells from cord blood with our trusted banking services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/private-banking')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Private Banking
              </button>
              <button
                onClick={() => navigate('/public-banking')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Public Banking
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Stem Cell Banking?</h2>
            <p className="text-lg text-gray-600">Protect your family with cutting-edge medical technology</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Shield}
              title="Medical Security"
              description="Stem cells can treat over 80 diseases including leukemia, lymphoma, and immune disorders"
            />
            <FeatureCard
              icon={Users}
              title="Family Protection"
              description="One sample can potentially help siblings and family members with compatible matches"
            />
            <FeatureCard
              icon={Clock}
              title="Future Medicine"
              description="Ongoing research shows promising treatments for diabetes, heart disease, and neurological conditions"
            />
          </div>
        </div>
      </section>

      {/* Banking Options Comparison */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Banking Option</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <BankingOptionCard
              title="Private Banking"
              description="Preserve your baby's cord blood exclusively for your family"
              features={[
                "Exclusive family access",
                "25+ years storage",
                "HLA matching for family",
                "Immediate availability"
              ]}
              price="Registration fee required"
              buttonText="Choose Private"
              onSelect={() => setSelectedOption('private')}
              highlight={selectedOption === 'private'}
            />
            <BankingOptionCard
              title="Public Banking"
              description="Donate cord blood to help patients worldwide"
              features={[
                "Help save lives globally",
                "No storage fees",
                "Contribute to research",
                "Tax deductible donation"
              ]}
              price="Free donation"
              buttonText="Choose Public"
              onSelect={() => setSelectedOption('public')}
              highlight={selectedOption === 'public'}   
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
