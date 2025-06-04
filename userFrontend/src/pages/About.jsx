import React from 'react';

const AboutPage = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About StemCell Bank</h1>
          <p className="text-lg text-gray-600">Leading the future of regenerative medicine</p>
        </div>
        
        <div className="prose prose-lg mx-auto">
          <p className="text-gray-700 mb-6">
            StemCell Bank is a trusted leader in cord blood banking, providing families with the opportunity to 
            preserve their newborn's stem cells for potential future medical treatments. Our state-of-the-art 
            facilities and expert team ensure the highest standards of collection, processing, and storage.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            To advance medical treatment options and provide families with peace of mind by offering reliable, 
            accessible stem cell banking services that could help save lives in the future.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Stem Cells Matter</h2>
          <p className="text-gray-700 mb-6">
            Cord blood stem cells have the unique ability to develop into various types of blood cells and can 
            be used to treat more than 80 diseases, including leukemia, lymphoma, and various immune system disorders. 
            These cells are younger and more adaptable than adult stem cells, making them particularly valuable for treatment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
