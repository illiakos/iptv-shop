import {Inter} from 'next/font/google'
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import {productsMap} from "@/data/productsData";
import { useEffect } from 'react';
import {addToCartThunk, clearCart, getCart } from '@/utilities/cart';

const inter = Inter({subsets: ['latin']})

export default function Home() {


    const handleAddToCart = () => {
        addToCartThunk("decoder");
        alert('Product added to cart!');
      };

      const logArray = () => {
       console.log(getCart())
        alert('Products on cart!');
      };


    return (
        <main
            className={`flex flex-col bg-bg h-full`}
        >
            <Navbar/>
            <section className={"mx-8 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28 2xl:mx-32 mt-8"}>
               <div className={"w-full grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8"}>
                 {Object.keys(productsMap).map((productKey) => {
                   const {url, image, title, description, price, stripePrice} = productsMap[productKey];
                   return (
                       <ProductCard
                           key={productKey}
                           url={url}
                           title={title}
                           image={image}
                           description={description}
                           price={price}
                           stripePrice={stripePrice}
                       />
                   );
                 })}
               </div>
                <div className={"h-8"}>

                </div>
                <button onClick={()=> handleAddToCart()}>add to cart</button>
                <button className='ml-12' onClick={()=> logArray()}>log</button>
                <button className='ml-12' onClick={()=> clearCart()}>clear</button>
            </section>
        </main>
    )
}
