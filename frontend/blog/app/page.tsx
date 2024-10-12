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
    // TO-DO: fetch only data that is displayed on the Article card
    const res = await fetch("http://127.0.0.1:1338/api/articles?populate=*", options);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const response = await res.json();
    return response;
    // return {
    //   props: {
    //     response,
    //   },
    //   revalidate: 5, // Ricarica la pagina ogni 10 secondi
    // };
  } catch(err){
    console.error(err);
  }
}

//TO-DO: add ISR rendering
export default async function Home() {
  const articles = await fetchArticles();
  return (
    <div className="bg-green-500">
      <LatestArticle/>
      <Articles articles={articles}/>
    </div>
  );
}
