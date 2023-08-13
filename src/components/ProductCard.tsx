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
                    src={'/product-1.png'}
                    alt="productImage"
                />
            </div>
            <div className="card-body">
                <h2 className="card-title">Телевізор Ergo 43GUS6500
                </h2>
                <p>Супер-пупер ультра-модний телевізор без смс і реєстрації</p>
                <div className="card-actions flex justify-between items-end">
                    <h2 className="text-2xl font-bold">200$</h2>
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
                            price: "price_1NegExK1pNgR6R0dFFLVGRNd",
                            quantity: 1
                        }
                    ]
                    })
                })}>Buy</button>
            </div>
        </div>
    )
}
