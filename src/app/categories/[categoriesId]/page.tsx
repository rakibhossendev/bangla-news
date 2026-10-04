import CategoriedCard from "@/app/components/Categories/CategoriesCard";
import { CategoriesResponseType } from "@/app/TypeScript/CategoriesType";
import Link from "next/link";

const categoriesDataResponse = async (categoriesId: string,page: number): Promise<CategoriesResponseType> => {
    const response = await fetch(`https://news-api-v2.vercel.app/api/category/${categoriesId}?page=${page}`);
    const dataByCategories: CategoriesResponseType = await response.json()

    return {
        page: dataByCategories.page,
        pageCount: dataByCategories.pageCount,
        data: dataByCategories.data
    }
}

export default async function CategoriedByData({ params, searchParams }: { params: Promise<{ categoriesId: string }>; searchParams: Promise<{page?: string}> }) {
    const { categoriesId } = await params;
    const {page} = await searchParams;
    const currentPage = Number(page) || 1
    const dataByCategories = await categoriesDataResponse(categoriesId,currentPage);

    console.log(currentPage);

    return (
        <section className="container mx-auto mt-5 ">
            
            <div className="grid grid-cols-1 gap-4 px-3 sm:grid-cols-2 sm:px-4 lg:grid-cols-3 lg:gap-5 lg:px-0">
            {dataByCategories.data.map((data) => (<CategoriedCard key={data.id} data={data}/>))}

            </div>


            <div className="flex justify-between mt-5">
                {
                    currentPage > 1 ? <Link className="px-4 py-2 border rounded border-gray-300 text-gray-400 text-bold" href={`?page=${currentPage - 1}`}>পূর্ববর্তী</Link> : ""
                }
                <p className="px-4 py-2 border rounded border-gray-300 text-gray-400 text-bold">পাতা {currentPage} / {dataByCategories.pageCount}</p>
                
                {
                    currentPage < dataByCategories.pageCount ? <Link className="px-4 py-2 border rounded border-gray-300  text-bold" href={`?page=${currentPage + 1}`}>পরবর্তী</Link>  : ""
                }
            </div>
        </section>
    )
}