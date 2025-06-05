import { useState } from 'react';
import { FiArrowLeft, FiDollarSign, FiTag } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';

import ErrorMessage from '@/components/ErrorMessage';
import Loading from '@/components/Loading';
import Pagination from '@/components/Pagination';

import { useBrand, useProductsByBrand } from '@/hooks/useApi';

const BrandProducts = () => {
  const { brandId } = useParams<{ brandId: string }>();
  
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  const { data: brand, isLoading: brandLoading, error: brandError } = useBrand(brandId);
  
  const { 
    data: productsData, 
    isLoading: productsLoading, 
    error: productsError, 
    refetch 
  } = useProductsByBrand(brandId, currentPage, 6); 

  if (brandLoading || productsLoading) {
    return <Loading text="Loading products..." />;
  }

  if (brandError || productsError) {
    return (
      <ErrorMessage 
        message="Failed to load products. Please try again."
        onRetry={refetch}
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Link 
          to="/brands" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <FiArrowLeft className="w-4 h-4 mr-2" />
          Back to Brands
        </Link>
      </div>

      {brand && (
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-24 h-24 rounded-lg object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{brand.name}</h1>
              <p className="text-gray-600 text-lg">{brand.description}</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsData?.data?.map((product) => (
          <div key={product.id} className="card group">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {product.name}
                </h3>
                <div className="flex items-center text-green-600 font-bold ml-4">
                  <FiDollarSign className="w-4 h-4" />
                  {product.price}
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>
            
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <FiTag className="w-4 h-4 mr-1" />
                  {product.category}
                </div>
                
                <Link
                  to={`/products/${product.id}`}
                  className="btn-primary text-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {productsData?.data?.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found for this brand.</p>
        </div>
      )}

      {productsData && (
        <Pagination
          currentPage={currentPage}
          totalPages={productsData.totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default BrandProducts; 