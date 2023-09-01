import Image from "next/image";

import {BsCartPlus, BsCartFill} from 'react-icons/bs';
import {useState} from "react";
import { checkout } from "../../checkout";
import {useRouter} from "next/router";

interface ProductCardProps {
    url: string;
    image: string;
    title: string,
    description: string;
    price: string;
    stripePrice: string;
}

export default function ProductCard({url, image, title, description, price, stripePrice} :ProductCardProps) {

    const router = useRouter()

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
                    <h2 className="text-2xl font-bold">{price}</h2>
                    {addedToCart ?
                        <BsCartFill className={"text-2xl cursor-pointer"} onClick={()=>router.push(`/products${url}`)}/>
                        :
                        <BsCartPlus className={"text-2xl cursor-pointer"} onClick={()=>router.push(`/products${url}`)}/>
                    }

                </div>
                <button className={"btn btn-primary mt-4"} onClick={(() => {
                    checkout({
                    lineItems: [
                        {
                            price: `${stripePrice}`,
                            quantity: 1
                        },
                        {
                            price: `price_1NhvTmK1pNgR6R0d8EMxnTYF`,
                            quantity: 1
                        },
                        {
                            price: `price_1NhvP3K1pNgR6R0dyYmNYDmW`,
                            quantity: 1
                        }
                    ]
                    })
                })}>Buy</button>
            </div>
        </div>
    )
}
