import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex flex-col bg-bg h-screen`}
    >
      <Navbar/>
      <section className={"mx-28 mt-8"}>
        <ProductCard/>
      </section>
    </main>
  )
}
