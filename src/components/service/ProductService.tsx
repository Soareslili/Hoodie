import type { Product } from '../../types/products';

export async function getProducts() {
    const response = await fetch("/data/products.json");
    const data = await response.json();

    return data.products as Product[]; 
}