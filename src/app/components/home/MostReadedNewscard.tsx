import { CommonDataType } from "@/app/TypeScript/NavCategories";
import Link from "next/link";
import ViewCount from "../ViewCount";


interface MostReadedNewsDataTypeProps{
    mostReadedNewsData: CommonDataType[]
    views?: Record<string, number>
}

export default function MostReadedNewsCard({mostReadedNewsData, views}: MostReadedNewsDataTypeProps){

    return (
        <div className="bg-[#FFFFFF] hover:shadow-sm border border-gray-300 rounded">
            <h1 className="px-4 text-xl font-bold mt-3">সর্বাধিক পঠিত</h1>
            <div>
                {mostReadedNewsData.map((data,index) => (
                    <Link key={data.id} href={`/article/${data.id}`}>
                        <h2 className="text-md font-semibold my-5 cursor-pointer hover:text-red-700 px-6">
                            {index+1}. {data.title}
                            <ViewCount views={views?.[data.id]} className="ml-2 text-xs font-normal text-gray-400" />
                        </h2>
                    </Link>
                ))}
            </div>

        </div>
    )
}