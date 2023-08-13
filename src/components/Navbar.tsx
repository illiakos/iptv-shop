import Image from "next/image";

export default function Navbar() {
    return(
        <header className={"flex h-fit mt-8 mx-8 lg:mx-28 justify-between"}>
            <div className={"relative pb-16 lg:pb-4 w-full lg:w-1/6 hover:scale-105 trasitional-all duration-500"}>
                <Image
                    draggable={false}
                    className="rounded-xl"
                    layout={'fill'}
                    objectFit={'contain'}
                    src={'/logo.svg'}
                    alt="productImage"
                />
            </div>
            <ul className={"w-1/4 gap-4 lg:flex justify-end hidden"}>
                <button className="btn btn-outline px-12">Contact us</button>
                <button className="btn btn-primary px-12">Order</button>


            </ul>
        </header>
    )
}
