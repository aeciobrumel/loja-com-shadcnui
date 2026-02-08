import { Cart } from "@/types/cart";
import { CartItemQuantity } from "./item-quantity";

type Props = {
    item: Cart;
}

export const CartItem = ({ item }: Props) => {
    return (
        <div className="flex items-center gap-5">
            <div className="w-16 overflow-hidden">
                <img src={item.product.image} alt={item.product.name} className="w-full object-cover h-auto" />
            </div>
            <div className="flex-1">
                <div className="text-md">{item.product.name}</div>
                <div className="text-xs  opacity-50">R${item.product.price.toFixed(2)}</div>
            </div>
            <div>
                <CartItemQuantity cartItem={item} />
            </div>
        </div>
    );
}