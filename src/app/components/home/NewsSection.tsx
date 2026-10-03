import { CommonDataType } from "@/app/TypeScript/NavCategories"
import CommonNewsCard from "./CommonNewsCard";

export interface NewsSectionDataTypeProps {
    articles: CommonDataType[];
    title: string;
}

export default function NewsSectionCard({ articles, title }: NewsSectionDataTypeProps) {

    return (
        <section className="mt-10">
            <h2 className="mb-2 text-xl font-bold">
                {title}
            </h2>

            <hr className="mb-4 border-red-700" />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {articles.map((data) => (
                    <CommonNewsCard
                        key={data.id}
                        data={data}
                    />
                ))}
            </div>
            </section>
 )
}