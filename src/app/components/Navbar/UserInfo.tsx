'use client'

import { useSession } from "@/lib/auth-client"
import Image from "next/image";

export default function UserInfo(){
    const {data} = useSession();

  
return (
    <div className="flex items-center gap-2">
        {/* Profile Image */}
        {data?.user.image ? (
            <Image
                src={data.user.image}
                width={40}
                height={40}
                className="h-8 w-8 rounded-full object-cover ring-1 ring-gray-200 sm:h-10 sm:w-10"
                alt={data.user.name || "User"}
            />
        ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-600 sm:h-10 sm:w-10">
                {data?.user.name?.charAt(0).toUpperCase()}
            </div>
        )}

        {/* Name */}
        <p className="max-w-20 truncate text-xs font-medium text-gray-800 sm:max-w-32 sm:text-sm">
            {data?.user.name}
        </p>
    </div>
);

}