// Articles.tsx
import Article from './Article';

const Articles = ({ articles }: any) => {
  return (
    <section className="w-full">
      <div className="mx-auto lg:max-w-6xl">
        <div className="flex flex-wrap justify-start gap-6 mb-6">
          {articles?.data?.slice(1).map((article: any) => (
            <Article 
              key={article.documentId}
              article={article}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;