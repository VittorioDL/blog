import Image from 'next/image';
import React from 'react';
import ReactMarkdown from "react-markdown";

async function fetchArticle(slug: string) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    next: { tags: ['article'] },
  };
  try {
    const res = await fetch(
      `${process.env.STRAPI_API_URL}/api/articles?filters[Slug][$eq]=${slug}&populate=*`,
      options
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

const Page = async ({ params }: any) => {
  const article = await fetchArticle(params.slug);
  const imgUrl = process.env.STRAPI_API_URL + article.data[0].FeaturedImage.url;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Image */}
      <div className="relative mb-8">
        <Image
          src={imgUrl}
          width={article.data[0].FeaturedImage.width}
          height={article.data[0].FeaturedImage.height}
          alt={article.data[0].Title}
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Article Title and Subtitle */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{article.data[0].Title}</h1>
        <h2 className="text-lg text-gray-600">{article.data[0].Subtitle}</h2>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg text-gray-800 mx-auto space-y-4">
        {/* The content of the article is stored in the "Content" field */}
        <ReactMarkdown>{article.data[0].Content}</ReactMarkdown>
        
      </div>
    </div>
  );
};

export default Page;
