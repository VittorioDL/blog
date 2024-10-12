import Articles from "@/components/Articles";
import LatestArticle from "@/components/LatestArticle";
import Image from "next/image";

async function getStaticProps() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  }
  try  {
    const res = await fetch("http://127.0.0.1:1338/api/articles?populate=*", options);
    const response = await res.json();
    return {
      props: {
        response,
      },
      revalidate: 5, // Ricarica la pagina ogni 10 secondi
    };
  } catch(err){
    console.error(err);
  }
}

export default async function Home() {
  const articles = await getStaticProps();
  return (
    <div className="bg-green-500">
      <LatestArticle/>
      <Articles articles={articles.props.response}/>
    </div>
  );
}
