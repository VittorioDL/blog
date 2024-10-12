import Image from 'next/image';
import React from 'react'

async function fetchArticle(slug : string) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  }
  try  {
    const res = await fetch(`http://127.0.0.1:1338/api/articles?filters\[Slug][$eq]=${slug}&populate=*`, options);
    const response = await res.json();
    return response;
  } catch(err){
    console.error(err);
  }
}

const page = async ({ params }: any) => {
  const article = await fetchArticle(params.slug);
  const imgUrl = "http://127.0.0.1:1338" + article.data[0].FeaturedImage.url;
  return (
    <div>
      welaa
      <p>{article.data[0].Title}</p>
      
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
