import getPosts from '@/server/GetNews'
import MainContainer from '../layouts/MainContainer/MainContainer'
import PageWrapper from '../layouts/PageWrapper'
import { useEffect, useState } from 'react'
import {uid} from 'react-uid';
import Image from 'next/image'
import Link from 'next/link';
import { API_KEY } from '@/server/vars';

export default function Home({news} : {news: object}) {
  // const [news, setNews] = useState([])
  // useEffect( () => {
  //   (async function () {
  //     setNews(await getPosts("bitcoin"))
  //   })()
  // })
  function renderPosts () {
    return news.articles.results.map( post => {
      const url = (new URL(post.url)).pathname;
      return (
        <article className="news_post" key={uid(post)}>
          <h3 className="post_title">{post.title}</h3>
          <figure>
            <img src={post.image} alt={post.title} />
          </figure>
          <div className="post_excerpt">{post.description}</div>
          <div className="post_bottom">
            <div className="author_name">{post.author}</div>
            <div className="read_more">
              <Link href={`/post${url}`}>Read More</Link>
            </div>
          </div>
        </article>
      )
    })
  }
  return (
    <PageWrapper>
      <MainContainer>
        <h1>Index Page changed</h1>
        <div className="news">{renderPosts()}</div>
        <div className="news"><pre>{JSON.stringify(news, null, 2)}</pre></div>
      </MainContainer>
    </PageWrapper>
  )
}
Home.getInitialProps = async () => {
  const requestObj = {

    action: "getArticles",
    lang: "eng",
    articlesPage: 1,
    articlesCount: 10,
    resultType: "articles",
    apiKey: API_KEY,
    articlesSortBy: "date",
    articlesSortByAsc: false,
    dataType: ["news"]
  }
  const news = await getPosts("getArticles", JSON.stringify(requestObj))

  return {
    news
  }
}