
export interface Product {
    id: number;
    name: string;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    brandId: string;
    category: string;
    image: string;
    thumbnail: string;
    images: string[];
    material?: string;
    features?: string[];
    sizes?: string[];
    colors?: string[];
}


export interface Brand {
    id: string;
    slug: string;
    name: string;
    url: string;
    logo: string;
    description: string;
    established: string;
    country: string;
}


export interface ApiResponse<T> {
    products?: T[];
    brands?: T[];
    total: number;
    skip: number;
    limit: number;
}


export interface PaginationParams {
    limit: number;
    skip: number;
}


export interface RouteParams {
    brand?: string;
    id?: string;
}


export type LoadingState = 'idle' | 'loading' | 'succeeded' | 'failed';


export interface ApiError {
    message: string;
    status?: number;
} 