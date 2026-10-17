import { CommonDataType } from "@/app/TypeScript/NavCategories"
import Link from "next/link"
import ViewCount from "../ViewCount";


interface MainNewtsListCardProps {
    data: CommonDataType
    views?: number
}


export default function MainNewtsListCard({ data, views }: MainNewtsListCardProps) {

    return (
        <div className="group cursor-pointer border-b border-gray-100 px-4 py-3 transition-colors duration-200 hover:bg-gray-50">
            <Link href={`/article/${data.id}`}>            
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-red-600">{data.category}</p>
            <h2 className="line-clamp-2 text-base font-semibold leading-6 text-gray-800 transition-colors duration-200 group-hover:text-red-600">{data.title}</h2>
            <ViewCount views={views} className="mt-1 text-xs text-gray-400" />
            </Link>
        </div>
    )
}