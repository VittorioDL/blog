import Image from "next/image";
import Link from "next/link";

const Article = ({ article }: any) => {
  const imgUrl = process.env.STRAPI_API_URL + article.FeaturedImage.url;

  return (
    <article className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 mb-4">
      <Link href={`/articles/${article.Slug}`}>
        <div className="block w-full h-full">
          {/* Immagine di copertura */}
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={imgUrl}
              alt="immagine di copertura"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>

          {/* Overlay del testo sopra l'immagine */}
          <div className="absolute inset-0  flex flex-col justify-center items-center text-white p-4">
            <h1 className="text-2xl font-bold md:text-3xl">{article.Title}</h1>
            <h2 className="text-md font-normal mt-2">{article.Subtitle}</h2>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Article;
