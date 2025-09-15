import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  Send, 
  Mic, 
  RefreshCw, 
  Download, 
  Share, 
  Trash2,
  Sun,
  Cloud,
  CloudRain,
  MapPin,
  DollarSign,
  Calendar,
  Plane,
  Hotel,
  Camera,
  Coffee,
  Map
} from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Dashboard = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI travel assistant. Where would you like to go and what kind of experience are you looking for?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: "Great choice! I've created a personalized 5-day itinerary for Tokyo. Check out the smart cards on the right for your detailed plan, budget breakdown, and weather forecast. Would you like me to adjust anything?",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const itineraryDays = [
    {
      day: 1,
      title: "Arrival & Shibuya",
      activities: [
        { icon: Plane, text: "Arrival at Haneda Airport", time: "2:00 PM" },
        { icon: Hotel, text: "Check-in at Shibuya Hotel", time: "4:00 PM" },
        { icon: Camera, text: "Shibuya Crossing Experience", time: "6:00 PM" }
      ]
    },
    {
      day: 2,
      title: "Traditional Tokyo",
      activities: [
        { icon: Map, text: "Senso-ji Temple Visit", time: "9:00 AM" },
        { icon: Coffee, text: "Traditional Tea Ceremony", time: "2:00 PM" },
        { icon: Camera, text: "Asakusa District Exploration", time: "4:00 PM" }
      ]
    },
    {
      day: 3,
      title: "Modern Tokyo",
      activities: [
        { icon: Camera, text: "Tokyo Skytree", time: "10:00 AM" },
        { icon: Coffee, text: "Harajuku Street Food", time: "1:00 PM" },
        { icon: Map, text: "Meiji Shrine", time: "4:00 PM" }
      ]
    }
  ];

  const weatherData = [
    { day: 'Mon', temp: '24°C', icon: Sun },
    { day: 'Tue', temp: '22°C', icon: Cloud },
    { day: 'Wed', temp: '20°C', icon: CloudRain },
    { day: 'Thu', temp: '23°C', icon: Cloud },
    { day: 'Fri', temp: '25°C', icon: Sun }
  ];

  const phrases = [
    { english: "Hello", japanese: "Konnichiwa", pronunciation: "kohn-nee-chee-wah" },
    { english: "Thank you", japanese: "Arigato gozaimasu", pronunciation: "ah-ree-gah-toh goh-zah-ee-mahs" },
    { english: "Excuse me", japanese: "Sumimasen", pronunciation: "soo-mee-mah-sen" },
    { english: "How much?", japanese: "Ikura desu ka?", pronunciation: "ee-koo-rah dess kah" },
    { english: "Where is...?", japanese: "Doko desu ka?", pronunciation: "doh-koh dess kah" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar showAuth />
      
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-120px)]">
          
          {/* Chat Panel */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg flex flex-col">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">AI Travel Assistant</h2>
              <p className="text-gray-600">Ask me anything about your trip!</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      message.isUser
                        ? 'chat-bubble-user ml-auto'
                        : 'chat-bubble-ai mr-auto'
                    }`}
                  >
                    <p className="text-white">{message.text}</p>
                    <p className="text-xs text-white opacity-75 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 px-4 py-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex space-x-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about destinations, activities, budget..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-12"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <Mic className="h-5 w-5" />
                  </button>
                </div>
                <button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Smart Cards Panel */}
          <div className="space-y-6 overflow-y-auto">
            
            {/* Itinerary Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  Tokyo Itinerary
                </h3>
              </div>
              <div className="space-y-4">
                {itineraryDays.map((day) => (
                  <div key={day.day} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Day {day.day}: {day.title}</h4>
                    <div className="space-y-2 mt-2">
                      {day.activities.map((activity, index) => (
                        <div key={index} className="flex items-center space-x-3 text-sm text-gray-600">
                          <activity.icon className="h-4 w-4 text-blue-500" />
                          <span className="flex-1">{activity.text}</span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weather Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Cloud className="h-5 w-5 mr-2 text-blue-500" />
                Weather Forecast
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {weatherData.map((day, index) => (
                  <div key={index} className="text-center">
                    <p className="text-xs text-gray-600 mb-1">{day.day}</p>
                    <day.icon className="h-6 w-6 mx-auto mb-1 text-blue-500" />
                    <p className="text-sm font-semibold">{day.temp}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-green-500" />
                Budget Tracker
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Budget</span>
                  <span className="font-semibold">$2,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Spent</span>
                  <span className="font-semibold text-green-600">$1,200</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{width: '48%'}}></div>
                </div>
                <div className="text-sm text-gray-600">
                  $1,300 remaining (52% of budget)
                </div>
              </div>
            </div>

            {/* Translator Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-purple-500" />
                Quick Translator
              </h3>
              <div className="space-y-3">
                {phrases.slice(0, 3).map((phrase, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900">{phrase.english}</p>
                        <p className="text-blue-600 font-semibold">{phrase.japanese}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{phrase.pronunciation}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
          <button className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
            <RefreshCw className="h-6 w-6 text-gray-600" />
          </button>
          <Link 
            to="/trip-summary"
            className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
          >
            <Download className="h-6 w-6 text-gray-600" />
          </Link>
          <button className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
            <Share className="h-6 w-6 text-gray-600" />
          </button>
          <button className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
            <Trash2 className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;