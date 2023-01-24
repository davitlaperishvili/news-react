import PageTitle from '@/components/pageParts/PageTitle'
import PostsList from '@/components/Posts/PostsList'
import MainContainer from '@/layouts/MainContainer/MainContainer'
import PageWrapper from '@/layouts/PageWrapper'
import getPosts from '@/server/GetNews'
import { API_KEY } from '@/server/vars'
import React from 'react'
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
export default function SearchResult({news} : postsType) {
  return (
    <>
    <PageWrapper>
      <MainContainer>
        <PageTitle title="See All Posts"/>
        <PostsList news={news}/>
      </MainContainer>
    </PageWrapper>
    </>
  ) 
}
SearchResult.getInitialProps = async (context: {
    query: {
        search_word: string
    }
  }) => {
    const requestObj = {
      action: "getArticles",
      keyword: context.query.search_word,
      keywordLoc: "title",
      lang: "eng",
      articlesPage: 1,
      articlesCount: 50,
      resultType: "articles",
      apiKey: API_KEY,
      articlesSortBy: "date",
      articlesSortByAsc: false,
      dataType: ["news", "blog"]
    }
    const news = await getPosts("getArticles", JSON.stringify(requestObj))
  
    return {
      news
    }
  }