import data from "../data/products.json";

export function getAll() {
    return {
        data: data.items,
        total: data.total,
    };
}

interface Review {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
}

export interface Product {
    thumbnail: string;
    price: number;
    id: number
    title: string
    description: string
    category: string
    tags: string[]
    brand?: string
    weight: number
    dimensions: {
        width: number
        height: number
        depth: number
    }
    reviews: Review[]
    returnPolicy: string
    minimumOrderQuanitity?: string
    images: string[]
 //update to match repo
}