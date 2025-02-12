import { ShoppingCart } from "lucide-react";

function CartPage() {
    return (
        <>
            <div className="text-center m-auto pt-40">
                <ShoppingCart color="white" size={200} className="m-auto" />
                <h1 className="text-white text-4xl/10">Your cart is empty</h1>
                <p className="text-zinc-300 text-2xl/15">Looks like you haven't added annything to your cart yet.</p>
                <button className="bg-[#14b380] text-white px-6 py-2 rounded" type="button">Start Shopping</button>
            </div>
        </>
    )
}
export default CartPage;