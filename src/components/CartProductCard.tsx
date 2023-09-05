import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';
import { useRouter } from 'next/router';
import {
    increaseQuantityThunk,
    decreaseQuantityThunk,
    removeFromCartThunk,
} from '@/utilities/cart';

interface CartProductCardProps {
    url: string;
    image: string;
    title: string;
    description: string;
    price: number;
    stripePrice: string;
    quantity: number;
    onChange: () => void;
    onRemove: () => void;
}

export default function CartProductCard({
    url,
    image,
    title,
    description,
    price: initialPrice,
    stripePrice,
    quantity: initialQuantity,
    onRemove,
    onChange,
}: CartProductCardProps) {
    const router = useRouter();
    const [quantity, setQuantity] = useState(initialQuantity);
    const [price, setPrice] = useState(initialPrice * initialQuantity); // Initialize with total price

    useEffect(() => {
        // Update the total price when the component mounts
        onChange();
    }, []);

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        setPrice((prevPrice) => prevPrice + initialPrice);
        increaseQuantityThunk(url.slice(1));
        onChange(); // Call onChange to recalculate total price
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
            setPrice((prevPrice) => prevPrice - initialPrice);
            decreaseQuantityThunk(url.slice(1));
            onChange(); // Call onChange to recalculate total price
        } else {
            onRemove();
        }
    };

    const handleRemoveFromCart = () => {
        onRemove();
    };

    return (
        <div className="card bg-blue-7 shadow-xl">
            <div className={'relative w-full pb-56'}>
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
                <h2 className="card-title truncate cursor-pointer" onClick={() => router.push(`/products${url}`)}>
                    {title}
                </h2>
                <p className={'truncate cursor-pointer'} onClick={() => router.push(`/products${url}`)}>
                    {description}
                </p>
                <div className="card-actions flex justify-between items-end">
                    <h2 className="text-2xl font-bold">{price}$</h2>
                </div>
                <div className="flex justify-between mt-4">
                    <div className='flex gap-4 items-center'>
                    <button className=" px-2 py-1 rounded-md cursor-pointer" onClick={decreaseQuantity}>
                        <AiOutlineMinus />
                    </button>
                    <p>{quantity}</p>
                    <button className=" px-2 py-1 rounded-md cursor-pointer" onClick={increaseQuantity}>
                        <AiOutlinePlus />
                    </button>
                    </div>
                    <button className="px-2 py-1 rounded-md cursor-pointer" onClick={handleRemoveFromCart}>
                        <BiTrash className='text-2xl'/>
                    </button>
                </div>
            </div>
        </div>
    );
}
