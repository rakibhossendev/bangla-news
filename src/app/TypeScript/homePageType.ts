import { CommonDataType } from "./NavCategories";

export interface HomeNewsDatatType{
    title: string;
    curationType: string;
    link: string | null;
    count: number;
    articles: CommonDataType[];
}

export interface   MostReadedDataType extends CommonDataType{
    rank: number;
}

//   "data": [
//     {
//       "id": "cq78pl4kmml8o",
//       "title": "ট্রাম্পের রপ্তানি নিষেধাজ্ঞা হুমকির পর ১০ কোটি ব্যারেল তেল ও ডিজেল ছাড়ার সিদ্ধান্ত নিল জি-৭",
//       "description": null,
//       "link": "https://www.bbc.com/bengali/articles/cq78pl4kmml8o",
//       "imageUrl": null,
//       "imageAlt": null,
//       "category": "সর্বাধিক পঠিত",
//       "type": "article",
//       "isLive": false,
//       "firstPublished": "2026-10-03T03:43:57.454Z",
//       "lastPublished": null,
//       "source": "BBC Bangla",
//       "rank": 1
//     },