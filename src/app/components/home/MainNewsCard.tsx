
import { CommonDataType } from "@/app/TypeScript/NavCategories";
import Image from "next/image";
import Link from "next/link";

export interface MainNewsDataProps {
    data: CommonDataType[]
}

export default function MainNewtsCard({ data }: MainNewsDataProps) {
    const firstNews = data[0];


    return (
        <div className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <Link href={`/article/${firstNews.id}`}>
            <div className="relative overflow-hidden">
                <Image width={600} height={400} className="h-56 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 sm:h-64" src={firstNews.imageUrl} alt={firstNews.imageAlt} />
                <span className="absolute bottom-3 left-3 rounded-md bg-red-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">{firstNews.category}</span>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5">
                <h1 className="line-clamp-2 text-xl font-bold leading-7 text-gray-900 transition-colors duration-200 group-hover:text-red-600 sm:text-2xl sm:leading-8">{firstNews.title}</h1>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">{firstNews.description}</p>

                <div className="mt-4 border-t border-gray-100 pt-3">
                    <p className="text-xs text-gray-400">{new Date(firstNews.lastPublished).toLocaleDateString("bn-BD", {dateStyle: "full",timeZone: "Asia/Dhaka",})}</p>
                </div>

            </div>
            </Link>
        </div>
    )
}