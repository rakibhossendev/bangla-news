'use client'
import {NavCategoriesType} from "@/app/TypeScript/NavCategories";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavCategoriesTypeProps{
    data: NavCategoriesType;
}

export default function NavCategories({data}: NavCategoriesTypeProps){
    const pathname = usePathname();
    const filteredCategories = data.data.filter(item => item.scrapable);

    return (
        <div className="overflow-x-auto scrollbar-hide">
            <ul className="flex gap-6 mt-3 justify-center min-w-max pb-1">
                <li><Link className={`${pathname === "/" ? "text-[#C10007]":""}`} href="/">হোম</Link></li>
                {filteredCategories.map((item,index) => <li key={index}><Link className={`${pathname === item.slug ? "text-[#C10007]": ""}`} href={item.slug}>{item.title}</Link></li>)}
            </ul>
            
        </div>
    )

}