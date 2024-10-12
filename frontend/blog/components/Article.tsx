import Image from "next/image"
import Link from "next/link";

const Article = ({ article }: any) => {

  const imgUrl = "http://127.0.0.1:1338" + article.FeaturedImage.url;

  return (
    <article className="border-2 border-red-400 mb-2">
      <Link href={`/articles/${article.documentId}`}>
        <h1 className="text-3xl font-bold">{article.Title}</h1>
        <h2 className="text-md font-medium ">{article.Subtitle}</h2>
        <Image 
          src={imgUrl}
          alt="immagine di copertina"
          width={300}
          height={300}
        />
      </Link>
    </article>
  )
}

export default Article
