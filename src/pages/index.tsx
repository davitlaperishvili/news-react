import getPosts from '@/server/GetNews'
import MainContainer from '../layouts/MainContainer/MainContainer'
import PageWrapper from '../layouts/PageWrapper'
import { useEffect, useState } from 'react'
import {uid} from 'react-uid';
import Image from 'next/image'
import Link from 'next/link';
import { API_KEY } from '@/server/vars';
import PostsList from '@/components/Posts/PostsList';

export default function Home({news} : {news: object}) {
 
  return (
    <PageWrapper>
      <MainContainer>
        <h1 className='page_title'>Index Page</h1>
        <PostsList news={news}/>
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