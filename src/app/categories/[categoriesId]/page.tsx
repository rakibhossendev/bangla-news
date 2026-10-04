import CategoriedCard from "@/app/components/Categories/CategoriesCard";
import { CategoriesDataType } from "@/app/TypeScript/CategoriesType";

const categoriesDataResponse = async (categoriesId: string): Promise<CategoriesDataType[]> => {
    const response = await fetch(`https://news-api-v2.vercel.app/api/category/${categoriesId}`);
    const dataByCategories = await response.json()

    return dataByCategories.data;
}


export default async function CategoriedByData({ params }: { params: Promise<{ categoriesId: string }> }) {
    const { categoriesId } = await params;
    const dataByCategories = await categoriesDataResponse(categoriesId);


    return (
        <section className="container mx-auto mt-5 grid grid-cols-1 gap-4 px-3 sm:grid-cols-2 sm:px-4 lg:grid-cols-3 lg:gap-5 lg:px-0">
            {dataByCategories.map((data) => (<CategoriedCard key={data.id} data={data}/>))}
        </section>
    )
}