type ExperiencesType = {
  title: string
  company_name: string
  icon: any
  iconBg: string
  date: string
  points: string[]
}
type TagType = {
  id: number
  name: string
}
type CategoryType = {
  id: number
  name: string
}

type BlogType = {
  id?: number
  title: string
  headline: string
  slug: string
  description: string
  thumbnail: string
  category: string
  tags: TagType[]
  published: string | Date
  status: string
  pin_to_top?: boolean
  description: string
  body?: string | TrustedHTML
}

type CommentType = {
  id: number
  first_name: string
  last_name: string
  email: string
  description: string
  created: string
}

type CollectionType = {
  pin_blogs: BlogType[]
  recent_blogs: BlogType[]
}
type FilterType = {
  archives: string[]
  categories: CategoryType[]
  tags: TagType[]
}
type BlogDetailType = {
  comments: CommentType[]
} & BlogType
type BlogInitialValuesType = {
  title: string
  headline: string
  slug: string
  category: CategoryType
  tags: TagType[]
  body: string
  status: string
  thumbnail?: string
}
type TokenType = {
  refresh: string
  access: string
  iat: number
  exp: number
  jti: string
  error?: any
}
type SessionType = {
  user: TokenType
  expires: string
}

type DecodedTokenType = {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
  user_id: number;
}
