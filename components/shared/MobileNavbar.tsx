'use client';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import {SheetIcon} from "lucide-react";

const MobileNavbar = ({business}: {business: boolean}) => {
    return (
        <Sheet>
            <SheetTrigger>
                <div className={"md:hidden px-4 py-2 text-3xl hover:bg-secondary-700 transition-all ease-in duration-200"}>
                    <i className={"ri-menu-2-line text-white"}></i>
                </div>
            </SheetTrigger>
            <SheetContent className={"bg-secondary-400"}>
                <SheetHeader>
                    <SheetDescription >
                        <div className={"flex flex-col w-full mt-[50%] gap-3"}>
                            {
                                business ? (
                                    <>
                                        <div className={"relative flex justify-start gap-4 rounded-lg p-4"}>
                                            <Link href={'/profile'} className={"text-white text-xl font-bold p-3 flex-col"}>
                                                <i className={'ri-star-fill'}></i> {' '}
                                                <span>Profilul tau</span>
                                            </Link>
                                        </div>
                                        <div className={"relative flex justify-start gap-4 rounded-lg p-4 flex-row"}>
                                            <Link href={'/mailbox'} className={"text-white text-xl font-bold p-3"}><i className={'ri-mail-fill'}></i> Mesaje</Link>
                                        </div>
                                        <div className={"relative flex justify-start gap-4 rounded-lg p-4 flex-row"}>
                                            <Link href={'/add-location'} className={"text-white  text-xl font-bold p-3"}><i className={'ri-search-line'}></i> Adauga locatii</Link>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className={"relative flex justify-start gap-4 rounded-lg p-4"}>
                                            <Link href={'/reviews'} className={"text-white text-xl font-bold p-3 flex-col"}>
                                                <i className={'ri-star-fill'}></i> {' '}
                                                <span>Review-urile tale</span>
                                            </Link>
                                        </div>
                                        <div className={"relative flex justify-start gap-4 rounded-lg p-4 flex-row"}>
                                            <Link href={'/mailbox'} className={"text-white text-xl font-bold p-3"}><i className={'ri-mail-fill'}></i> Mesaje</Link>
                                        </div>
                                        <div className={"relative flex justify-start gap-4 rounded-lg p-4 flex-row"}>
                                            <Link href={'/search'} className={"text-white  text-xl font-bold p-3"}><i className={'ri-search-line'}></i> Cauta</Link>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                        <div className={"flex absolute bottom-5"}>
                            <div className={"relative flex gap-4 rounded-lg p-4 items-center justify-center"}>
                                <Link href={business ? '/dashboard' : 'business-dashboard'} className={"text-white text-xl gap-2 font-bold p-3 hover:bg-secondary-600 flex"}><i className={business ? 'ri-user-fill': 'ri-briefcase-line'}></i><span>Switch {business ? 'as User' : 'to Business'}</span></Link>
                            </div>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavbar;