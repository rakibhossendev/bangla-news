
import MainNewsCard from "./components/home/MainNewsCard";
import { HomeNewsDatatType } from "./TypeScript/homePageType";


const homeNewPromise = async (): Promise<HomeNewsDatatType[]> => {
  const response = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await response.json();

  return data.data;
}

export default async function Home() {
  const newsData = await homeNewPromise();
  const mainNews = newsData[0].articles
  console.log(mainNews);

  return (
    <section className="container mx-auto mt-5">

      <div className="grid grid-cols-3">
        {
          <MainNewsCard data={mainNews} />
        }

      </div>



    </section>
  );
}
