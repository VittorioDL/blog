import Articles from "@/components/Articles";
import LatestArticle from "@/components/LatestArticle";
import Image from "next/image";

async function fetchArticles() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    },
    next: { tags: ['articles'] }
  }
  try  {
    // TO-DO: fetch only data that is displayed on the Article card
    // TO-DO: on-demand ISR with tags and webhooks
    const res = await fetch(`${process.env.STRAPI_API_URL}/api/articles?populate=*&sort=Date:desc`, options);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const response = await res.json();
    return response;
    
  } catch(err){
    console.error(err);
  }
}

export default async function Home() {
  const articles = await fetchArticles();
  const latestArticle = articles.data[0];
  return (
    <div>
      <LatestArticle latestArticle={latestArticle}/>
      <Articles articles={articles}/>
    </div>
  );
}
