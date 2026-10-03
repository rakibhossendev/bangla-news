
import MainNewsCard from "./components/home/MainNewsCard";
import MainNewtsListCard from "./components/home/MainNewsListCard";
import MostReadedNewsCard from "./components/home/MostReadedNewscard";
import NewsSectionCard from "./components/home/NewsSection";
import { HomeNewsDatatType, MostReadedDataType } from "./TypeScript/homePageType";


const homeNewPromise = async (): Promise<HomeNewsDatatType[]> => {
  const response = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await response.json();

  return data.data;
}

const mostReadedNewsData = async (): Promise<MostReadedDataType[]> => {
  const response = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await response.json();


  return data.data;
}

export default async function Home() {
  const mostReadedNews = await mostReadedNewsData();
  const newsData = await homeNewPromise();
  const mainNews = newsData[0].articles
  const someMainNews = mainNews.slice(1, 5);
  const selectedNews = newsData[1];
  const bangladeshNews = newsData[3];
  const indianNews = newsData[5];
  const world = newsData[6];
  const health = newsData[7];
  const videos = newsData[8];
  const othersNews = newsData[9]

  return (

    <section className="container mx-auto mt-5 px-3 sm:px-4 lg:px-0">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">

        {/* Left Section: Main News + Some News + Selected News */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

            <MainNewsCard data={mainNews} />

            <div className="border border-gray-300 bg-white p-4 grid gap-3 rounded-xl">
              {someMainNews.map((item) => (<MainNewtsListCard key={item.id} data={item} />))}
            </div>
          </div>

          {/* Selected News */}

          <NewsSectionCard title={selectedNews.title} articles={selectedNews.articles} />
          <NewsSectionCard title={bangladeshNews.title} articles={bangladeshNews.articles} />
          <NewsSectionCard title={indianNews.title} articles={indianNews.articles} />
          <NewsSectionCard title={world.title} articles={world.articles} />
          <NewsSectionCard title={health.title} articles={health.articles} />
          <NewsSectionCard title={videos.title} articles={videos.articles} />
          <NewsSectionCard title={othersNews.title} articles={othersNews.articles} />


        </div>


        {/* Most Readed News */}
        <div>
          <MostReadedNewsCard mostReadedNewsData={mostReadedNews} />
        </div>


      </div>


    </section>


  );
}
