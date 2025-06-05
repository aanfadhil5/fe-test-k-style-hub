import type { Brand, Product } from '@/types';


const API_BASE_URL = 'http://localhost:3001';


const delay = (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, ms));


interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}


export const api = {

    async getBrands(page = 1, limit = 4): Promise<PaginatedResponse<Brand>> {
        await delay(800);
        const response = await fetch(`${API_BASE_URL}/brands?_page=${page}&_limit=${limit}`);

        if (!response.ok) {
            throw new Error('Failed to fetch brands');
        }

        const data: Brand[] = await response.json();
        const total = parseInt(response.headers.get('x-total-count') || '0');

        return {
            data,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
        };
    },


    async getBrand(id: string): Promise<Brand> {
        await delay(500);
        const response = await fetch(`${API_BASE_URL}/brands/${id}`);

        if (!response.ok) {
            throw new Error('Failed to fetch brand');
        }

        return response.json();
    },


    async getProductsByBrand(
        brandId: string,
        page = 1,
        limit = 6
    ): Promise<PaginatedResponse<Product>> {
        await delay(600);
        const response = await fetch(
            `${API_BASE_URL}/products?brandId=${brandId}&_page=${page}&_limit=${limit}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const data: Product[] = await response.json();
        const total = parseInt(response.headers.get('x-total-count') || '0');

        return {
            data,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
        };
    },


    async getProduct(id: string): Promise<Product> {
        await delay(400);
        const response = await fetch(`${API_BASE_URL}/products/${id}`);

        if (!response.ok) {
            throw new Error('Failed to fetch product');
        }

        return response.json();
    },


    async getProducts(page = 1, limit = 8): Promise<PaginatedResponse<Product>> {
        await delay(700);
        const response = await fetch(`${API_BASE_URL}/products?_page=${page}&_limit=${limit}`);

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const data: Product[] = await response.json();
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