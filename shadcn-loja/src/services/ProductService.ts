import { Product } from "@/types/product"
import { products } from "@/components/products/products"
import { promises } from "dns";

export const getAllProducts = async ():Promise<Product[]>=>{
    return new Promise((resolve, reject) => {
       setTimeout(() => {
                resolve(products);
       }, 2000);
    });
}