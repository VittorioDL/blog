import Image from "next/image"
import Link from "next/link";

const LatestArticle = ({ latestArticle }: any) => {
  const imgUrl = process.env.STRAPI_API_URL + latestArticle.FeaturedImage.url;
  const title = latestArticle.Title;
  const author = latestArticle.WrittenBy[0].Name+' '+latestArticle.WrittenBy[0].Surname;
  const date = latestArticle.Date;
  const subtitle = latestArticle.Subtitle;
  const content = latestArticle.Content;
  return (
    <Link href={`/articles/${latestArticle.Slug}`}>
      <div className="bg-white shadow-lg overflow-hidden">
        {/* Contenitore dell'immagine con overlay di testo */}
        <div className="relative h-64 md:h-96">
          {/* Immagine dell'articolo */}
          <Image
            src={imgUrl}
            alt={title}
            fill // Usa fill per far sì che l'immagine copra l'intero contenitore
            style={{ objectFit: 'cover' }} // Opzione per mantenere l'aspetto dell'immagine
          />

          {/* Overlay di testo */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
            <div className="text-white">
              {/* Titolo dell'articolo */}
              <h2 className="text-2xl md:text-4xl font-bold mb-2">{title}</h2>

              {/* Autore e data */}
              <div className="flex items-center text-sm text-gray-300">
                <span className="mr-4">{author}</span>
                {/* <span>{date}</span> */}
              </div>

              {/* Descrizione dell'articolo (sotto l'immagine) */}
              <div className="p-6">
                <p className="text-base font-light sm:text-lg md:text-xl lg:text-2xl line-clamp-3 sm:line-clamp-2 md:line-clamp-3">
                  {content}
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </Link>
  );
}

export default LatestArticle
