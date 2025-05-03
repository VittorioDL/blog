import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';  // Importa la tipizzazione per i metadati
import ReactMarkdown from 'react-markdown';

async function fetchArticle(slug: string) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    next: { tags: ['article'] },
  };
  try {
    const res = await fetch(
      `${process.env.STRAPI_API_URL}/api/articles?filters[Slug][$eq]=${slug}&populate=*`,
      options
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

// Funzione per definire i metadati dinamicamente
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await fetchArticle(params.slug);
  const title = article.data[0].Title;
  const content = article.data[0].Content;
  const imgUrl = process.env.STRAPI_API_URL + article.data[0].FeaturedImage.url;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/articoli/${params.slug}`;

  return {
    title: `${title} | The Noticer`,
    description: content.substring(0, 160), // Usa un estratto del contenuto per la descrizione
    openGraph: {
      title,
      description: content.substring(0, 160),
      type: 'article',
      images: imgUrl,
      url: url,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: content.substring(0, 160),
      images: imgUrl,
    },
    
  };
}

const Page = async ({ params }: any) => {
  const article = await fetchArticle(params.slug);
  const imgUrl = process.env.STRAPI_API_URL + article.data[0].FeaturedImage.url;
  const date = new Date(article.data[0].publishedAt);
  const title = article.data[0].Title;
  const subtitle = article.data[0].Subtitle;
  const content = article.data[0].Content;
  const author = article.data[0].WrittenBy[0].Name + ' ' + article.data[0].WrittenBy[0].Surname;
  const formattedDate = `${date.getDate()} ${date.toLocaleString('it-IT', { month: 'short' }).charAt(0).toUpperCase()}${date.toLocaleString('it-IT', { month: 'long' }).slice(1)} ${date.getFullYear()}`;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/articoli/${params.slug}`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Image */}
      <div className="relative mb-8">
        <Image
          src={imgUrl}
          width={article.data[0].FeaturedImage.width}
          height={article.data[0].FeaturedImage.height}
          alt={title}
          className="w-full h-auto shadow-md object-cover"
        />
      </div>

      {/* Article Title and Subtitle */}
      <div className="mb-9">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-3">{title}</h1>
        <h2 className="text-base md:text-xl lg:text-2xl font-atlas text-gray-600">{subtitle}</h2>
      </div>

      {/* Article Content */}
      <div className="text-base md:text-xl font-atlas mx-auto space-y-4">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>

      {/* Published Date */}
      <div className="max-w-4xl mt-4 text-sm text-gray-500 italic">
        {formattedDate}, {author}
      </div>
    </div>
  );
};

export default Page;
