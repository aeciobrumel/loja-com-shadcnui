import { getAllProducts } from "@/services/ProductService";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Product } from "@/types/product";
import { Item } from "@radix-ui/react-dropdown-menu";
import { ProductsEmpty } from "./empty";
import { ProductItem } from "./item";

type ProductsTabProps = {
    title: string;
    value: string;
    products: Product[];
}
export const ProductsTap = async () => {
    const products = await getAllProducts();

    const tabs: ProductsTabProps[] = [
        {
            title: 'Sushi',
            value: 'sushi',
            products: products.filter(item => item.category === 'sushi')
        },
        {
            title: 'Temaki',
            value: 'temaki',
            products: products.filter(item => item.category === 'temaki')
        },
        {
            title: 'Combinados',
            value: 'pack',
            products: products.filter(item => item.category === 'pack')
        },
        {
            title: 'Bebidas',
            value: 'beverages',
            products: products.filter(item => item.category === 'beverages')
        },

    ]
    return (
        <Tabs defaultValue="sushi">
            <TabsList className="flex w-auto">

                {tabs.map(item => (
                    <TabsTrigger
                        className="flex-1"
                        key={item.value}
                        value={item.value}
                    >
                        <p>{item.title}</p>
                    </TabsTrigger>
                ))}
            </TabsList>

            {tabs.map(item => (
                <TabsContent
                    key={item.value}
                    value={item.value}
                    className="mt-6"
                >
                    {item.products.length > 0 &&
                        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            {item.products.map(product => (
                                <ProductItem key={product.id} item={product} />
                            ))
                            }
                        </div>
                    }
                    {item.products.length === 0 &&
                        <ProductsEmpty />
                    }
                </TabsContent>
            ))}

        </Tabs>
    );
}