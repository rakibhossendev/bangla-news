
import { NewsDetailsType } from "@/app/TypeScript/NewsDetailsType";
import Image from "next/image";

export default async function ArticleDetails({ params }: { params: Promise<{ articleId: string }> }) {
    const { articleId } = await params;
    const response = await fetch(`https://news-api-v2.vercel.app/api/article/${articleId}`)
    const newsDetails: NewsDetailsType = await response.json();

    if (!newsDetails?.data) {
        return (
            <section className="container mx-auto px-4 py-10">
                <p className="text-center text-gray-500">
                    Article not found
                </p>
            </section>
        );
    }
    return (
        <section className="container mx-auto mt-6 w-full px-4 sm:px-6 md:mt-8 lg:max-w-4xl">
            <div className="grid grid-cols-1">

                <h1 className="text-2xl font-bold leading-snug text-wrap sm:text-3xl md:text-4xl">{newsDetails.data.title}</h1>
                <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-[15px] sm:leading-7 md:text-base md:leading-8">{newsDetails.data?.description?.blocks[0].model.blocks[0].model.text}</p>
                <hr className="mt-6 text-gray-300" />
                <p className="mx-1 py-3 text-left text-xs text-gray-400 sm:text-sm">
                    {new Date(newsDetails.data.lastPublished).toLocaleDateString("bn-BD", { dateStyle: "full", timeZone: "Asia/Dhaka", })}
                </p>

                <hr className="text-gray-300" />

                {/* Article content */}
                <div className="mt-7 space-y-5 sm:mt-8 sm:space-y-6">
                    {newsDetails.data.body?.map((articleBody, index) => (
                        <div key={index}>

                            {/* Text content */}
                            {articleBody.text && (
                                <p className="text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8 md:text-[17px] md:leading-8">{articleBody.text}</p>
                            )}

                            {/* Image content */}
                            {articleBody.url && (
                                <figure className="my-6 overflow-hidden rounded-xl sm:my-8">
                                    <Image width={articleBody.width || 800} height={articleBody.height || 500} className="h-auto w-full object-cover" src={articleBody.url} alt={articleBody.altText || "Article image"} />

                                    {articleBody.caption && (
                                        <figcaption className="mt-2 px-1 text-xs leading-5 text-gray-500 sm:text-sm">{articleBody.caption}</figcaption>
                                    )}
                                </figure>
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}