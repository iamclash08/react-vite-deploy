// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Plane, User, LogOut } from 'lucide-react';

// interface NavbarProps {
//   showAuth?: boolean;
// }

// const Navbar: React.FC<NavbarProps> = ({ showAuth = false }) => {
//   const location = useLocation();
  
//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
//               <Plane className="h-6 w-6 text-white" />
//             </div>
//             <span className="text-xl font-bold text-gray-900">TravelAI</span>
//           </Link>

//           <div className="flex items-center space-x-4">
//             {showAuth ? (
//               <>
//                 <Link
//                   to="/profile"
//                   className={`p-2 rounded-lg transition-colors ${
//                     location.pathname === '/profile' 
//                       ? 'bg-blue-100 text-blue-600' 
//                       : 'text-gray-600 hover:bg-gray-100'
//                   }`}
//                 >
//                   <User className="h-5 w-5" />
//                 </Link>
//                 <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
//                   <LogOut className="h-5 w-5" />
//                   <span className="hidden sm:block">Logout</span>
//                 </button>
//               </>
//             ) : (
//               <Link
//                 to="/login"
//                 className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
//               >
//                 Get Started
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Menu, X } from 'lucide-react';

interface HeaderProps {
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      transparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-sky-500 to-indigo-600 p-2 rounded-xl">
              <Plane className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              TravelAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-sky-600 transition-colors">
              Home
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-sky-600 transition-colors">
              Dashboard
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-sky-600 transition-colors">
              Profile
            </Link>
            <Link 
              to="/auth" 
              className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-6 py-2 rounded-full hover:from-sky-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-sky-600 transition-colors">
                Home
              </Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-sky-600 transition-colors">
                Dashboard
              </Link>
              <Link to="/profile" className="text-gray-700 hover:text-sky-600 transition-colors">
                Profile
              </Link>
              <Link 
                to="/auth" 
                className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-6 py-3 rounded-full hover:from-sky-600 hover:to-indigo-700 transition-all duration-300 text-center"
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;