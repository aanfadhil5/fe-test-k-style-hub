import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navigation from '@/components/Navigation';
import BrandProducts from '@/pages/BrandProducts';
import Brands from '@/pages/Brands';
import ProductDetail from '@/pages/ProductDetail';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="/brands" replace />} />
              
              <Route path="/brands" element={<Brands />} />
              
              <Route path="/brands/:brandId/products" element={<BrandProducts />} />
              
              <Route path="/products/:productId" element={<ProductDetail />} />
              
              <Route path="*" element={<Navigate to="/brands" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App; 