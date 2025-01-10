import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-2 items-center">


        <div className="group flex flex-col gap-1 items-center">
          <Link className="text-base lg:text-4xl xl:text-7xl font-semibold" href="/indoor-plants">Indoor Plants</Link>
          <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-black"></div>
        </div>
        <div className="group flex flex-col gap-1 items-center">
          <Link className="text-base lg:text-4xl xl:text-7xl font-semibold" href="/outdoor-plants">Outdoor Plants</Link>
          <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-black"></div>
        </div>
        <div className="group flex flex-col gap-1 items-center">
          <Link className="text-base lg:text-4xl xl:text-7xl font-semibold" href="/flowering-plants">Flowering Plans</Link>
          <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-black"></div>
        </div>
        <div className="group flex flex-col gap-1 items-center">
          <Link className="text-base lg:text-4xl xl:text-7xl font-semibold" href="/indoor-plants/succulents-cacti">Succulents and Cacti</Link>
          <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-black"></div>
        </div>
        <div className="group flex flex-col gap-1 items-center">
          <Link className="text-base lg:text-4xl xl:text-7xl font-semibold" href="/gardening-tools">Gardening Tools</Link>
          <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-black"></div>
        </div>
        <div className="group flex flex-col gap-1 items-center">
          <Link className="text-base lg:text-4xl xl:text-7xl font-semibold" href="/plant-care">Plant Care</Link>
          <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-black"></div>
        </div>









      </div>
    </div>
  );
}
