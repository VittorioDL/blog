import Image from "next/image";
import Link from "next/link";

const Article = ({ article }: any) => {
  const imgUrl = process.env.STRAPI_API_URL + article.FeaturedImage.url;
  const date = new Date(article.publishedAt);
  const formattedDate = `${date.getDate()} ${date.toLocaleString('it-IT', { month: 'short' }).charAt(0).toUpperCase()}${date.toLocaleString('it-IT', { month: 'long' }).slice(1)} ${date.getFullYear()}`;  

  return (
    <article className="w-full sm:w-[48%] md:w-[47%] lg:w-[31%] min-w-[300px] p-4">
      <Link href={`/articles/${article.Slug}`} className="w-full block">
        <div className="flex flex-col w-full h-full">
          {/* Immagine - rapporto 16:9 */}
          <div className="relative w-full aspect-[16/10] mb-4">
            <Image
              src={imgUrl}
              alt="immagine di copertina"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-sm"
            />
          </div>

          {/* Testo allineato a sinistra */}
          <div className="w-full">
            <h1 className="text-2xl md:text-2xl lg:text-3xl font-playfair font-bold mb-1 line-clamp-2">{article.Title}</h1>
            <h2 className="text-base md:text-lg font-atlas font-normal line-clamp-2 mb-2">{article.Subtitle}</h2>
            <div className="flex items-center text-sm text-gray-500 font-atlas">
              <span>
                {formattedDate}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Article;