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

const Success: React.FC<CheckoutPageProps> = () => {

    useEffect(() => {
    }, []);

    return (
        <main
                className={`flex w-screen h-screen flex-col bg-bg h-flex`}
            >
            <Navbar/>
            <section className={"flex flex-col items-center justify-center mx-8 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28 2xl:mx-32 mt-8"}>
                 <h2 className=''>Success</h2>
                 <p>Your order will be processed</p>
            </section>
        </main>
    )
}

export default Success;
