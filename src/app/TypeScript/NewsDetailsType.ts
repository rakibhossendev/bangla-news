export interface NewsDetailsType {
  success: boolean
  cachedAt: string
  data: Data
}

export interface Data {
  id: string
  title: string
  description: Description
  link: string
  firstPublished: string
  lastPublished: string
  byline: string[]
  topics: Topic[]
  tags: string[]
  imageUrl: string
  body: ArticleBody[]
  text: string
  wordCount: number
  source: string
  sourceUrl: string
}

export interface Description {
  blocks: Block[]
}

export interface Block {
  type: string
  model: Model
}

export interface Model {
  blocks: Block2[]
}

export interface Block2 {
  type: string
  model: Model2
}

export interface Model2 {
  text: string
  blocks: Block3[]
}

export interface Block3 {
  type: string
  model: Model3
}

export interface Model3 {
  text: string
  attributes: string[]
}

export interface Topic {
  id: string
  name: string
}

export interface ArticleBody {
  type: string
  url?: string
  width?: number
  height?: number
  caption?: string
  altText?: string
  copyrightHolder?: string
  text?: string
}
