
import Image from "next/image";
import navLogo from "@/assets/logo.webp"
import NavCategories from "./NavCategories";
import { NavCategoriesType } from "@/app/TypeScript/NavCategories";


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
                <div className="flex items-center justify-center">

                    {/* Logo + Title - Always Center */}
                    <div className="flex gap-2 items-center justify-center">
                        <Image src={navLogo} alt="bangla news logo" loading="eager" className="w-10 h-auto" />

                        <div>
                            <h1 className="text-2xl font-bold text-[#C10007]">Bangla News</h1>
                            <p className="text-sm">{today}</p>
                        </div>
                    </div>

                    {/* Sign in / Sign up - Right */}
                    <div className="absolute right-0 flex items-center">
                        <button className="mx-4 cursor-pointer">সাইন ইন</button>
                        <button className="bg-[#C10007] text-white rounded px-3 text-sm cursor-pointer hover:bg-[#95050a] py-2">সাইন আপ</button>
                    </div>

                </div>

                <NavCategories data={data}/>

            </section>

        </nav>
    )
}