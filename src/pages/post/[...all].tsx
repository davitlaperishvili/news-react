import MainContainer from '@/layouts/MainContainer/MainContainer';
import PageWrapper from '@/layouts/PageWrapper';
import getPosts from '@/server/GetNews';
import { API_KEY } from '@/server/vars';
import { useRouter } from 'next/router'
import React from 'react';
import classes from "./post_inside.module.scss";
type postsType = {
  news: {
      articles: {
          results: postType;
      }
  };
};
interface postType {
  // url: string;
  // title: string;
  // image: string;
  // description: string;
  // map: Function;
  // authors: authors[];
  // uri: string;
  info: info;
}
interface authors {
  name: string;
}
interface info {
  info: {
    authors: authors[];
    body: string;
    title: string;
    date: string;
    image: string;
  }
}

export default function PostInside(props: {post: postType; uri: string}) {
  if(!props.post){
    return (
      <div>Loading...</div>
    )
  }
  const postUri = props.uri;
  const postInfo = props.post[postUri as keyof typeof props.post].info;
  type OnlyKeys = keyof typeof props.post;
  
  console.log(postUri)
  console.log(postInfo)
  let author = ""
  if(postInfo.authors.length > 0){
      author += postInfo.authors[0].name
  }else{
      author += "No Data"
  }
  console.log(postInfo)
  return (
    <PageWrapper>
      <MainContainer>
        <article className={classes.post_inside}>
            <h1 className={classes.post_title}>{postInfo.title}</h1>
            <figure>
              <img src={postInfo.image ?? "../no_image.jpg"} alt={postInfo.title} />
            </figure>
            <div className={classes.post_content} dangerouslySetInnerHTML={{__html: postInfo.body}}></div>
            <div className={classes.post_details}>
              <div className={classes.post_date}><span>Created at:</span> {postInfo.date}</div>
              <div className={classes.post_author}><span>Author:</span> {author}</div>
            </div>
        </article>
      </MainContainer>
    </PageWrapper>
  )
}

PostInside.getInitialProps = async (context: {
  query: {
    all: [0]
  }
  req: {}
}) => {
  const uri: string = context.query.all[0].toString();
  const requestObj = {

    action: "getArticle",
    articleUri: uri,
    resultType: "info",
    apiKey: API_KEY
  }
  const post = await getPosts("getArticle", JSON.stringify(requestObj))

  return {
    post,
    uri
  }
}
