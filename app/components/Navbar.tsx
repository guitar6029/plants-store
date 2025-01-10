import Link from "next/link";
const Navbar = () => {
    return ( 
        <div className="flex flex-row justify-between p-3">
            <Link href="/all-plants">Shop</Link>
            <Link className="playwrite-custom text-base sm:text-3xl xl:text-4xl" href="/">Planty</Link>
            <Link href="/all-plants">Basket</Link>
        </div>
     );
}
 
export default Navbar;