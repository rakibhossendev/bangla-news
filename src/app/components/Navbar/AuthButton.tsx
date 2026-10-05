'use client'
import { useSession, signOut } from "@/lib/auth-client";
import Link from "next/link";

export default function AuthButton() {
    const { data, isPending } = useSession();

    return (
        <div className="flex sm:items-center justify-end sm:justify-center gap-2 sm:absolute sm:right-0">
            {
                isPending ?

                    <button onClick={() => signOut()} className="border p-2 border-gray-600 text-black rounded text-sm text-bold cursor-pointer hover:bg-gray-200">Sign Out</button>
                    :
                    <div>
                        <Link href="/sign-up"><button className="rounded bg-[#C10007] px-3 py-2 text-sm text-white cursor-pointer hover:bg-[#95050a]">সাইন আপ</button></Link>
                        <Link href={'/sign-in'}> <button className="cursor-pointer px-2 sm:px-3">সাইন ইন</button></Link>
                    </div>
            }
        </div>

    )
}