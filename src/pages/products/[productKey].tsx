import Image from 'next/image'
import {useRouter} from "next/router";
import {FC, useEffect, useState} from "react";
import Navbar from "@/components/Navbar";
import {productsMap} from "@/data/productsData";
import {checkout} from "../../../checkout";
import {IoArrowBackSharp} from "react-icons/io5";
import { addToCartThunk, getCart, removeFromCartThunk } from '@/utilities/cart';


const ProductPage: FC = () => {

    const router = useRouter();
    const {productKey} = router.query;
    console.log(typeof productKey !== 'string')

    useEffect(() => {
        const cart = getCart();
        const cartItem = cart.find((item) => item.url === product.url);
        if (cartItem) {
           setAddedToCart(true)
        }

    }, []);

    const [addedToCart, setAddedToCart] = useState<boolean>(false)
    // Check if the projectId is a string
    if (typeof productKey !== 'string') {
        return <div>Loading...</div>; // Handle loading state or error
    }

    const product = productsMap[productKey]; // Access the project using projectId

    if (!product) {
        // Handle the case where the project doesn't exist
        return <div>Project not found</div>;
    }


    const addToCart = () => {
        addToCartThunk(product.url.slice(1))
        setAddedToCart(true)
    }

    const removeFromCart = () => {
        removeFromCartThunk(product.url.slice(1))
        setAddedToCart(false)
    }

    return (
        <main className={"flex flex-col max-w-screen min-h-screen bg-bg"}>
            <Navbar/>
            <div className={"flex pb-8 lg:pb-0 lg:flex-row flex-col mt-16 gap-x-16 mx-8 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28 2xl:mx-32"}>
                <div className={"lg:w-1/2 lg:h-[45rem] h-[25rem] w-full"}>
                    <div className={"relative w-full h-full"}>
                        <Image
                            draggable={false}
                            className="rounded-2xl"
                            layout={'fill'}
                            objectFit={'cover'}
                            src={product.image}
                            alt="productImage"
                        />
                        <IoArrowBackSharp className={"absolute text-4xl text-bg left-4 top-4 cursor-pointer"} onClick={() => router.back()}/>
                    </div>
                </div>
                <div className={"lg:w-1/2 flex flex-col justify-center"}>

                    <h1 className={"lg:text-5xl mt-8 lg:mt-0 text-3xl font-primary text-white font-bold"}>
                        {product.title}
                    </h1>

                    <div className={"flex flex-col mt-8"}>
                        <h3 className={"text-xl font-primary  font-medium"}>
                            Description:
                        </h3>
                        <h3 className={"text-xl font-primary font-medium "}>
                            {product.description}
                        </h3>
                    </div>
                    <div className={"flex justify-between items-center flex-row-reverse mt-8"}>
                    {!addedToCart ? 
                <button className={"btn btn-primary mt-4 px-16"} onClick={()=>addToCart()}>Add to cart</button>
                :
                <button className={"btn btn-outline mt-4 px-16"} onClick={()=>router.push("/checkout")}>Go to cart</button>
                }
                        <h3 className={"text-5xl font-primary text-white font-bold "}>
                            {product.price}€
                        </h3>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductPage;
