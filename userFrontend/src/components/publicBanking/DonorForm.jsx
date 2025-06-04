import React, { useState } from 'react';

const StemCellListingForm = () => {
  const [formData, setFormData] = useState({
    donorName: '',
    birthDate: '',
    bloodType: '',
    hlaType: '',
    price: '',
    contactEmail: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.donorName.trim()) newErrors.donorName = 'Donor name is required';
    if (!formData.birthDate) newErrors.birthDate = 'Birth date is required';
    if (!formData.bloodType) newErrors.bloodType = 'Blood type is required';
    if (!formData.price) newErrors.price = 'Price is required';
    if (!formData.contactEmail) {
      newErrors.contactEmail = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Please enter a valid email';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Submitted data:', formData);
      setIsSuccess(true);
      // Reset form after successful submission
      setFormData({
        donorName: '',
        birthDate: '',
        bloodType: '',
        hlaType: '',
        price: '',
        contactEmail: '',
        message: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const bloodTypeOptions = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden mt-8 mb-16">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-6 px-8">
        <h2 className="text-3xl font-bold text-white">List Stem Cells for Donation</h2>
        <p className="text-blue-100 mt-2">Help save lives by listing stem cells for potential recipients</p>
      </div>
      
      {isSuccess && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mx-8 mt-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700">
                Your listing has been submitted successfully! We'll contact you shortly.
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="p-8 space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Donor Name *</label>
            <input
              type="text"
              name="donorName"
              value={formData.donorName}
              onChange={handleChange}
              required
              className={`w-full border ${errors.donorName ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="Full name of donor"
            />
            {errors.donorName && <p className="mt-1 text-sm text-red-600">{errors.donorName}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Baby's Birth Date *</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
              max={new Date().toISOString().split('T')[0]}
              className={`w-full border ${errors.birthDate ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.birthDate && <p className="mt-1 text-sm text-red-600">{errors.birthDate}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Blood Type *</label>
            <select
              name="bloodType"
              value={formData.bloodType}
              onChange={handleChange}
              required
              className={`w-full border ${errors.bloodType ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              <option value="">Select blood type</option>
              {bloodTypeOptions.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.bloodType && <p className="mt-1 text-sm text-red-600">{errors.bloodType}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">HLA Type</label>
            <input
              type="text"
              name="hlaType"
              value={formData.hlaType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g. HLA-A*01:01, HLA-B*08:01"
            />
            <p className="mt-1 text-sm text-gray-500">Optional but highly recommended for better matches</p>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Expected Price (INR) *</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">₹</span>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="0"
                required
                className={`w-full border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded-lg pl-8 pr-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="Expected compensation"
              />
            </div>
            {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Contact Email *</label>
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              required
              className={`w-full border ${errors.contactEmail ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="your@email.com"
            />
            {errors.contactEmail && <p className="mt-1 text-sm text-red-600">{errors.contactEmail}</p>}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Additional Information</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Describe the stem cell quality, storage conditions, any health reports, or special considerations..."
          ></textarea>
          <p className="mt-1 text-sm text-gray-500">This information will help potential recipients make informed decisions</p>
        </div>

        <div className="pt-4">
          <div className="flex items-center mb-6">
            <input
              id="consent-checkbox"
              type="checkbox"
              required
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="consent-checkbox" className="ml-2 block text-sm text-gray-700">
              I confirm that I have the legal right to list these stem cells and that all information provided is accurate.
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full md:w-auto px-8 py-4 rounded-lg font-semibold text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} transition-colors shadow-md flex items-center justify-center`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              'Submit Listing'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StemCellListingForm;