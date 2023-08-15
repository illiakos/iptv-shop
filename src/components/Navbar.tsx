import Image from "next/image";
import {useRouter} from "next/router";



export default function Navbar() {

    const router = useRouter()

    return(
        <header className={"flex h-fit mt-8 mx-8 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28 2xl:mx-32 justify-between"}>
            <div className={"relative pb-16 lg:pb-4 w-full lg:w-1/6 hover:scale-105 trasitional-all duration-500"} onClick={() => router.push('/')}>
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
