import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  Download, 
  Share, 
  ArrowLeft,
  Calendar,
  DollarSign,
  Cloud,
  MapPin,
  Plane,
  Hotel,
  Camera,
  Coffee,
  Map,
  Sun,
  CloudRain
} from 'lucide-react';

const TripSummary = () => {
  const itinerary = [
    {
      day: 1,
      title: "Arrival & Shibuya",
      date: "March 15, 2025",
      activities: [
        { icon: Plane, text: "Arrival at Haneda Airport", time: "2:00 PM" },
        { icon: Hotel, text: "Check-in at Shibuya Hotel", time: "4:00 PM" },
        { icon: Camera, text: "Shibuya Crossing Experience", time: "6:00 PM" }
      ]
    },
    {
      day: 2,
      title: "Traditional Tokyo",
      date: "March 16, 2025",
      activities: [
        { icon: Map, text: "Senso-ji Temple Visit", time: "9:00 AM" },
        { icon: Coffee, text: "Traditional Tea Ceremony", time: "2:00 PM" },
        { icon: Camera, text: "Asakusa District Exploration", time: "4:00 PM" }
      ]
    },
    {
      day: 3,
      title: "Modern Tokyo",
      date: "March 17, 2025",
      activities: [
        { icon: Camera, text: "Tokyo Skytree", time: "10:00 AM" },
        { icon: Coffee, text: "Harajuku Street Food", time: "1:00 PM" },
        { icon: Map, text: "Meiji Shrine", time: "4:00 PM" }
      ]
    },
    {
      day: 4,
      title: "Cultural Immersion",
      date: "March 18, 2025",
      activities: [
        { icon: Map, text: "Imperial Palace Gardens", time: "9:00 AM" },
        { icon: Coffee, text: "Sushi Making Class", time: "1:00 PM" },
        { icon: Camera, text: "Ginza Shopping District", time: "5:00 PM" }
      ]
    },
    {
      day: 5,
      title: "Departure",
      date: "March 19, 2025",
      activities: [
        { icon: Coffee, text: "Final Breakfast at Tsukiji", time: "8:00 AM" },
        { icon: Camera, text: "Last-minute souvenir shopping", time: "10:00 AM" },
        { icon: Plane, text: "Departure from Haneda Airport", time: "3:00 PM" }
      ]
    }
  ];

  const budgetBreakdown = [
    { category: "Flights", amount: 800, percentage: 32 },
    { category: "Accommodation", amount: 600, percentage: 24 },
    { category: "Food", amount: 400, percentage: 16 },
    { category: "Activities", amount: 350, percentage: 14 },
    { category: "Transportation", amount: 200, percentage: 8 },
    { category: "Shopping", amount: 150, percentage: 6 }
  ];

  const weatherForecast = [
    { day: 'March 15', temp: '24°C', condition: 'Sunny', icon: Sun },
    { day: 'March 16', temp: '22°C', condition: 'Partly Cloudy', icon: Cloud },
    { day: 'March 17', temp: '20°C', condition: 'Light Rain', icon: CloudRain },
    { day: 'March 18', temp: '23°C', condition: 'Cloudy', icon: Cloud },
    { day: 'March 19', temp: '25°C', condition: 'Sunny', icon: Sun }
  ];

  const phrases = [
    { english: "Hello", japanese: "Konnichiwa", pronunciation: "kohn-nee-chee-wah" },
    { english: "Thank you", japanese: "Arigato gozaimasu", pronunciation: "ah-ree-gah-toh goh-zah-ee-mahs" },
    { english: "Excuse me", japanese: "Sumimasen", pronunciation: "soo-mee-mah-sen" },
    { english: "How much?", japanese: "Ikura desu ka?", pronunciation: "ee-koo-rah dess kah" },
    { english: "Where is...?", japanese: "Doko desu ka?", pronunciation: "doh-koh dess kah" },
    { english: "I don't understand", japanese: "Wakarimasen", pronunciation: "wah-kah-ree-mah-sen" },
    { english: "Please help me", japanese: "Tasukete kudasai", pronunciation: "tah-soo-keh-teh koo-dah-sigh" },
    { english: "Delicious", japanese: "Oishii", pronunciation: "oh-ee-shee" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar showAuth />
      
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link 
              to="/dashboard"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-6 w-6 text-gray-600" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tokyo Adventure</h1>
              <p className="text-gray-600">March 15 - 19, 2025 • 5 Days</p>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors">
              <Download className="h-5 w-5" />
              <span>Download PDF</span>
            </button>
            <button className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition-colors">
              <Share className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Trip Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Calendar className="h-8 w-8 text-blue-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-900">5 Days</h3>
            <p className="text-gray-600">Duration</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-900">$2,500</h3>
            <p className="text-gray-600">Total Budget</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <MapPin className="h-8 w-8 text-purple-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-900">Tokyo</h3>
            <p className="text-gray-600">Destination</p>
          </div>
        </div>

        {/* Detailed Itinerary */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Calendar className="h-6 w-6 mr-3 text-blue-500" />
            Detailed Itinerary
          </h2>
          
          <div className="space-y-8">
            {itinerary.map((day) => (
              <div key={day.day} className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Day {day.day}: {day.title}</h3>
                    <p className="text-gray-600">{day.date}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {day.activities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <activity.icon className="h-6 w-6 text-blue-500" />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.text}</p>
                      </div>
                      <div className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600">
                        {activity.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Breakdown */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <DollarSign className="h-6 w-6 mr-3 text-green-500" />
            Budget Breakdown
          </h2>
          
          <div className="space-y-4">
            {budgetBreakdown.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <span className="font-medium text-gray-900 w-32">{item.category}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full"
                      style={{width: `${item.percentage}%`}}
                    ></div>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="font-semibold text-gray-900">${item.amount}</p>
                  <p className="text-sm text-gray-600">{item.percentage}%</p>
                </div>
              </div>
            ))}
            
            <div className="border-t pt-4 mt-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Total Budget</span>
                <span className="text-lg font-bold text-gray-900">$2,500</span>
              </div>
            </div>
          </div>
        </div>

        {/* Weather & Translator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Weather Forecast */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Cloud className="h-6 w-6 mr-3 text-blue-500" />
              Weather Forecast
            </h2>
            
            <div className="space-y-4">
              {weatherForecast.map((day, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <day.icon className="h-6 w-6 text-blue-500" />
                    <div>
                      <p className="font-medium text-gray-900">{day.day}</p>
                      <p className="text-sm text-gray-600">{day.condition}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{day.temp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Essential Phrases */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="h-6 w-6 mr-3 text-purple-500" />
              Essential Japanese Phrases
            </h2>
            
            <div className="space-y-4">
              {phrases.map((phrase, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-medium text-gray-900">{phrase.english}</p>
                    <p className="text-blue-600 font-semibold">{phrase.japanese}</p>
                  </div>
                  <p className="text-sm text-gray-600 italic">{phrase.pronunciation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripSummary;