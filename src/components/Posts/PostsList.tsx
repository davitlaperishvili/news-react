import React from 'react'
import {uid} from 'react-uid';
import Post from './Post';
import styles from "./posts_list.module.scss"
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
export default function PostsList(props: postsType) {
    
    const news = props.news
    function renderPosts () {
        return news.articles.results.map( (post: postType) => {
            let author = ""
            if(post.authors.length > 0){
                author += post.authors[0].name
            }else{
                author += "No Data"
            }
          return (
            <Post 
                key={post.uri} 
                title={post.title} 
                image={post.image} 
                description={post.description} 
                author={author} 
                url={post.uri}
            />
          )
        })
      }
  return (
    <div className={`${styles.post_list} ${styles.general_list}`}>
        {renderPosts()}
    </div>
  )
}
