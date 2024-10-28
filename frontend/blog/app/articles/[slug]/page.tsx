import Image from 'next/image';
import React from 'react'

async function fetchArticle(slug : string) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    },
    next: { tags: ['article'] }
  }
  try  {
    const res = await fetch(`${process.env.STRAPI_API_URL}/api/articles?filters\[Slug][$eq]=${slug}&populate=*`, options);
    const response = await res.json();
    return response;
  } catch(err){
    console.error(err);
  }
}

const page = async ({ params }: any) => {
  const { slug } = await params;
  const article = await fetchArticle(slug);
  const imgUrl = process.env.STRAPI_API_URL + article.data[0].FeaturedImage.url;
  return (
    <div>
      <p className="text-2xl">{article.data[0].Title}</p>
      <p className="text-xl">{article.data[0].Subtitle}</p>
      
      <Image 
        src={imgUrl}
        width={article.data[0].FeaturedImage.width}
        height={article.data[0].FeaturedImage.width}
        alt="aa"
      />
    </div>
  )
}

export default page
