import { ArticlesType } from "@/app/TypeScript/homePageType"
import Image from "next/image";

interface HomeNewsDataProps {
    data: ArticlesType[]
}

export default function MainNewtsCard({ data }: HomeNewsDataProps) {
    const firstNews = data[0];


    return (
        <div className="group cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg">
            <div className="overflow-hidden">
                <Image width={450} height={330} className="h-52 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 sm:h-60" src={firstNews.imageUrl} alt={firstNews.imageAlt} />
            </div>


            <div className="p-4">
                <p className="mb-2 text-sm font-medium text-red-700">{firstNews.category}</p>
                <h1 className="line-clamp-2 text-xl font-bold leading-snug text-gray-900 transition-colors duration-200 group-hover:text-red-700 sm:text-2xl">{firstNews.title}</h1>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{firstNews.description}</p>
                <p className="mt-4 text-xs text-gray-400">{new Date(firstNews.lastPublished).toLocaleDateString("bn-BD", { dateStyle: "full", timeZone: "Asia/Dhaka", })}</p>

            </div>
        </div>
    )
}