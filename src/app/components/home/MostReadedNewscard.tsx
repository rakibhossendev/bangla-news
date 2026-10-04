import { CommonDataType } from "@/app/TypeScript/NavCategories";
import Link from "next/link";


interface MostReadedNewsDataTypeProps{
    mostReadedNewsData: CommonDataType[]
}

export default function MostReadedNewsCard({mostReadedNewsData}: MostReadedNewsDataTypeProps){

    return (
        <div className="bg-[#FFFFFF] hover:shadow-sm border border-gray-300 rounded">
            <h1 className="px-4 text-xl font-bold mt-3">সর্বাধিক পঠিত</h1>
            <div>
                {mostReadedNewsData.map((data,index) => <Link key={data.id} href={`/article/${data.id}`}><h2 key={data.id} className="text-md font-semibold my-5 cursor-pointer hover:text-red-700 px-6">{index+1}. {data.title}</h2></Link>)}
            </div>

        </div>
    )
}