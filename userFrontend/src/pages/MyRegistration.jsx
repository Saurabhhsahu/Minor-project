import React, { useState } from 'react';
import { User, Calendar, MapPin, Phone, Mail, FileText, CheckCircle, Clock, AlertCircle, Plus } from 'lucide-react';

function MyRegistrationPage() {
  // Mock user orders state (in a real app, this would come from a backend/database)
  const [userOrders, setUserOrders] = useState([
    {
      id: 1,
      registrationId: 'REG-123456',
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567',
      bankingType: 'private',
      dueDate: '2024-03-15',
      hospital: 'City General Hospital',
      uploadedFile: null,
      status: 'completed',
      registrationDate: '2024-01-15',
      estimatedProcessing: 'Completed'
    },
    {
      id: 2,
      registrationId: 'REG-789012',
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+1 (555) 987-6543',
      bankingType: 'public',
      dueDate: '2024-04-20',
      hospital: 'Memorial Medical Center',
      uploadedFile: 'public-banking-form.pdf',
      status: 'processing',
      registrationDate: '2024-02-10',
      estimatedProcessing: '2-3 business days'
    },
    {
      id: 3,
      registrationId: 'REG-345678',
      name: 'Michael Davis',
      email: 'mike.davis@email.com',
      phone: '+1 (555) 456-7890',
      bankingType: 'private',
      dueDate: '2024-05-30',
      hospital: 'St. Mary\'s Hospital',
      uploadedFile: null,
      status: 'pending',
      registrationDate: '2024-03-01',
      estimatedProcessing: '3-5 business days'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'processing': return 'text-blue-600 bg-blue-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'rejected': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'processing': return <Clock className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'rejected': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Registrations</h1>
              <p className="text-gray-600 mt-2">Track your cord blood banking registrations and their status</p>
            </div>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              New Registration
            </button>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {userOrders.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Registrations Yet</h3>
              <p className="text-gray-600 mb-6">You haven't completed any registrations yet. Start your first registration to see it here.</p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Start Registration
              </button>
            </div>
          ) : (
            userOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{order.name}</h3>
                    <p className="text-sm text-gray-600">Registration ID: {order.registrationId}</p>
                  </div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    <span className="ml-2 capitalize">{order.status}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">{order.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium">{order.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Due Date</p>
                      <p className="font-medium">{order.dueDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Hospital</p>
                      <p className="font-medium">{order.hospital}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Banking Type</p>
                      <p className="font-medium capitalize">{order.bankingType} Banking</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Registration Date</p>
                      <p className="font-medium">{order.registrationDate}</p>
                    </div>
                  </div>
                </div>

                {order.uploadedFile && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-800">Uploaded: {order.uploadedFile}</span>
                    </div>
                  </div>
                )}

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Expected Processing Time</p>
                      <p className="font-medium">{order.estimatedProcessing}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                        View Details
                      </button>
                      <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                        Download Receipt
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default MyRegistrationPage;