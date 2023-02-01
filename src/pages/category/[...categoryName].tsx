import PageTitle from '@/components/pageParts/PageTitle'
import PostsList from '@/components/Posts/PostsList';
import MainContainer from '@/layouts/MainContainer/MainContainer'
import PageWrapper from '@/layouts/PageWrapper'
import getPosts from '@/server/GetNews';
import { API_KEY } from '@/server/vars';
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
export default function categoryPosts({news} : postsType) {
  return (
    <>
    <PageWrapper>
      <MainContainer>
        <PageTitle title="Category Page"/>
        <PostsList news={news}/>
      </MainContainer>
    </PageWrapper>
    </>
  )
}
categoryPosts.getInitialProps = async (context: {
  query: {
    categoryName: string[]
  }
  req: {}
}) => {
  console.log(context)
  const categoryUri: string = context.query.categoryName.join("/");

  const requestObj = {
    action: "getArticles",
    lang: "eng",
    categoryUri,
    articlesPage: 1,
    articlesCount: 50,
    resultType: "articles",
    apiKey: API_KEY,
    articlesSortBy: "date",
    articlesSortByAsc: false,
    dataType: ["news"]
  }
  console.log(JSON.stringify(requestObj))
  const news = await getPosts("getArticles", JSON.stringify(requestObj))
  return {
    news
  }
}