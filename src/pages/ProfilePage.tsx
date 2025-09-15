import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  User, 
  Mail, 
  MapPin, 
  Calendar,
  Settings,
  Moon,
  Sun,
  Bell,
  ArrowLeft,
  Edit,
  Save,
  X,
  Plane,
  Camera,
  Mountain,
  Utensils
} from 'lucide-react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    location: 'San Francisco, CA',
    joinDate: 'March 2024'
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const travelPreferences = [
    { id: 'adventure', label: 'Adventure & Trekking', icon: Mountain, selected: true },
    { id: 'culture', label: 'Cultural Experiences', icon: Camera, selected: true },
    { id: 'food', label: 'Food & Dining', icon: Utensils, selected: true },
    { id: 'relaxation', label: 'Beach & Relaxation', icon: Sun, selected: false }
  ];

  const savedTrips = [
    {
      id: 1,
      destination: 'Tokyo, Japan',
      dates: 'Mar 15-19, 2025',
      status: 'Upcoming',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      destination: 'Paris, France',
      dates: 'Jan 10-15, 2025',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      destination: 'Bali, Indonesia',
      dates: 'Dec 20-30, 2024',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar showAuth />
      
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Link 
            to="/dashboard"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-12 w-12 text-white" />
                </div>
                
                {isEditing ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={editedProfile.name}
                      onChange={(e) => setEditedProfile({...editedProfile, name: e.target.value})}
                      className="w-full text-center text-xl font-bold border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      value={editedProfile.email}
                      onChange={(e) => setEditedProfile({...editedProfile, email: e.target.value})}
                      className="w-full text-center text-gray-600 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      value={editedProfile.location}
                      onChange={(e) => setEditedProfile({...editedProfile, location: e.target.value})}
                      className="w-full text-center text-gray-600 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex space-x-3 justify-center">
                      <button
                        onClick={handleSave}
                        className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                      >
                        <Save className="h-4 w-4" />
                        <span>Save</span>
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex items-center space-x-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        <X className="h-4 w-4" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
                    <p className="text-gray-600 flex items-center justify-center mt-2">
                      <Mail className="h-4 w-4 mr-2" />
                      {profile.email}
                    </p>
                    <p className="text-gray-600 flex items-center justify-center mt-1">
                      <MapPin className="h-4 w-4 mr-2" />
                      {profile.location}
                    </p>
                    <p className="text-gray-600 flex items-center justify-center mt-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      Joined {profile.joinDate}
                    </p>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="mt-4 flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors mx-auto"
                    >
                      <Edit className="h-4 w-4" />
                      <span>Edit Profile</span>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Settings Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Settings
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {isDarkMode ? <Moon className="h-5 w-5 text-gray-600" /> : <Sun className="h-5 w-5 text-gray-600" />}
                    <span className="text-gray-700">Dark Mode</span>
                  </div>
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isDarkMode ? 'bg-blue-500' : 'bg-gray-300'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Bell className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700">Notifications</span>
                  </div>
                  <button
                    onClick={() => setNotifications(!notifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notifications ? 'bg-blue-500' : 'bg-gray-300'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Travel Preferences */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Travel Preferences</h3>
              
              <div className="space-y-3">
                {travelPreferences.map((pref) => (
                  <div key={pref.id} className={`flex items-center space-x-3 p-3 rounded-lg border-2 transition-colors ${pref.selected ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                    <pref.icon className={`h-5 w-5 ${pref.selected ? 'text-blue-500' : 'text-gray-400'}`} />
                    <span className={`font-medium ${pref.selected ? 'text-blue-700' : 'text-gray-700'}`}>
                      {pref.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Saved Trips */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Plane className="h-6 w-6 mr-3 text-blue-500" />
                My Trips
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {savedTrips.map((trip) => (
                  <div key={trip.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={trip.image} 
                        alt={trip.destination}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold">{trip.destination}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          trip.status === 'Upcoming' 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-500 text-white'
                        }`}>
                          {trip.status}
                        </span>
                      </div>
                      <p className="text-gray-200 mb-4">{trip.dates}</p>
                      <Link
                        to={trip.status === 'Upcoming' ? '/dashboard' : '/trip-summary'}
                        className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <span>{trip.status === 'Upcoming' ? 'Continue Planning' : 'View Summary'}</span>
                        <Plane className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Plane className="h-5 w-5" />
                  <span>Plan New Trip</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;