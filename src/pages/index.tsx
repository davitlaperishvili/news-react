import getPosts from '@/server/GetNews'
import MainContainer from 'layouts/MainContainer/MainContainer'
import PageWrapper from 'layouts/PageWrapper'
import { useEffect, useState } from 'react'
import {uid} from 'react-uid';
import Image from 'next/image'

export default function Home({news} : {news: object}) {
  // const [news, setNews] = useState([])
  // useEffect( () => {
  //   (async function () {
  //     setNews(await getPosts("bitcoin"))
  //   })()
  // })
  function renderPosts () {
    return news.articles.map( post => {
      return (
        <article className="news_post" key={uid(post)}>
          <h3 className="post_title">{post.title}</h3>
          <figure>
            <Image
              src={post.urlToImage}
              alt={post.title}
              width={300}
              height={400}
            />
          </figure>
          <div className="post_excerpt">{post.description}</div>
          <div className="author_name">{post.author}</div>
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
  const news = await getPosts("bitcoin")

  return {
    news
  }
}