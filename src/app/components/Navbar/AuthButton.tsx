'use client'
import { useSession, signOut } from "@/lib/auth-client";
import Link from "next/link";
import UserInfo from "./UserInfo";

export default function AuthButton() {
    const { data: session, isPending } = useSession();

    if(isPending){
       return <p>Loading...</p>
    }

    return (
        <div className="flex items-center justify-end sm:absolute sm:right-0">
            
            {session?.user ? (
               <div className="flex items-center gap-2 sm:gap-3">

                    {/* User Info */}
                    <UserInfo />

                    {/* Sign Out */}
                    <button onClick={() => signOut()} className=" rounded-md border border-gray-300 px-2.5 py-1.5 text-xs font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-100 sm:px-3 sm:py-2 cursor-pointer sm:text-sm">Sign Out</button>
                </div>
            ) : (
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <Link href="/sign-up">
                        <button className=" rounded-md bg-[#C10007] px-2.5 py-1.5 text-xs font-medium text-white transition hover:bg-[#95050a] sm:px-3 sm:py-2 sm:text-sm">সাইন আপ</button>
                    </Link>
                    <Link href="/sign-in">
                        <button className=" rounded-md px-2 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-100 sm:px-3 sm:py-2 sm:text-sm">সাইন ইন</button>
                    </Link>
                </div>
            )}
        </div>
    );


}