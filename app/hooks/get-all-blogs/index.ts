import { useQuery, QueryClient } from "@tanstack/react-query";

import { PostListResponse } from "@/app/type/posttype";
const UsefetchAllBlogs = () => {
  return useQuery<PostListResponse>({
    queryKey: ["all-blogs"],
    queryFn: async () => {
      const res = await fetch("/api/blogs");
      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }
      return res.json();
    },
  });
};

export default UsefetchAllBlogs;
