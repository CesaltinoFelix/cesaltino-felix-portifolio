"use client";

import { Sheet, ShetContent, SheetTrigger, SheetContent } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const links = [
    {
        name: "home", 
        path: "/"
    },
    {
        name: "services", 
        path: "/services"
    },
    {
        name: "resume", 
        path: "/resume"
    },
    {
        name: "work", 
        path: "/work"
    },
    {
        name: "contact", 
        path: "/contact"
    }
]

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>

            <SheetContent className="flex flex-col">
                {/* logo */}
                    <div className="mt-32 text-center text-2xl">
                        <Link href="/">
                            <h1 className="text-4xl font-semibold">
                                CeFelix<span className="text-accent">.</span>
                            </h1>
                        </Link> 
                    </div>
                {/* Nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) =>{
                        return <Link 
                            key={index} 
                            href={link.path}
                            className={`${pathname == link.path && "border-b-2 text-accent border-accent"} text-xl capitalize hover:text-accent`}
                            >
                            {link.name}
                            </Link>
                        
                })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav