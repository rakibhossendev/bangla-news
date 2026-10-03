export interface NavCategoriesItemType{
    slug: string;
    title: string;
    ulr: string;
    topicId: string | null;
    scrapable: boolean
}

export interface NavCategoriesType{
    success: boolean;
    count: string;
    cachedAt: string;
    data: NavCategoriesItemType[]
}

export interface CommonDataType{
    id: string;
    title: string;
    description: string;
    link: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
    type: string;
    isLive: boolean;
    firstPublished: string;
    lastPublished: string;
    source: string;
}

// id": "cq78pl4kmml8o",
//       "title": "ট্রাম্পের রপ্তানি নিষেধাজ্ঞা হুমকির পর ১০ কোটি ব্যারেল তেল ও ডিজেল ছাড়ার সিদ্ধান্ত নিল জি-৭",
//       "description": "এক যৌথ বিবৃতিতে জি-৭ দেশগুলো বলেছে, তারা একে অপরের বিরুদ্ধে জ্বালানি ও জ্বালানি-জাতীয় পণ্যের রপ্তানি নিষেধাজ্ঞা আরোপ থেকে বিরত থাকবে। এই জোটের সদস্য দেশ হলো যুক্তরাষ্ট্র, যুক্তরাজ্য, কানাডা, জাপান, জার্মানি, ইতালি ও ফ্রান্স। ইউরোপীয় ইউনিয়নও তাদের বৈঠকে প্রতিনিধিত্ব করে।",
//       "link": "https://www.bbc.com/bengali/articles/cq78pl4kmml8o",
//       "imageUrl": "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/ad6d/live/d0eea8a0-bed1-11f1-a64c-550be9e3c66b.jpg.webp",
//       "imageAlt": "এমানুয়েল ম্যাক্রঁ  এর বৈঠকে সভাপতিত্ব করেছেন",
//       "category": "প্রধান খবর",
//       "type": "article",
//       "isLive": false,
//       "firstPublished": "2026-10-03T03:43:57.454Z",
//       "lastPublished": "2026-10-03T03:43:57.454Z",
//       "source": "BBC Bangla