import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
import type { CommonDataType } from "@/app/TypeScript/NavCategories"
import Link from "next/link";

const headerDataAPIPromise = async (): Promise<CommonDataType[]> => {
    const response = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
    const data = await response.json();

    return data.data
}

export default async function MarqueText(){
    const marqueHeaderData = await headerDataAPIPromise();

    // console.log(marqueHeaderData);

    return (
        <div className="mt-5 bg-red-700  text-white text-center">
            
            

            <div className="container mx-auto flex h-10 items-stretch text-center">
                <p className="bg-red-900 w-15 flex shrink-0 items-center justify-center text-center">সর্বশেষ</p>
                <MarqueeText direction="right" duration={10} className="flex items-center">
                {marqueHeaderData.map(header => <span className="mx-4" key={header.id}><Link href={"#"}> <span>●</span>  {header.title}</Link></span>)}
                </MarqueeText>
            </div>
     
        </div>
    )
}