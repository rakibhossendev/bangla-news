import { CommonDataType } from "@/app/TypeScript/NavCategories"


interface MainNewtsListCardProps {
    data: CommonDataType
}


export default function MainNewtsListCard({ data }: MainNewtsListCardProps) {

    return (
        <div className="group cursor-pointer border-b border-gray-100 px-4 py-3 transition-colors duration-200 hover:bg-gray-50">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-red-600">{data.category}</p>
            <h2 className="line-clamp-2 text-base font-semibold leading-6 text-gray-800 transition-colors duration-200 group-hover:text-red-600">{data.title}</h2>
        </div>
    )
}