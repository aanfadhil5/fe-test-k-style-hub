import { useState } from 'react';
import { FiArrowRight, FiCalendar, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import ErrorMessage from '@/components/ErrorMessage';
import Loading from '@/components/Loading';
import Pagination from '@/components/Pagination';

import { useBrands } from '@/hooks/useApi';

const Brands = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  const { data, isLoading, error, refetch } = useBrands(currentPage, 4);

  if (isLoading) {
    return <Loading text="Loading brands..." />;
  }

  if (error) {
    return (
      <ErrorMessage 
        message="Failed to load brands. Please try again."
        onRetry={refetch}
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Brands</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover premium sportswear and lifestyle brands from around the world
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 px-1">
        {data?.data?.map((brand) => (
          <div key={brand.id} className="card group">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              
              <div className="md:w-2/3 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{brand.name}</h2>
                  <div className="flex items-center text-sm text-gray-500">
                    <FiCalendar className="w-4 h-4 mr-1" />
                    {brand.established}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {brand.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <FiMapPin className="w-4 h-4 mr-1" />
                    {brand.country}
                  </div>
                  
                  <Link
                    to={`/brands/${brand.id}/products`}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 group-hover:bg-blue-700"
                  >
                    View Products
                    <FiArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {data && (
        <div className="mt-10">
          <Pagination
            currentPage={currentPage}
            totalPages={data.totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default Brands; 