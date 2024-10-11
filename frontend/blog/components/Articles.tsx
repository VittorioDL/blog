import Article from "./Article"

const Articles = ({ articles }: any) => {
  

  return (
    <section className="border-4 border-blue-400 mb-2">
      All articles
      {articles?.data?.map((article: any) => (
        <Article 
          key={article.id}
          article={article}
        />
      ))}
    </section>
  )
}

export default Articles
