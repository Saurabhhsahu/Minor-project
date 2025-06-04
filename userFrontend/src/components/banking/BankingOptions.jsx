import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BankingOptionCard = ({
  title,
  description,
  features,
  price,
  buttonText,
  onSelect,
  highlight
}) => {

  const Navigate = useNavigate();

  return (
    <div
      onClick={onSelect}  // Make entire card clickable
      className={`rounded-xl p-6 md:p-8 border transition-all cursor-pointer ${
        highlight
          ? 'border-blue-500 shadow-xl ring-2 ring-blue-500 bg-white'
          : 'border-gray-200 bg-white shadow-md hover:shadow-lg'
      }`}
      role="button" // accessibility
      tabIndex={0}  // allow keyboard focus
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>

      <ul className="space-y-3 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="text-lg font-semibold text-gray-900 mb-6">{price}</div>

      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent double firing because button inside div
          Navigate('/registration'); // replace with your navigation logic
        }}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
          highlight
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default BankingOptionCard;
