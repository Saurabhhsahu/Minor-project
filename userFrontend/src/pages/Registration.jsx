import React, { useState } from 'react';
import { Download, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Assuming you have react-router-dom installed

const RegistrationPage = () => {

  const [formData, setFormData] = useState({
    bankingType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dueDate: '',
    hospital: '',
    address: ''
  });

  const navigate = useNavigate(); // Initialize the navigate function from react-router-dom

  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleDownloadForm = () => {
    // Create a mock downloadable form
    const formContent = `
      CORD BLOOD BANKING REGISTRATION FORM

      Banking Type: Public Banking
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Due Date: ${formData.dueDate}
      Hospital: ${formData.hospital}

      Please fill out this form completely and upload it back to complete your registration.
    `;
    
    const blob = new Blob([formContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cord-blood-registration-form.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // For public banking, check if form is uploaded
      if (formData.bankingType === 'public' && !uploadedFile) {
        alert('Please upload the completed form to proceed with public banking registration.');
        return;
      }
      
      navigate('/my-registration'); // Navigate to My Registration page
      // setUser({ name: formData.firstName });
      // alert('Registration completed successfully!');
      // navigate('/'); // Commented out since we don't have router
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Registration</h1>
          <div className="flex justify-center space-x-4 mb-8">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div>
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Choose Banking Type</h2>
                <div className="space-y-4">
                  {['private', 'public'].map((type) => (
                    <label
                      key={type}
                      className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <input
                        type="radio"
                        name="bankingType"
                        value={type}
                        checked={formData.bankingType === type}
                        onChange={handleInputChange}
                        className="mr-3"
                        required
                      />
                      <div>
                        <div className="font-semibold">
                          {type === 'private' ? 'Private Banking' : 'Public Banking'}
                        </div>
                        <div className="text-sm text-gray-600">
                          {type === 'private'
                            ? 'Preserve exclusively for your family'
                            : 'Donate to help patients worldwide'}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Show download and upload options only for public banking */}
                {formData.bankingType === 'public' && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-3">Public Banking Requirements</h3>
                    <p className="text-sm text-green-800 mb-4">
                      For public banking, please download the additional form, fill it out, and upload it back.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        type="button"
                        onClick={handleDownloadForm}
                        className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Form
                      </button>
                      <div className="flex items-center">
                        <label className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload Completed Form
                          <input
                            type="file"
                            onChange={handleFileUpload}
                            accept=".pdf,.doc,.docx,.txt"
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                    {uploadedFile && (
                      <div className="mt-3 p-2 bg-white border border-green-300 rounded text-sm">
                        <span className="text-green-700">✓ Uploaded: {uploadedFile.name}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Hospital</label>
                  <input
                    type="text"
                    name="hospital"
                    value={formData.hospital}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Review & Confirm</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Registration Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div><strong>Banking Type:</strong> {formData.bankingType === 'private' ? 'Private Banking' : 'Public Banking'}</div>
                    <div><strong>Name:</strong> {formData.firstName} {formData.lastName}</div>
                    <div><strong>Email:</strong> {formData.email}</div>
                    <div><strong>Phone:</strong> {formData.phone}</div>
                    <div><strong>Due Date:</strong> {formData.dueDate}</div>
                    <div><strong>Hospital:</strong> {formData.hospital}</div>
                    {formData.bankingType === 'public' && uploadedFile && (
                      <div><strong>Uploaded Form:</strong> {uploadedFile.name}</div>
                    )}
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-900 mb-2">Payment Required</h3>
                  <p className="text-blue-800">Registration fee: $1,995 </p>
                  <p className="text-sm text-blue-700 mt-2">Payment methods: Credit card, bank transfer, or payment plan available</p>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Previous
                </button>
              )}
              <button
                type="submit"
                onClick={handleSubmit}
                className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {currentStep === 3 ? 'Complete Registration' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;