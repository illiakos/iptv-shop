import Image from "next/image";

import {BsCartPlus, BsCartFill} from 'react-icons/bs';
import {useState} from "react";
import { checkout } from "../../checkout";

export default function ProductCard() {

    const [addedToCart, setAddedToCart] = useState<boolean>(false)
    return(
        <div className="card lg:w-96 w-fit bg-base-100 shadow-xl">
            <div className={"relative w-full pb-64"}>
                <Image
                    draggable={false}
                    className="rounded-t-2xl"
                    layout={'fill'}
                    objectFit={'cover'}
                    src={'/product-2.jpg'}
                    alt="productImage"
                />
            </div>
            <div className="card-body">
                <h2 className="card-title">XIAOMI MI BOX S MAX 4K ULTRA HD SMART 2
                </h2>
                <p>В упаковці:
                    Xiaomi TV Box S (2 покоління): 1....
                </p>
                <div className="card-actions flex justify-between items-end">
                    <h2 className="text-2xl font-bold">50$</h2>
                    {addedToCart ?
                        <BsCartPlus className={"text-2xl"} onClick={() => setAddedToCart(false)}/>
                        :
                        <BsCartFill className={"text-2xl"} onClick={() => setAddedToCart(true)}/>
                    }

                </div>
                <button className={"btn btn-primary mt-4"} onClick={(() => {
                    checkout({
                    lineItems: [
                        {
                            price: "price_1NfSITK1pNgR6R0d72Rw7NFj",
                            quantity: 1
                        }
                    ]
                    })
                })}>Buy</button>
            </div>
        </div>
    )
}
