import { api } from '@/services/api';
import { useQuery } from '@tanstack/react-query';


export const useBrands = (page = 1, limit = 4) => {
    return useQuery({
        queryKey: ['brands', page, limit],

        queryFn: () => api.getBrands(page, limit),

        staleTime: 5 * 60 * 1000,

        gcTime: 10 * 60 * 1000,
    });
};


export const useBrand = (id?: string) => {
    return useQuery({
        queryKey: ['brand', id],
        queryFn: () => api.getBrand(id!),

        enabled: !!id,

        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    });
};


export const useProductsByBrand = (brandId?: string, page = 1, limit = 6) => {
    return useQuery({
        queryKey: ['products', 'brand', brandId, page, limit],
        queryFn: () => api.getProductsByBrand(brandId!, page, limit),

        enabled: !!brandId,

        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    });
};


export const useProduct = (id?: string) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => api.getProduct(id!),


        enabled: !!id,

        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    });
};


export const useProducts = (page = 1, limit = 8) => {
    return useQuery({
        queryKey: ['products', page, limit],
        queryFn: () => api.getProducts(page, limit),

        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    });
}; 