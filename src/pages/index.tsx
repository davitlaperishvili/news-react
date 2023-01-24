import getPosts from '@/server/GetNews'
import MainContainer from '../layouts/MainContainer/MainContainer'
import PageWrapper from '../layouts/PageWrapper'
import { useEffect, useState } from 'react'
import {uid} from 'react-uid';
import Image from 'next/image'
import Link from 'next/link';
import { API_KEY } from '@/server/vars';
import PostsList from '@/components/Posts/PostsList';
import PageTitle from '@/components/pageParts/PageTitle';
type postsType = {
  news: {
      articles: {
          results: postType;
      }
  };
};
interface postType {
  url: string;
  title: string;
  image: string;
  description: string;
  map: Function;
  authors: authors[];
  uri: string
}
interface authors {
  name: string;
}
export default function Home({news} : postsType) {
 
  return (
    <PageWrapper>
      <MainContainer>
        <PageTitle title="See All Posts"/>
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
    articlesCount: 50,
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