import Link from "next/link";
import { Form } from "./Form";
const Header = () => {
    return (
        <div className="w-full h-[70vh] relative">
            <img className="w-full h-full object-cover -z-0 select-none" src="/homepage-background.svg" alt="" />
            <header className="top-0 left-0 h-16 absolute w-full flex items-center justify-center">
                <div className="flex items-center justify-between w-11/12">
                    <Link className="text-2xl font-semibold tracking-wider text-gray-100" href={"/"}>News Website</Link>
                    <nav>
                        <ul className="flex items-center gap-4 text-gray-200">
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={"#post"}>Post</Link></li>
                            <li><Link href={"/contact"}>Contact</Link></li>
                            <li><Link href={"/about"}>About me</Link></li>
                            <li></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
                <div className="flex flex-col items-center justify-center w- gap-2">
                    <h1 className="text-gray-300 font-semibold tracking-wider text-4xl uppercase w-3/5">Technology</h1>
                    <Form />
                    <p className="w-3/5 mt-8 text-gray-300">Stay Continuously Updated with Groundbreaking Innovations, Forge a Technological Revolution with News that Shaping the Future and Paving the Way for Tomorrow!</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
