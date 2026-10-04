
export interface CategoriesDataType{
    category: string;
    description: string;
    firstPublished: string;
    id: string;
    imageAlt: string;
    imageUrl: string;
    isLive: string;
    lastPublished: string;
    link: string;
    source: string;
    title: string;
    type: string; 
}


export interface CategoriesResponseType{
    page: number;
    pageCount: number;
    data: CategoriesDataType[];
}

