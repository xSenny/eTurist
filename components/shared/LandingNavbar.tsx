import Image from "next/image";
import Link from "next/link";
import {landingPageNavLinks} from "@/constants";
import {Button} from "@/components/ui/button";
import {SignedIn, SignedOut} from "@clerk/nextjs";
const LandingNavbar = () => {
    return (
        <nav className={"flex justify-between md:justify-around text-secondary-25 pt-5 md:pt-7 px-3"}>
            <Image src={'/assets/icon.png'} alt={'icon'} height={40} width={40}/>
            <ul className={"flex flex-row justify-around gap-3 md:gap-8 items-center"}>
                {
                    landingPageNavLinks.map(link => (
                        <li key={link.title} className={"cursor-pointer"}>
                            <Link href={link.path} className={"hover:text-secondary-500"}>{link.title}</Link>
                        </li>
                    ))
                }
            </ul>
            <SignedOut>
                <Link href={"/sign-in"}>
                    <Button variant={"ghost"}>Sign In</Button>
                </Link>
            </SignedOut>
            <SignedIn>
                <Link href={"/dashboard"}>
                    <Button variant={"secondary"}>Dashboard</Button>
                </Link>
            </SignedIn>
        </nav>
    )
}

export default LandingNavbar;