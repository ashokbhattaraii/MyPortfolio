interface Blog {
  id: string;
  title: string;
  content: string;
  author: { name: string };
  imageUrl: string;
}

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_PRODUCTION_URL) {
    return process.env.NEXT_PUBLIC_PRODUCTION_URL;
  }
  return `http://localhost:${process.env.PORT}`;
};

async function GetBlog(): Promise<Blog[]> {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/api/blogs`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Fetch failed from ${url}. Status: ${response.status}`);
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Network error during fetch:", error);
    return [];
  }
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const BlogDetail = await GetBlog();
  console.log(BlogDetail);
  const requestedIndex = Number(blogId);

  const targetBlog = BlogDetail[requestedIndex];

  return (
    <>
      <div
        id="blogDetailContainer"
        className="mt-23 w-full max-w-7xl flex flex-col justify-center items-center"
      >
        <p
          id="title"
          className="text-center  text-2xl font-bold text-blue-700  transition-transform ease-out duration-200 hover:scale-105 hover:text-blue-200"
        >
          {targetBlog.title}
        </p>
        <img
          src={targetBlog.imageUrl}
          alt=""
          className="w-1/2 h-full mt-5 rounded transition-transform ease-out duration-200 hover:scale-105"
        />
        <p id="content" className="mt-10 w-1/2">
          {targetBlog?.content}
        </p>
      </div>
    </>
  );
}
