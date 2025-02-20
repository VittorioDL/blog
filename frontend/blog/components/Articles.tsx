import Article from './Article';

const Articles = ({ articles }: any) => {
  return (
    <section className="flex flex-wrap justify-start gap-4 mb-6">
      {articles?.data?.slice(1).map((article: any) => (
        <Article 
          key={article.documentId}
          article={article}
        />
      ))}
    </section>
  );
};

export default Articles;
