import { RocketIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Separator } from "../ui/separator"

export const CartSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="cursor-pointer">
                    <RocketIcon className="mr-2" />
                    <p>Carrinho</p>
                </Button>
            </SheetTrigger>

            <SheetContent className="p-4">
                <SheetHeader>

                    <SheetTitle>Carrinho</SheetTitle>

                </SheetHeader>
                <div className=" flex flex-col gap-5 my-3">
                    ...
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between items-center text-xl">
                    <div>Subtotal:</div>
                    <div>...</div>

                </div>
                <Separator className="my-4" />
                <div className="text-center">
                    <Button className="cursor-pointer">Finalizar compra</Button>
                </div>
            </SheetContent>
        </Sheet>
    )

}