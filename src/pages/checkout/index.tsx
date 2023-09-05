// pages/about.tsx

import CartProductCard from '@/components/CartProductCard';
import Navbar from '@/components/Navbar';
import ProgressBar from '@/components/scroller/ProgressBar';
import { CartItem, getCart, removeFromCartThunk } from '@/utilities/cart';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { checkout } from '../../../checkout';

interface CheckoutPageProps {
    cart: CartItem[];
}

const Checkout: React.FC<CheckoutPageProps> = () => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [totalSum, setTotalSum] = useState<number>(0);

    useEffect(() => {
        const cartItems = getCart();
        setCart(cartItems);
        calculateTotalSum();
    }, []);

    const calculateTotalSum = () => {
        const cartItems = getCart();
        setCart(cartItems);
        const sum = cartItems.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
        setTotalSum(sum);
    };

    const handleRemoveFromCart = (itemId: string) => {
        removeFromCartThunk(itemId);
        setCart(getCart());
        calculateTotalSum()
    };

    const router = useRouter();

    const handleCheckout = () => {
        setCart(getCart())
        const lineItems = cart.map((cartItem) => ({
            price: cartItem.stripePrice, // Use the stripePrice from cartItem
            quantity: cartItem.quantity,
        }));

        // Call your checkout function with the lineItems
        checkout({lineItems});
    };

    return (
        <main
                className={`min-h-screen flex flex-col bg-bg h-flex`}
            >
            <Navbar/>
            <section className={"mx-8 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28 2xl:mx-32 mt-8"}>
                <h2 className='text-3xl font-bold'>CART</h2>
                <div className=' mt-4'>
                    <div className='flex flex-col bg-base-100 rounded-xl '>
                    <div className='w-full p-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8'>
                                {Object.values(cart).map((cartItem: CartItem) => (
                                    <CartProductCard
                                        key={cartItem.id}
                                        url={cartItem.url}
                                        title={cartItem.title}
                                        image={cartItem.image}
                                        description={cartItem.description}
                                        price={cartItem.price}
                                        stripePrice={cartItem.stripePrice}
                                        quantity={cartItem.quantity}
                                        onChange={() => calculateTotalSum()}
                                        onRemove={() => handleRemoveFromCart(cartItem.id)}
                                    />
                                ))}
                    </div>
                        <div className='bg-blue-7 self-center p-4 my-8 rounded-full items-center cursor-pointer'
                        onClick={() => router.push("/")}>
                            <AiOutlinePlus/>
                        </div>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col justify-center gap-8'>
                    <div className='self-center flex gap-4 mt-4'>
                        <p className='text-2xl '>Sum: </p>
                        <p className='font-semibold text-2xl '>{totalSum}$</p>
                    </div>
                    <button className='btn-primary p-4 mt-4 self-center rounded-xl px-16'
                    onClick={handleCheckout}>
                        Order now
                    </button>
                </div>
                <div className='h-8'>

                </div>
            </section>
        </main>
    )
}

export default Checkout;
