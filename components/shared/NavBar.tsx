'use client'
import {sidebarLinks} from "@/constants";
import Link from "next/link";
import MobileNavbar from "@/components/shared/MobileNavbar";
import {SignedIn, UserButton} from "@clerk/nextjs";

const NavBar = ({business}: {business: boolean}) => {
    return (
        <nav className={"sticky left-0 top-0 flex h-fit w-full flex-row justify-center overflow-auto border-r border-r-primary-700 bg-secondary-400"}>
            <div className={"flex justify-between w-full"}>
                <div>
                    <div className={"relative flex justify-start gap-4 rounded-lg p-4"}>
                        <Link href={!business? '/dashboard' : '/business-dashboard'} className={"text-white text-xl font-bold p-3 rounded-xl hover:bg-secondary-600"}><i className={'ri-home-3-fill'}></i> Acasa</Link>
                    </div>
                </div>
                <div className={"md:flex flex-row justify-evenly hidden"}>
                    {!business ? (
                        <>
                            <div className={"relative flex justify-start gap-4 rounded-lg p-4 "}>
                                <Link href={'/reviews'} className={"text-white text-xl font-bold p-3 flex-col rounded-xl hover:bg-secondary-600"}>
                                    <i className={'ri-star-fill'}></i> {' '}
                                    <span>Review-urile tale</span>
                                </Link>
                            </div>
                            <div className={"relative flex justify-start gap-4 rounded-lg p-4 flex-row"}>
                                <Link href={'/mailbox'} className={"text-white text-xl font-bold p-3 rounded-xl hover:bg-secondary-600"}><i className={'ri-mail-fill'}></i> Mesaje</Link>
                            </div>
                            <div className={"relative flex justify-start gap-4 rounded-lg p-4 flex-row"}>
                                <Link href={'/search'} className={"text-white text-xl font-bold p-3 rounded-xl hover:bg-secondary-600"}><i className={'ri-search-line'}></i> Cauta</Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={"relative flex justify-start gap-4 rounded-lg p-4 "}>
                                <Link href={'/profile'} className={"text-white text-xl font-bold p-3 flex-col rounded-xl hover:bg-secondary-600"}>
                                    <i className={'ri-star-fill'}></i> {' '}
                                    <span>Profilul tau</span>
                                </Link>
                            </div>
                            <div className={"relative flex justify-start gap-4 rounded-lg p-4 flex-row"}>
                                <Link href={'/mailbox?bus=true'} className={"text-white text-xl font-bold p-3 rounded-xl hover:bg-secondary-600"}><i className={'ri-mail-fill'}></i> Mesaje</Link>
                            </div>
                            <div className={"relative flex justify-start gap-4 rounded-lg p-4 flex-row"}>
                                <Link href={'/add-location'} className={"text-white text-xl font-bold p-3 rounded-xl hover:bg-secondary-600"}><i className={'ri-search-line'}></i> Adauga locatii</Link>
                            </div>
                        </>
                    )}
                </div>
                <div className={"flex justify-center"}>
                    <div className={"relative flex gap-4 rounded-lg p-4 items-center justify-center"}>
                        <Link href={business ? '/dashboard' : 'business-dashboard'} className={"hidden text-white text-xl rounded-xl font-bold gap-2 p-3 hover:bg-secondary-600 md:flex"}><i className={business ? 'ri-user-fill': 'ri-briefcase-line'}></i><span>Switch {business ? 'as User' : 'to Business'}</span></Link>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <MobileNavbar business={business} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;