import React from 'react'

async function fetchArticle(id : number) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  }
  try  {
    const res = await fetch(`http://127.0.0.1:1338/api/articles?${id}?populate=*`, options);
    const response = await res.json();
    return response;
  } catch(err){
    console.error(err);
  }
}

const page = async ({ params }: any) => {

  console.log(params);
  const article = await fetchArticle(params.id);
  console.log(article);
  return (
    <div>
      welaa
      <p>{article.Title}</p>
    </div>
  )
}

export default page
