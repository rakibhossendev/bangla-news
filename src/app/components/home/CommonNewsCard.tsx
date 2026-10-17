import { CommonDataType } from "@/app/TypeScript/NavCategories"
import Image from "next/image"
import Link from "next/link"
import ViewCount from "../ViewCount";

interface CommonNewsCardDataTypeProps{
    data: CommonDataType
    views?: number
}

export default function CommonNewsCard({data, views}: CommonNewsCardDataTypeProps) {


    return (
        <div className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-md">
            <Link href={`/article/${data.id}`}>
            <div className="overflow-hidden">
                <Image className="w-full object-cover transition-transform duration-500 group-hover:scale-105" src={data.imageUrl}  width={400} height={250} alt={data.imageAlt} />
            </div>

            <div className="p-4">
                <p className="mb-1 text-sm font-semibold text-red-600">{data.category}</p>
                <h2 className="line-clamp-2 text-md font-bold leading-7 text-gray-900 transition-colors group-hover:text-red-600"><title>{data.title}</title></h2>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">{data.description}</p>
                <p className="mt-1 flex items-center justify-between gap-2 border-t border-gray-100 pt-3 text-xs text-gray-400">
                    <span>{new Date(data.lastPublished).toLocaleDateString("bn-BD",{dateStyle: "full", timeZone:"Asia/Dhaka"})}</span>
                    <ViewCount views={views} className="shrink-0" />
                </p>
            </div>
            </Link>
        </div>
    )
}