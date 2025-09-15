import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  Plane, 
  MessageCircle, 
  Calendar, 
  DollarSign, 
  Cloud, 
  Globe,
  Star,
  ArrowRight,
  MapPin,
  Camera,
  Compass
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI Chatbot",
      description: "Get instant travel advice and personalized recommendations"
    },
    {
      icon: Calendar,
      title: "Smart Itinerary",
      description: "Auto-generated day-by-day plans tailored to your preferences"
    },
    {
      icon: DollarSign,
      title: "Budget Tracker",
      description: "Keep track of expenses and stay within your budget"
    },
    {
      icon: Cloud,
      title: "Weather Forecast",
      description: "7-day weather predictions for your destination"
    },
    {
      icon: Globe,
      title: "Local Tips",
      description: "Insider knowledge and cultural insights from locals"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York",
      text: "TravelAI planned my entire European trip in minutes! The recommendations were spot-on.",
      rating: 5
    },
    {
      name: "Mike Chen",
      location: "San Francisco", 
      text: "Best travel planning tool I've ever used. The budget tracking saved me hundreds!",
      rating: 5
    },
    {
      name: "Emma Wilson",
      location: "London",
      text: "The AI chatbot felt like having a personal travel agent. Absolutely fantastic!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Plan Smarter,{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Travel Better
              </span>{' '}
              ✈️
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your AI-powered travel buddy for itineraries, budgets, weather, and local tips. 
              Experience the future of travel planning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                to="/dashboard"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <span>Start Planning</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/login"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
              >
                Login / Signup
              </Link>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-8 max-w-md mx-auto opacity-20">
                <MapPin className="h-16 w-16 text-blue-500 mx-auto" />
                <Camera className="h-16 w-16 text-purple-500 mx-auto" />
                <Compass className="h-16 w-16 text-pink-500 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Perfect Trips
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powered by advanced AI, our platform handles all aspects of travel planning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 card-hover hover:bg-white transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 feature-icon">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by Travelers Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of happy travelers who've discovered smarter planning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <Plane className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">TravelAI</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Your AI-powered travel companion for smarter planning and better experiences.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TravelAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;