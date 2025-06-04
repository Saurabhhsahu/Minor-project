import React from 'react';
import { CheckCircle } from 'lucide-react';

const BankingOptionCard = ({
  title,
  description,
  features,
  price,
}) => {
  return (
    <div
      className="rounded-xl p-6 md:p-8 border transition-all cursor-pointer border-blue-500 shadow-xl ring-2 ring-blue-500 bg-white hover:shadow-2xl hover:ring-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
      role="button"
      tabIndex={0}
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
    </div>
  );
};

export default BankingOptionCard;
