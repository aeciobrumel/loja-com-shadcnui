import { The_Girl_Next_Door } from "next/font/google";
import { Logo } from "./logo";
import { ModeToggle } from "./ModeToggle";
import { CartSidebar } from "./cart/sidebar";

export const Header = () => {
    return (
        <header className=" flex justify-between items-center my-5">
            <div className="flex items-center gap-3">
                <Logo />
                <ModeToggle />
            </div>
            <div className="flex items-center gap-3">
                <CartSidebar />
            </div>
        </header>
    );
}