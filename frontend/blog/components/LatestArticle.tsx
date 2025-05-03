import Image from "next/image";
import Link from "next/link";

const LatestArticle = ({ latestArticle }: any) => {
  const imgUrl = process.env.STRAPI_API_URL + latestArticle.FeaturedImage.url;
  const title = latestArticle.Title;
  const author = latestArticle.WrittenBy[0].Name + ' ' + latestArticle.WrittenBy[0].Surname;
  const subtitle = latestArticle.Subtitle;

  return (
    
      <div className="relative w-full mx-auto h-[40vh] min-h-[250px] max-h-[430px] 
                     sm:h-[50vh] sm:min-h-[330px] md:h-[60vh] lg:max-h-[700px]
                     lg:max-w-6xl overflow-hidden">
        <Link href={`/articles/${latestArticle.Slug}`}>
        <Image
          src={imgUrl}
          alt={title}
          fill
          priority={true}
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
          <div className="w-full px-4 md:px-6 lg:px-7 pb-20">
            <div className="max-w-4xl text-white">
              <h1 className="text-[2.5rem] md:text-6xl lg:text-7xl font-playfair font-bold leading-tight mb-4">
                {title}
              </h1>
              {subtitle && (
                <p className="hidden [@media(min-width:425px)]:block md:text-2xl font-atlas text-white/90 mb-6 mt-6 max-w-3xl">
                  {subtitle}
                </p>
              )}
              <div className="absolute bottom-4 right-4">
                <div className="text-sm sm:text-base font-atlas italic text-white/80 ">
                  <span className="font-medium">{author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
  );
};

export default LatestArticle;
