const API_BASE_URL = 'http://localhost:3001';
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  async getBrands(page = 1, limit = 4) {
    await delay(800);
    const response = await fetch(`${API_BASE_URL}/brands?_page=${page}&_limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch brands');
    }
    const data = await response.json();
    const total = parseInt(response.headers.get('x-total-count') || '0');
    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    };
  },

  async getBrand(id) {
    await delay(500);
    const response = await fetch(`${API_BASE_URL}/brands/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch brand');
    }
    return response.json();
  },

  async getProductsByBrand(brandId, page = 1, limit = 6) {
    await delay(600);
    const response = await fetch(`${API_BASE_URL}/products?brandId=${brandId}&_page=${page}&_limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    const total = parseInt(response.headers.get('x-total-count') || '0');
    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    };
  },

  async getProduct(id) {
    await delay(400);
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return response.json();
  },

  async getProducts(page = 1, limit = 8) {
    await delay(700);
    const response = await fetch(`${API_BASE_URL}/products?_page=${page}&_limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    const total = parseInt(response.headers.get('x-total-count') || '0');
    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    };
  }
}; 