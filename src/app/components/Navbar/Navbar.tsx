
import Image from "next/image";
import navLogo from "@/assets/logo.webp"
import NavCategories from "./NavCategories";
import { NavCategoriesType } from "@/app/TypeScript/NavCategories";
import Link from "next/link";
import AuthButton from "./AuthButton";


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

        <div className="flex items-center justify-between gap-3 py-4">
            
            <div className="flex min-w-0 items-center gap-2 sm:flex-1 sm:justify-center">
                <Image src={navLogo} alt="Bangla News logo" loading="eager" className="h-auto w-9 sm:w-10"/>
                
                <div className="ml-1 sm:ml-2">
                    <h1 className="text-lg font-bold text-[#C10007] sm:text-2xl">Bangla News</h1>
                    <p className="text-[11px] sm:text-sm">{today}</p>
                </div>
            </div>

            {/* Auth */}
            <div className="shrink-0">
                <AuthButton />
            </div>
        </div>

        {/* Categories */}
        <NavCategories data={data} />

    </section>
</nav>

    )
}