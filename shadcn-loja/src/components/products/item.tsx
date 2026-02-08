'use client'
import { Product } from "@/types/product";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useCartStore } from "@/stores/cart-store";

type Props = {
    item: Product;
}

export const ProductItem = ({ item }: Props) => {

    const { upsertCartItem } = useCartStore(state => state);

    const handleAddButton = (item: Product) => {
        upsertCartItem(item, 1);
        toast.success('Adicionado ao carrinho!',
            {
                description: item.name,
                action: {
                    label: 'Ver carrinho',
                    onClick: () => {
                        console.log('Ir para o carrinho');
                    }
                }
            }
        );
    }

    return (
        <div>
            <div className="overflow-hidden rounded-md">
                <img src={item.image}
                    alt={item.name}
                    className="w-full h-32 object-cover"
                />
            </div>
            <div className="mt-3 flex flex-col gap-2">
                <p className="text-lg">{item.name}</p>
                <p className="text-sm opacity-45">R${item.price.toFixed(2)}</p>
                <Button
                    onClick={() => handleAddButton(item)}
                >
                    Adicionar
                </Button>
            </div>
        </div>
    );
}