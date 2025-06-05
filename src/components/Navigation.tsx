import { FiGrid } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';


  const Navigation = () => {
  const location = useLocation();
  

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link to="/brands" className="flex items-center space-x-2 ml-1">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">My</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Store</span>
          </Link>

    
          <div className="flex space-x-8 mr-2">
            <Link
              to="/brands"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/brands') || location.pathname.includes('/brands')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50' 
              }`}
            >
              <FiGrid className="w-4 h-4" />
              <span>Brands</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 