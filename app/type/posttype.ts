export interface PostStats {
  views: number;
  likes: number;
  shares: number;
  comments: number;
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  status: string;
  sourceLink?: string;
  tags: string[];
  image: string | null;
  author: string | null;
  publishedAt: string;
  updatedAt: string;
  PostStats: PostStats | null;
}

export type PostListResponse = Post[];
