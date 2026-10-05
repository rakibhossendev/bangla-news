
import Image from "next/image";
import navLogo from "@/assets/logo.webp"
import NavCategories from "./NavCategories";
import { NavCategoriesType } from "@/app/TypeScript/NavCategories";
import Link from "next/link";


const categoriesResponse = async (): Promise<NavCategoriesType> => {
    const response = await fetch('https://news-api-v2.vercel.app/api/categories');
    const data = await response.json();

    return data
}

export default async function Navbar() {
    const data = await categoriesResponse()


    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    const today = new Intl.DateTimeFormat("bn-BD", options).format(new Date());

    return (
        <nav className="container mx-auto px-4">
            <section className="relative">

                {/* Header */}
                <div className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">

                    {/* Logo + Title */}
                    <div className="flex items-center justify-center sm:flex-1">
                        <Image
                            src={navLogo}
                            alt="bangla news logo"
                            loading="eager"
                            className="w-9 sm:w-10 h-auto"
                        />

                        <div className="ml-2">
                            <h1 className="text-xl sm:text-2xl font-bold text-[#C10007]">
                                Bangla News
                            </h1>
                            <p className="text-xs sm:text-sm">{today}</p>
                        </div>
                    </div>

                    {/* Sign in / Sign up */}
                    <div className="flex items-center justify-center gap-2 sm:absolute sm:right-0">
                        <button className="cursor-pointer px-2 sm:px-3">
                            সাইন ইন
                        </button>

                        <Link href="/sign-up">
                            <button className="rounded bg-[#C10007] px-3 py-2 text-sm text-white cursor-pointer hover:bg-[#95050a]">
                                সাইন আপ
                            </button>
                        </Link>
                    </div>

                </div>

                {/* Categories */}
                <NavCategories data={data} />

            </section>
        </nav>
    )
}