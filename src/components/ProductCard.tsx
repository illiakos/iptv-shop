import Image from "next/image";

import {BsCartPlus, BsCartFill} from 'react-icons/bs';
import {useEffect, useState} from "react";
import { checkout } from "../../checkout";
import {useRouter} from "next/router";
import {addToCartThunk, getCart, removeFromCartThunk } from "@/utilities/cart";

interface ProductCardProps {
    url: string;
    image: string;
    title: string,
    description: string;
    price: number;
    stripePrice: string;
}

export default function ProductCard({url, image, title, description, price, stripePrice} :ProductCardProps) {

    const addToCart = () => {
        addToCartThunk(url.slice(1))
        setAddedToCart(true)
    }

    const removeFromCart = () => {
        removeFromCartThunk(url.slice(1))
        setAddedToCart(false)
    }

    const router = useRouter()

    useEffect(() => {
        const cart = getCart();
        const cartItem = cart.find((item) => item.url === url);
        if (cartItem) {
           setAddedToCart(true)
        }

    }, []);

    const [addedToCart, setAddedToCart] = useState<boolean>(false)
    return(
        <div className="card w-full bg-base-100 shadow-xl">
            <div className={"relative w-full lg:pb-56 pb-96"}>
                <Image
                    draggable={false}
                    className="rounded-t-2xl"
                    layout={'fill'}
                    objectFit={'cover'}
                    src={image}
                    alt="productImage"
                />
            </div>
            <div className="card-body">
                <h2 className="card-title truncate cursor-pointer" onClick={()=>router.push(`/products${url}`)}>{title}
                </h2>
                <p className={"truncate cursor-pointer"} onClick={()=>router.push(`/products${url}`)}>{description}
                </p>
                <div className="card-actions flex justify-between items-end">
                    <h2 className="text-2xl font-bold">{price}$</h2>
                    {addedToCart ?
                        <BsCartFill className={"text-2xl cursor-pointer"} onClick={()=>removeFromCart()}/>
                        :
                        <BsCartPlus className={"text-2xl cursor-pointer"} onClick={()=>addToCart()}/>
                    }

                </div>
                {!addedToCart ? 
                <button className={"btn btn-primary mt-4"} onClick={()=>addToCart()}>Add to cart</button>
                :
                <button className={"btn btn-outline mt-4"} onClick={()=>router.push("/checkout")}>Go to cart</button>
                }
            </div>  
        </div>
    )
}
