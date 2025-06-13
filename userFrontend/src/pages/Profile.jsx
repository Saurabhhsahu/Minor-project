import React, { useState } from 'react';
import { User, Heart, Phone, Mail, MapPin, Calendar, AlertTriangle, Pill, FileText, Shield, Clock, Plus, Edit3, Save, X } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  
  const [profile, setProfile] = useState({
    // Personal Information
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1985-03-15',
    gender: 'Male',
    bloodType: 'A+',
    height: '5\'10"',
    weight: '175 lbs',
    
    // Contact Information
    phone: '+1 (555) 123-4567',
    email: 'john.doe@email.com',
    address: '123 Main Street, City, State 12345',
    emergencyContact: 'Jane Doe - Wife',
    emergencyPhone: '+1 (555) 987-6543',
    
    // Medical Information
    allergies: ['Penicillin', 'Shellfish'],
    chronicConditions: ['Hypertension', 'Type 2 Diabetes'],
    currentMedications: [
      { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily' },
      { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily' }
    ],
    
    // Healthcare Providers
    primaryPhysician: 'Dr. Sarah Johnson',
    primaryPhysicianPhone: '+1 (555) 234-5678',
    insurance: 'Blue Cross Blue Shield',
    policyNumber: 'BC123456789',
    
    // Medical History
    surgeries: ['Appendectomy (2010)', 'Knee Surgery (2018)'],
    familyHistory: ['Heart Disease (Father)', 'Diabetes (Mother)'],
    
    // Lifestyle
    smokingStatus: 'Never',
    alcoholConsumption: 'Occasional',
    exerciseFrequency: '3-4 times per week',
    
    // Recent Vitals
    lastCheckup: '2024-05-15',
    bloodPressure: '128/82 mmHg',
    heartRate: '72 bpm',
    temperature: '98.6°F',
    oxygenSaturation: '98%'
  });

  const handleInputChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayAdd = (field, value) => {
    if (value.trim()) {
      setProfile(prev => ({
        ...prev,
        [field]: [...prev[field], value]
      }));
    }
  };

  const handleArrayRemove = (field, index) => {
    setProfile(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const EditableField = ({ label, value, field, type = 'text' }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {isEditing ? (
        <input
          type={type}
          value={value}
          onChange={(e) => handleInputChange(field, e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      ) : (
        <p className="text-gray-900 p-2 bg-gray-50 rounded-lg">{value}</p>
      )}
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'medical', label: 'Medical History', icon: Heart },
    { id: 'medications', label: 'Medications', icon: Pill },
    { id: 'providers', label: 'Healthcare Providers', icon: Shield },
    { id: 'vitals', label: 'Recent Vitals', icon: FileText }
  ];

  return (
    <div className="m-8 p-6 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg mb-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <User size={40} />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{profile.firstName} {profile.lastName}</h1>
              <p className="text-blue-100">Age: {calculateAge(profile.dateOfBirth)} • {profile.gender} • Blood Type: {profile.bloodType}</p>
              <p className="text-blue-100">Patient ID: HP-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-black cursor-pointer bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            {isEditing ? <Save size={20} /> : <Edit3 size={20} />}
            <span>{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon size={18} />
              <span className="font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {activeTab === 'overview' && (
            <div className="bg-white border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <User className="mr-2" size={24} />
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <EditableField label="First Name" value={profile.firstName} field="firstName" />
                <EditableField label="Last Name" value={profile.lastName} field="lastName" />
                <EditableField label="Date of Birth" value={profile.dateOfBirth} field="dateOfBirth" type="date" />
                <EditableField label="Gender" value={profile.gender} field="gender" />
                <EditableField label="Height" value={profile.height} field="height" />
                <EditableField label="Weight" value={profile.weight} field="weight" />
              </div>
              
              <h3 className="text-lg font-semibold mt-6 mb-4 flex items-center">
                <Phone className="mr-2" size={20} />
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <EditableField label="Phone" value={profile.phone} field="phone" />
                <EditableField label="Email" value={profile.email} field="email" type="email" />
                <div className="md:col-span-2">
                  <EditableField label="Address" value={profile.address} field="address" />
                </div>
                <EditableField label="Emergency Contact" value={profile.emergencyContact} field="emergencyContact" />
                <EditableField label="Emergency Phone" value={profile.emergencyPhone} field="emergencyPhone" />
              </div>
            </div>
          )}

          {activeTab === 'medical' && (
            <div className="space-y-6">
              <div className="bg-white border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <AlertTriangle className="mr-2 text-red-500" size={24} />
                  Allergies & Chronic Conditions
                </h2>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Allergies</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {profile.allergies.map((allergy, index) => (
                      <span key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm flex items-center">
                        {allergy}
                        {isEditing && (
                          <button
                            onClick={() => handleArrayRemove('allergies', index)}
                            className="ml-2 text-red-600 hover:text-red-800"
                          >
                            <X size={14} />
                          </button>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Chronic Conditions</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.chronicConditions.map((condition, index) => (
                      <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm flex items-center">
                        {condition}
                        {isEditing && (
                          <button
                            onClick={() => handleArrayRemove('chronicConditions', index)}
                            className="ml-2 text-orange-600 hover:text-orange-800"
                          >
                            <X size={14} />
                          </button>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Medical History</h2>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Previous Surgeries</h3>
                  <ul className="space-y-1">
                    {profile.surgeries.map((surgery, index) => (
                      <li key={index} className="text-gray-700 p-2 bg-gray-50 rounded">
                        {surgery}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Family History</h3>
                  <ul className="space-y-1">
                    {profile.familyHistory.map((history, index) => (
                      <li key={index} className="text-gray-700 p-2 bg-gray-50 rounded">
                        {history}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'medications' && (
            <div className="bg-white border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Pill className="mr-2" size={24} />
                Current Medications
              </h2>
              <div className="space-y-4">
                {profile.currentMedications.map((med, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{med.name}</h3>
                        <p className="text-gray-600">Dosage: {med.dosage}</p>
                        <p className="text-gray-600">Frequency: {med.frequency}</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'providers' && (
            <div className="bg-white border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="mr-2" size={24} />
                Healthcare Providers & Insurance
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Primary Care Physician</h3>
                  <EditableField label="Doctor Name" value={profile.primaryPhysician} field="primaryPhysician" />
                  <EditableField label="Phone Number" value={profile.primaryPhysicianPhone} field="primaryPhysicianPhone" />
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Insurance Information</h3>
                  <EditableField label="Insurance Provider" value={profile.insurance} field="insurance" />
                  <EditableField label="Policy Number" value={profile.policyNumber} field="policyNumber" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vitals' && (
            <div className="bg-white border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Heart className="mr-2" size={24} />
                Recent Vitals & Measurements
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-800">Blood Pressure</h3>
                  <p className="text-2xl font-bold text-blue-600">{profile.bloodPressure}</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800">Heart Rate</h3>
                  <p className="text-2xl font-bold text-green-600">{profile.heartRate}</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-medium text-red-800">Temperature</h3>
                  <p className="text-2xl font-bold text-red-600">{profile.temperature}</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-medium text-purple-800">Oxygen Saturation</h3>
                  <p className="text-2xl font-bold text-purple-600">{profile.oxygenSaturation}</p>
                </div>
              </div>
              
              <div>
                <EditableField label="Last Checkup Date" value={profile.lastCheckup} field="lastCheckup" type="date" />
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-semibold mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Age</span>
                <span className="font-medium">{calculateAge(profile.dateOfBirth)} years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">BMI</span>
                <span className="font-medium">24.2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Visit</span>
                <span className="font-medium">{new Date(profile.lastCheckup).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Lifestyle Information */}
          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-semibold mb-4">Lifestyle</h3>
            <div className="space-y-3">
              <div>
                <span className="text-gray-600 block">Smoking Status</span>
                <span className="font-medium">{profile.smokingStatus}</span>
              </div>
              <div>
                <span className="text-gray-600 block">Alcohol</span>
                <span className="font-medium">{profile.alcoholConsumption}</span>
              </div>
              <div>
                <span className="text-gray-600 block">Exercise</span>
                <span className="font-medium">{profile.exerciseFrequency}</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-semibold mb-4 flex items-center">
              <Clock className="mr-2" size={18} />
              Recent Activity
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Annual Physical</p>
                  <p className="text-gray-600">May 15, 2024</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Blood Work</p>
                  <p className="text-gray-600">May 10, 2024</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Prescription Refill</p>
                  <p className="text-gray-600">May 1, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;