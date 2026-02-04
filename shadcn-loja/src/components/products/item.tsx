import { Product } from "@/types/product";

type Props = {
    item: Product;
}

export const ProductItem = ({ item }: Props) => {
    return (
        <div>
            Product Item
        </div>
    );
}