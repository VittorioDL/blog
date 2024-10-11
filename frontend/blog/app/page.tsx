import Articles from "@/components/Articles";
import LatestArticle from "@/components/LatestArticle";
import Image from "next/image";

async function fetchArticles() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  }
  try  {
    const res = await fetch("http://127.0.0.1:1338/api/articles?populate=*", options);
    const response = await res.json();
    return response;
  } catch(err){
    console.error(err);
  }
}

export default async function Home() {
  const articles = await fetchArticles();
  
  return (
    <div className="bg-green-500">
      <LatestArticle/>
      <Articles articles={articles}/>
    </div>
  );
}
