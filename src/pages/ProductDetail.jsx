import { FiArrowLeft, FiCheckCircle, FiDollarSign, FiPackage, FiTag } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';
import { useBrand, useProduct } from '../hooks/useApi';

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: product, isLoading: productLoading, error: productError, refetch } = useProduct(productId);
  const { data: brand, isLoading: brandLoading } = useBrand(product?.brandId);


  if (productLoading || brandLoading) {
    return <Loading text="Loading product details..." />;
  }

  if (productError) {
    return (
      <ErrorMessage 
        message="Failed to load product details. Please try again."
        onRetry={refetch}
      />
    );
  }

  if (!product) {
    return (
      <ErrorMessage 
        message="Product not found."
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 ml-1">
        <Link 
          to={brand ? `/brands/${brand.id}/products` : '/brands'} 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <FiArrowLeft className="w-4 h-4 mr-2" />
          Back to {brand ? `${brand.name} Products` : 'Brands'}
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 lg:h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
        <div className="space-y-6 pr-2">
          {brand && (
            <div className="flex items-center space-x-3">
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <Link
                to={`/brands/${brand.id}/products`}
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              >
                {brand.name}
              </Link>
            </div>
          )}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <div className="flex items-center space-x-2 text-3xl font-bold text-green-600">
              <FiDollarSign className="w-8 h-8" />
              <span>{product.price}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <FiTag className="w-5 h-5" />
            <span className="text-lg">{product.category}</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {product.description}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
              <FiPackage className="w-5 h-5 mr-2" />
              Material
            </h3>
            <p className="text-gray-600 text-lg">{product.material}</p>
          </div>
          {product.features && product.features.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Available Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}
          {product.colors && product.colors.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Available Colors</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="flex space-x-4 pt-7">
            <button className="flex-1 btn-primary text-lg py-3">
              Add to Cart
            </button>
            <button className="btn-secondary text-lg py-3">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 